import image1 from "@/public/landscape/1.jpg";
/* import image2 from "@/public/landscape/2.jpeg";
import image3 from "@/public/landscape/3.jpg";
import image4 from "@/public/landscape/4.jpg";
import image5 from "@/public/other/1.jpeg";
import image6 from "@/public/other/2.jpeg";
import image7 from "@/public/other/3.jpg";
import image8 from "@/public/other/4.jpg";
import image9 from "@/public/other/5.jpg"; */

import Image from "next/image";

export default function ZoomParallax() {
  return (
    <div className="h-[300vh] flex items-center relative">
      <div className="sticky flex bg-orange-500 w-full top-0 h-[100vh]">
        <div className="relative h-[25vw] w-[25vw]">
          <Image
            src={image1}
            alt="image1"
            fill={true}
            className="object-cover"
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
}
