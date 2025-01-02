import React from "react";
import Image, { StaticImageData } from "next/image";
import { Button } from "./ui/button";

import { FaShoppingCart, FaHeart } from "react-icons/fa";

type SellingItems = {
  image: StaticImageData;
  alt: string;
  title: string;
  description: string;
  price: number;
};

const BestSellingCards = ({
  image,
  alt,
  title,
  description,
  price,
}: SellingItems) => {
  return (
    <div className="w-[350px] h-[32rem] p-4 mx-auto shadow-xl rounded-xl relative bg-gray-200">
      <div className="block h-[20rem] rounded overflow-hidden">
        <Image
          src={image}
          alt={alt}
          height={400}
          width={400}
          className="h-[20rem]"
        />
      </div>

      <div className="mt-4">
        <h2 className=" text-lg text-myBlackHead font-semibold tracking-tight first:mt-0 line-clamp-1">
          {title}
        </h2>

        <p className="mt-2 scroll-m-20 text-sm text-myBlackPara font-semibold tracking-tight  line-clamp-1">
          {description}
        </p>

        <p className="mt-2 scroll-m-20 text-base text-myBlackHead font-semibold tracking-tight  line-clamp-1">{`$${price}`}</p>
      </div>

      <div>
        <Button className="group bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl absolute bottom-2 right-2">
          <FaShoppingCart className="mr-2 h-4 w-4 group-hover:text-myOrange duration-300" />
          Add to Cart
        </Button>

        <Button className="group bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl absolute bottom-2 left-2">
          <FaHeart className="mr-2 h-4 w-4 group-hover:text-myOrange duration-300" />
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default BestSellingCards;
