"use client";
import fallbackImage from "../../public/hero.jpg";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

interface SlugComponentProps {
  image?: string | string[] | StaticImageData;
}

const SlugComponent:React.FC<SlugComponentProps> = ({ image }) => {
  const [path, setPath] = useState("");

  return (
    <div>
      <Image
        alt="e-commerce"
        width={400}
        height={400}
        className="h-[450px] rounded-lg"
        src={path 
          ? path 
          : Array.isArray(image) 
            ? image[0] 
            : image || fallbackImage}
      />

      <div className="flex items-center justify-center gap-4 mx-auto mt-2">
        {Array.isArray(image) &&
        image.map((item: string, i: number) => (
          <div key={i} className="cursor-pointer w-[100px]">
            <Image
              alt="abc"
              src={item}
              width={1000}
              height={1000}
              className="w-[100px] h-[100px]"
              onClick={() => setPath(item)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlugComponent;
