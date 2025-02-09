"use client";

import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

const SlugComponent = ({
  image,
}: string | string[] | StaticImageData | any) => {
  const [path, setPath] = useState("");

  return (
    <div>
      <Image
        alt="e-commerce"
        width={400}
        height={400}
        className="h-[450px] rounded-lg"
        src={path ? path : image[0]}
      />

      <div className="flex items-center justify-center gap-4 mx-auto mt-2">
        {image.map((item: string, i: number) => (
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
