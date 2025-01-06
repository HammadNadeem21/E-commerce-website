"use client";

import Image from "next/image";
import React, { useState } from "react";

import blackJacket from "../../public/best-selling/blackJacket.webp";
import tops from "../../public/Categories/tops.jpg";
import womenpants from "../../public/Categories/womenpants.jpg";
import womenshoes from "../../public/Categories/womenshoes.jpg";

const ProductComponent = () => {
  const [path, setPath] = useState("");

  return (
    <div>


      <Image
        alt="e-commerce"
        width={400}
        height={400}
        className="h-[450px] rounded-lg"
        src={path ? path : blackJacket}
      />

      <div className="flex items-center justify-evenly mx-auto mt-2 gap-2">
        <div className="cursor-pointer w-[100px]">
          <Image
            alt="abc"
            src={tops}
            width={1000}
            height={1000}
            className="w-[100px] h-[100px]"
            onClick={() => setPath("/Categories/tops.jpg")}
          />
        </div>

        <div className="cursor-pointer w-[100px]">
          <Image
            alt="abc"
            src={womenpants}
            width={1000}
            height={1000}
            className="w-[100px] h-[100px]"
            onClick={() => setPath("/Categories/womenpants.jpg")}
          />
        </div>

        <div className="cursor-pointer w-[100px]">
          <Image
            alt="abc"
            src={womenshoes}
            width={1000}
            height={1000}
            className="w-[100px] h-[100px]"
            onClick={() => setPath("/Categories/womenshoes.jpg")}
          />
        </div>

        {/* <div>
          <Image
            alt="abc"
            src={tops}
            width={60}
            height={60}
            onClick={() => setPath("/Categories/tops.jpg")}
          />
        </div> */}
      </div>
    </div>
  );
};

export default ProductComponent;
