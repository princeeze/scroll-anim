"use client";
import Image from "next/image";
import Pic1 from "@/public/landscape/1.jpg";
import Pic2 from "@/public/landscape/2.jpeg";
import { useEffect, useRef } from "react";
import { useScroll, useTransform, MotionValue, motion } from "framer-motion";
import Lenis from "lenis";

export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main ref={container} className="relative h-[200vh]">
      <Section1 scrollYProgress={scrollYProgress} />
      <Section2 scrollYProgress={scrollYProgress} />
    </main>
  );
}

const Section1 = ({ scrollYProgress }: { scrollYProgress: MotionValue }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  return (
    <motion.div
      className="sticky top-0 flex h-screen flex-col items-center justify-center bg-[#C72626] pb-[10vh] text-[3.5vw] text-white"
      style={{ scale, rotate }}
    >
      <p>Scroll Perspective</p>
      <div className="flex gap-4">
        <p>Section</p>
        <div className="relative w-[12.5vw]">
          <Image src={Pic1} alt="img" placeholder="blur" fill={true} />
        </div>
        <p>Transition</p>
      </div>
    </motion.div>
  );
};

const Section2 = ({ scrollYProgress }: { scrollYProgress: MotionValue }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 0]);
  return (
    <motion.div className="relative h-screen" style={{ scale, rotate }}>
      <div className="relative h-full w-full">
        <Image
          src={Pic2}
          alt="img"
          fill={true}
          placeholder="blur"
          className="object-cover"
        />
      </div>
    </motion.div>
  );
};
