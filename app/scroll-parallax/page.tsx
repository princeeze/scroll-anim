"use client";
import image1 from "@/public/landscape/1.jpg";
import image2 from "@/public/landscape/2.jpeg";
import image3 from "@/public/landscape/3.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const framerText = "with framer-motion";

export default function Index() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

  const images = [
    {
      src: image1,
    },
    {
      src: image2,
    },
    {
      src: image3,
    },
  ];

  const ParallaxText = ({ letter }: { letter: string }) => {
    const rd = Math.floor(Math.random() * 5) * -1;
    const ft = useTransform(scrollYProgress, [0, 1], [0, rd]);

    return (
      <motion.span style={{ top: ft }} className="relative">
        {letter}
      </motion.span>
    );
  };

  return (
    <div className="cont">
      <div className="h-[100vh]"></div>
      <div className="m-[10vh]" ref={containerRef}>
        <motion.h1
          style={{ y: sm }}
          className="text-[6vw] font-black uppercase"
        >
          Parallax
        </motion.h1>
        <motion.h1
          style={{ y: md }}
          className="text-[6vw] font-black uppercase"
        >
          Scroll
        </motion.h1>
        <div className="word">
          <p>
            {framerText.split("").map((letter, i) => {
              return <ParallaxText key={`l_${i}`} letter={letter} />;
            })}
          </p>
        </div>
      </div>
      <div className="relative mt-[10vh] flex w-full justify-center">
        {images.map(({ src }, i) => {
          return (
            <motion.div
              key={`i_${i}`}
              className={`relative ${
                i === 0 ? "left-[20vw] top-[10vh] z-10 h-[60vh] w-[50vh]" : ""
              } ${
                i === 1 ? "left-[10vw] top-[15vh] z-20 h-[40vh] w-[30vh]" : ""
              } ${
                i === 2 ? "left-[-56vw] top-[5vh] z-30 h-[25vh] w-[20vh]" : ""
              }`}
            >
              <Image
                src={src}
                placeholder="blur"
                alt="image"
                fill
                className="object-cover"
              />
            </motion.div>
          );
        })}
      </div>

      <div className="h-[50vh]"></div>
    </div>
  );
}
