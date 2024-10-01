"use client";
import image1 from "@/public/landscape/5.jpg";
import image2 from "@/public/landscape/2.jpeg";
import image3 from "@/public/landscape/3.jpg";
import image4 from "@/public/landscape/4.jpg";
import image5 from "@/public/other/1.jpeg";
import image6 from "@/public/other/2.jpeg";
import image7 from "@/public/other/3.jpg";
import Image, { StaticImageData } from "next/image";
import { motion, useTransform, useScroll, MotionValue } from "framer-motion";
import { CSSProperties, useRef } from "react";

export default function ZoomParallax() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale2 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale3 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4.5]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 7]);

  type ImageData = {
    src: StaticImageData;
    scale: MotionValue<number>;
    style: CSSProperties;
  };

  const images: ImageData[] = [
    {
      src: image1,
      scale: scale1,
      style: { width: "25vw", height: "27vh" },
    },
    {
      src: image2,
      scale: scale2,
      style: { top: "7vh", left: "7vw", width: "27vw", height: "30vh" },
    },
    {
      src: image3,
      scale: scale3,
      style: { top: "7vh", left: "66vw", width: "27vw", height: "31vh" },
    },
    {
      src: image4,
      scale: scale4,
      style: { top: "7vh", left: "37.5vw", width: "25vw", height: "25vh" },
    },
    {
      src: image5,
      scale: scale5,
      style: { top: "42.5vh", left: "5vw", width: "28vw", height: "50vh" },
    },
    {
      src: image6,
      scale: scale6,
      style: { top: "67.5vh", left: "36.5vw", width: "26vw", height: "55vh" },
    },
    {
      src: image7,
      scale: scale4,
      style: { top: "42.5vh", left: "66vw", width: "29vw", height: "51vh" },
    },
  ];

  return (
    <>
      <div className="h-[100vh]"></div>

      <motion.div ref={container} className="relative h-[300vh]">
        <div className="sticky top-0 h-[100vh] overflow-hidden flex justify-center items-center">
          {images.map(({ src, scale, style }, index) => (
            <motion.div
              key={index}
              style={{ scale }}
              className="w-full absolute flex justify-center items-center h-full overflow-hidden top-0 "
            >
              <div
                className="absolute"
                style={{
                  ...style,
                }}
              >
                <Image
                  src={src}
                  alt={`image${index + 1}`}
                  fill={true}
                  className="object-cover"
                  placeholder="blur"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="h-[100vh]"></div>
    </>
  );
}
