import { useEffect, useState } from "react";

interface WindowDimension {
  width: number;
  height: number;
}

export default function useWindow(): { dimension: WindowDimension } {
  const [dimension, setDimension] = useState<WindowDimension>({
    width: 0,
    height: 0,
  });

  const resize = () => {
    setDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return { dimension };
}
