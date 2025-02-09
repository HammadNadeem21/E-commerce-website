import React from "react";
import Image, { StaticImageData } from "next/image";
import { Button } from "./ui/button";

import { FaShoppingCart, FaHeart } from "react-icons/fa";
import Link from "next/link";

type SellingItems = {
  image: StaticImageData | string ;
  alt: string;
  title: string;
  description: string;
  price: number;
  category: string;
  slug: string;
  discount: number;
};

const BestSellingCards = ({
  image,
  alt,
  title,
  description,
  price,
  category,
  slug,
  discount,
}: SellingItems) => {
   
  return (
    <div className="max-w-[350px] h-[32rem] p-4 mx-auto shadow-xl rounded-xl relative bg-gray-100">
      <Link href={`/${category}/${slug}`}>
        {/* image-div */}
        <div className="block h-[20rem] rounded overflow-hidden">
          <Image
            src={image}
            alt={alt}
            height={400}
            width={400}
            className="h-[20rem]"
          />
        </div>

        {/* text-div */}
        <div className="mt-4">
          <h2 className=" text-lg text-myBlackHead font-semibold tracking-tight first:mt-0 line-clamp-1">
            {title}
          </h2>

          <p className="mt-2 scroll-m-20 text-sm text-myBlackPara font-semibold tracking-tight  line-clamp-1">
            {description}
          </p>

          <div className="flex gap-3">
            <p
              className={`mt-2 scroll-m-20 text-base text-myBlackHead font-semibold tracking-tight  line-clamp-1 ${
                discount > 0 &&
                "line-through decoration-2  decoration-myOrange/70"
              }`}
            >${price}</p>
            {/* Discounted value */}
            {
              discount > 0 && (
                <p className="mt-2 scroll-m-20 text-base text-myBlackHead font-semibold tracking-tight  line-clamp-1">${price - (price*discount)/100}</p>
              )
            }
          </div>
        </div>
      </Link>

{/* Button div */}
      <div>
        <Button className="group bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl absolute bottom-2 right-2">
          <FaShoppingCart className="mr-2 h-4 w-4 group-hover:text-myOrange duration-300" />
          Add to Cart
        </Button>

        <Button className="group bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl absolute bottom-2 left-2">
          <FaHeart className="mr-2 h-4 w-4 group-hover:text-myOrange duration-300" />
          Buy Now
        </Button>
        {discount > 0 && (
          <div className="scroll-m-20 text-xs font-semibold tracking-tight text-myWhite bg-myOrange absolute top-0 left-2 w-[87px] p-2 text-center uppercase rounded-tl-xl rounded-bl-xl myDiscount">{`${discount}% off`}</div>
        )}
      </div>
    </div>
  );
};

export default BestSellingCards;
