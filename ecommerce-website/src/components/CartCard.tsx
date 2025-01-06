import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

interface cartcard {
  src: string;
  title: string;
  size: string;
  price: number;
}

const CartCard = ({ src, title, size, price }: cartcard) => {
  return (
    <div className="flex p-10 ">
      {/* image */}
      <Image
        src={src}
        alt={title}
        width={800}
        height={800}
        className="w-[100px] h-[120px]"
      />

      {/* some info */}
      <div className="flex px-5 justify-between items-center w-full">
        <div>
          {/* title */}
          <h2 className="text-sm font-semibold leading-none line-clamp-1 text-myBlackHead">
            {title}
          </h2>
          {/* size */}
          <p className="mt-2 text-sm text-myBlackHead/80 font-semibold leading-none line-clamp-1">
            size:&nbsp;<span>{size}</span>
          </p>
          {/* Quantity button */}
          <div className="flex mt-2 items-center">
            <Button className="group hover:bg-myWhite bg-myBlackHead text-myWhite hover:text-myBlackHead w-fit h-fit rounded-xl text-xs duration-300">
              <FaMinus className="h-2 w-2 group-hover:text-myBlackHead" />
            </Button>
            <div className="mr-2 ml-2 scroll-m-2 text-sm font-semibold tracking-tight text-myBlackPara/80">
              1
            </div>
            <Button className="group hover:bg-myWhite bg-myBlackHead text-myWhite hover:text-myBlackHead w-fit h-fit rounded-xl text-xs duration-300">
              <FaPlus className="h-2 w-2 group-hover:text-myBlackHead" />
            </Button>
          </div>
          {/* Price & Delete */}
          <div className="sm:hidden flex flex-col  gap-3 mt-2">
            <h3 className="text-sm font-semibold leading-none line-clamp-1 text-myBlackHead">
              <span>Price:&nbsp;</span>&#36;{price}
            </h3>

            <FaTrash className="text-base font-semibold leading-none line-clamp-1 text-red-600 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Price & Delete */}
      <div className="hidden sm:flex flex-col items-end gap-5 mt-4">
        <h3 className="text-sm font-semibold leading-none line-clamp-1 text-myBlackHead">
          <span>Price:&nbsp;</span>&#36;{price}
        </h3>

        <FaTrash className="text-base font-semibold leading-none line-clamp-1 text-red-600 cursor-pointer" />
      </div>
    </div>
  );
};

export default CartCard;
