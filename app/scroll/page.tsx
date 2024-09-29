"use client";

import Image from "next/image";
import img1 from "@/public/1.jpg";
import img2 from "@/public/2.jpg";
import img3 from "@/public/3.jpg";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";

export default function ScrollPage() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  return (
    <main className="overflow-hidden">
      <div className="h-[100vh] flex justify-center items-center">
        <span className="text-[10vw] font-bold animate-bounce">Scroll ↓</span>
      </div>
      <div ref={container}>
        <Slider
          src={img1.src}
          text="Front End Developer"
          left="-70%"
          progress={scrollYProgress}
          direction="left"
        />
        <Slider
          src={img2.src}
          text="Product Designer"
          left="-40%"
          progress={scrollYProgress}
          direction="right"
        />
        <Slider
          src={img3.src}
          text="Web Developer"
          left="-50%"
          progress={scrollYProgress}
          direction="left"
        />
      </div>
      <div className="h-[100vh]"></div>
    </main>
  );
}

const Slider = ({
  src,
  text,
  left,
  progress,
  direction,
}: {
  src: string;
  text: string;
  left: string;
  progress: MotionValue<number>;
  direction: "left" | "right";
}) => {
  const dirX = direction === "left" ? -1 : 1;
  const x = useTransform(progress, [0, 1], [-400 * dirX, 400 * dirX]);
  return (
    <motion.div className="flex whitespace-nowrap relative" style={{ left, x }}>
      <Phrase src={src} text={text} />
      <Phrase src={src} text={text} />
      <Phrase src={src} text={text} />
    </motion.div>
  );
};

const Phrase = ({ src, text }: { src: string; text: string }) => {
  return (
    <div className="px-5 flex gap-5 items-center">
      <p className="text-[7.5vw]">{text}</p>
      <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
        <Image style={{ objectFit: "cover" }} src={src} alt="image" fill />
      </span>
    </div>
  );
};
