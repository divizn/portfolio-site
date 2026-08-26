import { onCleanup, onMount } from "solid-js";
import {
  BufferGeometry,
  Color,
  Float32BufferAttribute,
  Group,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Points,
  PointsMaterial,
  Scene,
  SphereGeometry,
  WebGLRenderer,
} from "three";

type GlobeProps = {
  class?: string;
  spin?: number;
};

const MASK_URL = "/land-mask.png";
const SAMPLES = 22000;

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
    return data[(y * image.width + x) * 4] > 127;
  };
}

// fibonacci sphere, keeping only the samples that land on a continent
function landPositions(isLand: (lon: number, lat: number) => boolean) {
  const positions: number[] = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < SAMPLES; i++) {
    const y = 1 - (i / (SAMPLES - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = golden * i;
    const x = Math.cos(theta) * r;
    const z = Math.sin(theta) * r;
    const lat = (Math.asin(y) * 180) / Math.PI;
    const lon = (Math.atan2(z, x) * 180) / Math.PI;
    if (isLand(lon, lat)) positions.push(x, y, z);
  }
  return positions;
}

export default function Globe(props: GlobeProps) {
  let containerRef: HTMLDivElement | undefined;
  let renderer: WebGLRenderer | undefined;
  let dotMaterial: PointsMaterial | undefined;
  let occluderMaterial: MeshBasicMaterial | undefined;
  let globe: Group | undefined;
  let renderScene: (() => void) | undefined;
  let animationFrame = 0;

  const spin = () => props.spin ?? 0.0055;

  const readTheme = () => {
    const styles = getComputedStyle(document.documentElement);
    const accent = styles.getPropertyValue("--accent").trim();
    const background = styles.getPropertyValue("--background").trim();
    if (dotMaterial && accent) dotMaterial.color = new Color(accent);
    if (occluderMaterial && background)
      occluderMaterial.color = new Color(background);
    renderScene?.();
  };

  onMount(async () => {
    if (!containerRef) return;

    // registered before the first await, while the reactive owner still exists
    let dispose = () => {};
    onCleanup(() => dispose());

    const scene = new Scene();
    const camera = new PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 3.9;

    renderer = new WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
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

    dotMaterial = new PointsMaterial({
      size: 2,
      sizeAttenuation: false,
      transparent: true,
      opacity: 0.45,
    });
    // hides the far-side dots so the point cloud reads as a solid sphere
    occluderMaterial = new MeshBasicMaterial();

    const landGeometry = new BufferGeometry();
    landGeometry.setAttribute(
      "position",
      new Float32BufferAttribute(landPositions(isLand), 3),
    );

    globe = new Group();
    globe.add(new Points(landGeometry, dotMaterial));
    globe.add(new Mesh(new SphereGeometry(0.985, 48, 48), occluderMaterial));

    const system = new Group();
    system.rotation.z = 0.35;
    system.add(globe);
    scene.add(system);

    readTheme();

    renderScene = () => renderer?.render(scene, camera);
    const animate = () => {
      if (globe) globe.rotation.y += spin();
      renderScene?.();
      animationFrame = requestAnimationFrame(animate);
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      renderScene();
    else animate();

    window.addEventListener("themechange", readTheme);
    dispose = () => {
      cancelAnimationFrame(animationFrame);
      observer.disconnect();
      window.removeEventListener("themechange", readTheme);
      landGeometry.dispose();
      dotMaterial?.dispose();
      occluderMaterial?.dispose();
      renderer?.dispose();
      renderer?.domElement.remove();
    };
  });

  return <div class={props.class} ref={containerRef} aria-hidden="true" />;
}
