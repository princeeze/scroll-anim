"use client";
import useWindow from "@/hooks/useWindow";
import { useEffect, useRef } from "react";

export default function Scene() {
  const { dimension } = useWindow();
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (dimension.height > 0) init();
  }, [dimension]);

  const init = () => {
    const ctx = canvas.current?.getContext("2d");
    if (!ctx) return;
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, dimension.width, dimension.height);
    ctx.globalCompositeOperation = "destination-out";
  };

  const draw = (x: number, y: number) => {
    const ctx = canvas.current?.getContext("2d");
    ctx?.beginPath();
    if (!ctx) return;
    ctx.fillStyle = "white";
    ctx.arc(x, y, 70, 0, Math.PI * 2);
    ctx.fill();
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const { clientX, clientY } = e;
    draw(clientX, clientY);
  };

  return (
    <div className="absolute h-full w-full">
      {dimension.height === 0 && <div className="h-full w-full bg-black"></div>}
      <canvas
        onMouseMove={handleMouseMove}
        ref={canvas}
        height={dimension.height}
        width={dimension.width}
      ></canvas>
    </div>
  );
}
