import Image, { StaticImageData } from "next/image";

import Link from "next/link";
import React from "react";

type CategoryImage = {
  link: string;
  image: StaticImageData;
  title: string;
};

const CategoryCard = ({link, image, title }: CategoryImage) => {
  return (
    <div className="mb-7 lg:mb-0  overflow-hidden z-10 mx-auto group relative h-[400px] rounded-xl">
      <Link href={`/${link}`}>
        <Image
          src={image}
          alt="Tops"
          width={350}
          height={350}
          className="rounded-xl duration-500 group-hover:scale-125 h-[400px]"
        />
        <div className="hidden md:block absolute -bottom-24 duration-500 group-hover:bottom-2 scroll-m-20 text-4xl font-extrabold tracking-tight bg-myBlackHead/70 text-center text-myWhite w-full">
          <h1 className="uppercase">{title}</h1>
        </div>

        <div className="block md:hidden absolute bottom-24 duration-500 zoom-in-100 scroll-m-20 text-4xl font-extrabold tracking-tight bg-myBlackHead/70 text-center text-myWhite w-full">
          <h1 className="uppercase">{title}</h1>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
