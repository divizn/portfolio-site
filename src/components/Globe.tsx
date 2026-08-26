import { onCleanup, onMount } from "solid-js";
import {
  BufferGeometry,
  Color,
  Group,
  LineBasicMaterial,
  LineLoop,
  PerspectiveCamera,
  Scene,
  Vector3,
  WebGLRenderer,
} from "three";

type GlobeProps = {
  class?: string;
  size?: number;
  radius?: number;
};

const LATITUDES = 9;
const LONGITUDES = 14;
const SEGMENTS = 96;

// evenly spaced lat/long rings, rather than a triangulated sphere wireframe
function ringGeometries(radius: number) {
  const geometries: { geometry: BufferGeometry; tilt: number }[] = [];

  for (let i = 1; i < LATITUDES; i++) {
    const phi = (i / LATITUDES) * Math.PI;
    const y = radius * Math.cos(phi);
    const r = radius * Math.sin(phi);
    const points = Array.from({ length: SEGMENTS }, (_, s) => {
      const theta = (s / SEGMENTS) * Math.PI * 2;
      return new Vector3(r * Math.cos(theta), y, r * Math.sin(theta));
    });
    geometries.push({ geometry: new BufferGeometry().setFromPoints(points), tilt: 0 });
  }

  for (let i = 0; i < LONGITUDES; i++) {
    const points = Array.from({ length: SEGMENTS }, (_, s) => {
      const theta = (s / SEGMENTS) * Math.PI * 2;
      return new Vector3(radius * Math.cos(theta), radius * Math.sin(theta), 0);
    });
    geometries.push({
      geometry: new BufferGeometry().setFromPoints(points),
      tilt: (i / LONGITUDES) * Math.PI,
    });
  }

  return geometries;
}

export default function Globe(props: GlobeProps) {
  let containerRef: HTMLDivElement | undefined;
  let renderer: WebGLRenderer | undefined;
  let material: LineBasicMaterial | undefined;
  let globe: Group | undefined;
  let renderScene: (() => void) | undefined;
  let animationFrame = 0;

  const size = () => props.size ?? 260;
  const radius = () => props.radius ?? 1;

  const readAccent = () => {
    if (!material) return;
    const accent = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim();
    if (accent) material.color = new Color(accent);
    renderScene?.();
  };

  onMount(() => {
    if (!containerRef) return;

    const scene = new Scene();
    const camera = new PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = radius() * 3.2;

    renderer = new WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(size(), size());
    containerRef.append(renderer.domElement);

    material = new LineBasicMaterial({ transparent: true, opacity: 0.55 });
    readAccent();

    globe = new Group();
    globe.rotation.z = 0.4;
    for (const { geometry, tilt } of ringGeometries(radius())) {
      const ring = new LineLoop(geometry, material);
      ring.rotation.y = tilt;
      globe.add(ring);
    }
    scene.add(globe);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    renderScene = () => renderer?.render(scene, camera);
    const animate = () => {
      if (globe) globe.rotation.y += 0.0018;
      renderScene?.();
      animationFrame = requestAnimationFrame(animate);
    };

    if (reduceMotion.matches) renderScene();
    else animate();

    window.addEventListener("themechange", readAccent);
    onCleanup(() => {
      if (typeof window === "undefined") return;
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("themechange", readAccent);
      globe?.children.forEach((ring) => (ring as LineLoop).geometry.dispose());
      material?.dispose();
      renderer?.dispose();
      renderer?.domElement.remove();
    });
  });

  return <div class={props.class} ref={containerRef} aria-hidden="true" />;
}
