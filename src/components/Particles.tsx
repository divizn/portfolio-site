import { onCleanup, onMount } from "solid-js";

type Circle = {
  x: number;
  y: number;
  translateX: number;
  translateY: number;
  size: number;
  alpha: number;
  targetAlpha: number;
  dx: number;
  dy: number;
  magnetism: number;
};

type ParticlesProps = {
  class?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
};

export default function Particles(props: ParticlesProps) {
  let canvasRef: HTMLCanvasElement | undefined;
  let canvasContainerRef: HTMLDivElement | undefined;
  let context: CanvasRenderingContext2D | null = null;
  let circles: Circle[] = [];
  let animationFrame = 0;
  const mouse = { x: 0, y: 0 };
  const canvasSize = { w: 0, h: 0 };
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;

  const quantity = () => props.quantity ?? 30;
  const staticity = () => props.staticity ?? 50;
  const ease = () => props.ease ?? 50;

  const circleParams = (): Circle => {
    const x = Math.floor(Math.random() * canvasSize.w);
    const y = Math.floor(Math.random() * canvasSize.h);
    const size = Math.floor(Math.random() * 2) + 0.1;
    const targetAlpha = Number.parseFloat((Math.random() * 0.6 + 0.1).toFixed(1));
    const dx = (Math.random() - 0.5) * 0.2;
    const dy = (Math.random() - 0.5) * 0.2;
    const magnetism = 0.1 + Math.random() * 4;
    return { x, y, translateX: 0, translateY: 0, size, alpha: 0, targetAlpha, dx, dy, magnetism };
  };

  const clearContext = () => {
    context?.clearRect(0, 0, canvasSize.w, canvasSize.h);
  };

  const drawCircle = (circle: Circle, update = false) => {
    if (!context) return;
    const { x, y, translateX, translateY, size, alpha } = circle;
    context.translate(translateX, translateY);
    context.beginPath();
    context.arc(x, y, size, 0, 2 * Math.PI);
    context.fillStyle = `rgba(255, 255, 255, ${alpha})`;
    context.fill();
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (!update) circles.push(circle);
  };

  const drawParticles = () => {
    clearContext();
    for (let i = 0; i < quantity(); i++) {
      drawCircle(circleParams());
    }
  };

  const resizeCanvas = () => {
    if (!canvasContainerRef || !canvasRef || !context) return;
    circles = [];
    canvasSize.w = canvasContainerRef.offsetWidth;
    canvasSize.h = canvasContainerRef.offsetHeight;
    canvasRef.width = canvasSize.w * dpr;
    canvasRef.height = canvasSize.h * dpr;
    canvasRef.style.width = `${canvasSize.w}px`;
    canvasRef.style.height = `${canvasSize.h}px`;
    context.scale(dpr, dpr);
  };

  const initCanvas = () => {
    resizeCanvas();
    drawParticles();
  };

  const onPointerMove = (event: PointerEvent) => {
    if (!canvasRef) return;
    const rect = canvasRef.getBoundingClientRect();
    const { w, h } = canvasSize;
    const x = event.clientX - rect.left - w / 2;
    const y = event.clientY - rect.top - h / 2;
    const inside = x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2;
    if (inside) {
      mouse.x = x;
      mouse.y = y;
    }
  };

  const remapValue = (
    value: number,
    start1: number,
    end1: number,
    start2: number,
    end2: number,
  ): number => {
    const remapped = ((value - start1) * (end2 - start2)) / (end1 - start1) + start2;
    return remapped > 0 ? remapped : 0;
  };

  const animate = () => {
    clearContext();
    circles.forEach((circle, i) => {
      const edge = [
        circle.x + circle.translateX - circle.size,
        canvasSize.w - circle.x - circle.translateX - circle.size,
        circle.y + circle.translateY - circle.size,
        canvasSize.h - circle.y - circle.translateY - circle.size,
      ];
      const closestEdge = edge.reduce((a, b) => Math.min(a, b));
      const remapClosestEdge = Number.parseFloat(remapValue(closestEdge, 0, 20, 0, 1).toFixed(2));

      if (remapClosestEdge > 1) {
        circle.alpha += 0.02;
        if (circle.alpha > circle.targetAlpha) circle.alpha = circle.targetAlpha;
      } else {
        circle.alpha = circle.targetAlpha * remapClosestEdge;
      }

      circle.x += circle.dx;
      circle.y += circle.dy;
      circle.translateX +=
        (mouse.x / (staticity() / circle.magnetism) - circle.translateX) / ease();
      circle.translateY +=
        (mouse.y / (staticity() / circle.magnetism) - circle.translateY) / ease();

      if (
        circle.x < -circle.size ||
        circle.x > canvasSize.w + circle.size ||
        circle.y < -circle.size ||
        circle.y > canvasSize.h + circle.size
      ) {
        circles.splice(i, 1);
        drawCircle(circleParams());
      } else {
        drawCircle(
          {
            ...circle,
            x: circle.x,
            y: circle.y,
            translateX: circle.translateX,
            translateY: circle.translateY,
            alpha: circle.alpha,
          },
          true,
        );
      }
    });
    animationFrame = requestAnimationFrame(animate);
  };

  onMount(() => {
    if (canvasRef) context = canvasRef.getContext("2d");
    initCanvas();
    animate();
    window.addEventListener("resize", initCanvas);
    window.addEventListener("pointermove", onPointerMove);
  });

  onCleanup(() => {
    if (typeof window === "undefined") return;
    cancelAnimationFrame(animationFrame);
    window.removeEventListener("resize", initCanvas);
    window.removeEventListener("pointermove", onPointerMove);
  });

  return (
    <div class={props.class} ref={canvasContainerRef} aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
