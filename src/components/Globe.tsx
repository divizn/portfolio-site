import { onCleanup, onMount } from "solid-js";
import {
  BufferGeometry,
  Color,
  Float32BufferAttribute,
  Group,
  PerspectiveCamera,
  Points,
  Scene,
  ShaderMaterial,
  WebGLRenderer,
} from "three";

type GlobeUniforms = {
  pixelRatio: { value: number };
  landColor: { value: Color };
  seaColor: { value: Color };
  fade: { value: number };
  intensity: { value: number };
};

type GlobeProps = {
  class?: string;
  spin?: number;
};

const MASK_URL = "/land-mask.png";
const LAT_STEP = 2.2;
const EQUATOR_NODES = 170;
const AXIAL_TILT = (23.44 * Math.PI) / 180;
const FADE_IN_MS = 1400;

const vertexShader = /* glsl */ `
  attribute float land;
  uniform float pixelRatio;
  varying float vFacing;
  varying float vLand;

  void main() {
    vLand = land;
    // every node sits on the unit sphere, so its position doubles as its normal
    vFacing = normalize(normalMatrix * position).z;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = mix(1.2, 2.9, land) * pixelRatio;
  }
`;

const fragmentShader = /* glsl */ `
  uniform vec3 landColor;
  uniform vec3 seaColor;
  uniform float fade;
  uniform float intensity;
  varying float vFacing;
  varying float vLand;

  void main() {
    // drop the far hemisphere over a narrow band so the limb stays a crisp edge
    float front = smoothstep(-0.12, 0.12, vFacing);
    if (front < 0.01) discard;
    float alpha = mix(0.09, 0.55, vLand) * front * fade * intensity;
    gl_FragColor = vec4(mix(seaColor, landColor, vLand), alpha);
  }
`;

async function landMask() {
  const image = new Image();
  image.src = MASK_URL;
  await image.decode();
  const canvas = document.createElement("canvas");
  canvas.width = image.width;
  canvas.height = image.height;
  const context = canvas.getContext("2d", { willReadFrequently: true });
  if (!context) return null;
  context.drawImage(image, 0, 0);
  const { data } = context.getImageData(0, 0, image.width, image.height);
  return (lon: number, lat: number) => {
    const x = Math.min(
      image.width - 1,
      Math.floor(((lon + 180) / 360) * image.width),
    );
    const y = Math.min(
      image.height - 1,
      Math.floor(((90 - lat) / 180) * image.height),
    );
    return (data[(y * image.width + x) * 4] ?? 0) > 127;
  };
}

// reduced gaussian grid: latitude rings at a fixed step, with the node count per ring
// scaled by cos(lat) so spacing stays even instead of bunching at the poles
function meshNodes(isLand: (lon: number, lat: number) => boolean) {
  const positions: number[] = [];
  const land: number[] = [];
  for (let lat = -90 + LAT_STEP / 2; lat < 90; lat += LAT_STEP) {
    const phi = (lat * Math.PI) / 180;
    const count = Math.max(1, Math.round(EQUATOR_NODES * Math.cos(phi)));
    for (let i = 0; i < count; i++) {
      const lon = (i / count) * 360 - 180;
      const theta = (lon * Math.PI) / 180;
      positions.push(
        Math.cos(phi) * Math.cos(theta),
        Math.sin(phi),
        Math.cos(phi) * Math.sin(theta),
      );
      land.push(isLand(lon, lat) ? 1 : 0);
    }
  }
  return { positions, land };
}

export default function Globe(props: GlobeProps) {
  let containerRef: HTMLDivElement | undefined;
  let renderer: WebGLRenderer | undefined;
  let material: ShaderMaterial | undefined;
  let uniforms: GlobeUniforms | undefined;
  let globe: Group | undefined;
  let renderScene: (() => void) | undefined;
  let animationFrame = 0;

  const spin = () => props.spin ?? 0.0055;

  const readTheme = () => {
    if (!uniforms) return;
    const styles = getComputedStyle(document.documentElement);
    const accent = styles.getPropertyValue("--accent").trim();
    const muted = styles.getPropertyValue("--muted-foreground").trim();
    const intensity = Number(styles.getPropertyValue("--globe-intensity"));
    if (accent) uniforms.landColor.value = new Color(accent);
    if (muted) uniforms.seaColor.value = new Color(muted);
    if (intensity) uniforms.intensity.value = intensity;
    renderScene?.();
  };

  onMount(async () => {
    if (!containerRef) return;

    // registered before the first await, while the reactive owner still exists
    let dispose = () => {};
    onCleanup(() => dispose());

    const scene = new Scene();
    const camera = new PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 3.6;

    renderer = new WebGLRenderer({ alpha: true, antialias: true });
    const pixelRatio = Math.min(window.devicePixelRatio, 2);
    renderer.setPixelRatio(pixelRatio);
    containerRef.append(renderer.domElement);

    const resize = () => {
      if (!containerRef || !renderer) return;
      const { width, height } = containerRef.getBoundingClientRect();
      if (!width || !height) return;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(containerRef);
    resize();
    dispose = () => {
      observer.disconnect();
      renderer?.dispose();
      renderer?.domElement.remove();
    };

    const isLand = await landMask();
    if (!isLand) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    uniforms = {
      pixelRatio: { value: pixelRatio },
      landColor: { value: new Color() },
      seaColor: { value: new Color() },
      fade: { value: reduceMotion ? 1 : 0 },
      intensity: { value: 1 },
    };
    material = new ShaderMaterial({
      vertexShader,
      fragmentShader,
      transparent: true,
      depthWrite: false,
      uniforms,
    });

    const { positions, land } = meshNodes(isLand);
    const geometry = new BufferGeometry();
    geometry.setAttribute("position", new Float32BufferAttribute(positions, 3));
    geometry.setAttribute("land", new Float32BufferAttribute(land, 1));

    globe = new Group();
    globe.add(new Points(geometry, material));

    const axis = new Group();
    axis.rotation.z = AXIAL_TILT;
    axis.add(globe);
    scene.add(axis);

    readTheme();

    renderScene = () => renderer?.render(scene, camera);
    const start = performance.now();
    const animate = (now: number) => {
      if (globe) globe.rotation.y += spin();
      if (uniforms) uniforms.fade.value = Math.min(1, (now - start) / FADE_IN_MS);
      renderScene?.();
      animationFrame = requestAnimationFrame(animate);
    };

    if (reduceMotion) renderScene();
    else animationFrame = requestAnimationFrame(animate);

    window.addEventListener("themechange", readTheme);
    dispose = () => {
      cancelAnimationFrame(animationFrame);
      observer.disconnect();
      window.removeEventListener("themechange", readTheme);
      geometry.dispose();
      material?.dispose();
      renderer?.dispose();
      renderer?.domElement.remove();
    };
  });

  return <div class={props.class} ref={containerRef} aria-hidden="true" />;
}
