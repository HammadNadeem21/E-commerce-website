import Image from "next/image";
import React from "react";

// Images
import category1 from "../../public/Categories/category1.jpg";
import category2 from "../../public/Categories/category2.jpg";
import category3 from "../../public/Categories/category3.jpg";
import category4 from "../../public/Categories/category4.jpg";
import Link from "next/link";

const Categories = () => {
  return (
    <div className="mb-[100px] mt-[100px]">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl">
          Our Categories
        </h1>

        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>

      {/* Categories Start */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Category one */}
        <div className="mb-7 lg:mb-0  overflow-hidden z-10 mx-auto group relative h-[450px]">
          <Link href={"#"}>
            <Image
              src={category1}
              alt="Tops"
              width={350}
              height={350}
              className="rounded-xl duration-500 group-hover:scale-125 h-[450px]"
            />
            <div className="hidden md:block absolute -bottom-24 duration-500 group-hover:bottom-2 scroll-m-20 text-4xl font-extrabold tracking-tight bg-myBlackHead/70 text-center text-myWhite w-full">
              <h1 className="uppercase">tops</h1>
            </div>

            <div className="block md:hidden absolute bottom-24 duration-500 zoom-in-100 scroll-m-20 text-4xl font-extrabold tracking-tight bg-myBlackHead/70 text-center text-myWhite w-full">
              <h1 className="uppercase">tops</h1>
            </div>
          </Link>
        </div>

        {/* Category two */}
        <div className="mb-7 lg:mb-0  overflow-hidden z-10 mx-auto group relative h-[450px]">
          <Link href={"#"}>
            <Image
              src={category2}
              alt="Tops"
              width={350}
              height={350}
              className="rounded-xl duration-500 group-hover:scale-125 h-[450px]"
            />
            <div className="hidden md:block absolute -bottom-24 duration-500 group-hover:bottom-2 scroll-m-20 text-4xl font-extrabold tracking-tight bg-myBlackHead/70 text-center text-myWhite w-full">
              <h1 className="uppercase">pants</h1>
            </div>

            <div className="block md:hidden absolute bottom-24 duration-500 zoom-in-100 scroll-m-20 text-4xl font-extrabold tracking-tight bg-myBlackHead/70 text-center text-myWhite w-full">
              <h1 className="uppercase">tops</h1>
            </div>
          </Link>
        </div>

        {/* Category three */}
        <div className="mb-7 lg:mb-0  overflow-hidden z-10 mx-auto group relative h-[450px]">
          <Link href={"#"}>
            <Image
              src={category3}
              alt="Tops"
              width={350}
              height={350}
              className="rounded-xl duration-500 group-hover:scale-125 h-[450px]"
            />
            <div className="hidden md:block absolute -bottom-24 duration-500 group-hover:bottom-2 scroll-m-20 text-4xl font-extrabold tracking-tight bg-myBlackHead/70 text-center text-myWhite w-full">
              <h1 className="uppercase">Accessories</h1>
            </div>

            <div className="block md:hidden absolute bottom-24 duration-500 zoom-in-100 scroll-m-20 text-4xl font-extrabold tracking-tight bg-myBlackHead/70 text-center text-myWhite w-full">
              <h1 className="uppercase">tops</h1>
            </div>
          </Link>
        </div>

        {/* Category four */}
        <div className="mb-7 lg:mb-0  overflow-hidden z-10 mx-auto group relative h-[450px]">
          <Link href={"#"}>
            <Image
              src={category4}
              alt="Tops"
              width={350}
              height={350}
              className="rounded-xl duration-500 group-hover:scale-125 h-[450px]"
            />
            <div className="hidden md:block absolute -bottom-24 duration-500 group-hover:bottom-2 scroll-m-20 text-4xl font-extrabold tracking-tight bg-myBlackHead/70 text-center text-myWhite w-full">
              <h1 className="uppercase">shoes</h1>
            </div>

            <div className="block md:hidden absolute bottom-24 duration-500 zoom-in-100 scroll-m-20 text-4xl font-extrabold tracking-tight bg-myBlackHead/70 text-center text-myWhite w-full">
              <h1 className="uppercase">tops</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
