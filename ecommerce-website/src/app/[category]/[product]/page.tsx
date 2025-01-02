import ProductComponent from "@/components/ProductComponent";
import { Button } from "@/components/ui/button";
import React from "react";

import { FaShoppingCart, FaHeart, FaPlus, FaMinus } from "react-icons/fa";

const page = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          {/* image */}
          {/* <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="https://dummyimage.com/400x400"
          /> */}

          <ProductComponent/>

          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            {/* category */}
            <h2 className="scroll-m-20 text-sm font-semibold tracking-tight text-gray-500">
              Women Tops
            </h2>

            {/* heading */}
            <h1 className="mt-2 scroll-m-20 text-2xl font-semibold tracking-tight mb-1 text-myBlackHead">
              Printed Top
            </h1>

            {/* ratings */}
            <div className="mt-2 rating rating-sm">
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-myOrange"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-myOrange"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-myOrange"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-myOrange"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-myOrange"
              />
            </div>

            {/* description */}
            <p
              className="mt-2 leading-relaxed scroll-m-20 text-base font-normal 
          text-myBlackPara"
            >
              Elevate your wardrobe with this elegant white printed top
              featuring a stylish floral design. Perfect for casual outings or
              semi-formal gatherings, this top combines comfort with chic.
            </p>

            <div className="flex mt-6 items-center mb-5">
              {/* colors */}
              <div className="flex">
                <span className="mr-3 scroll-m-20 text-base font-semibold text-myBlackHead">
                  Color
                </span>

                <button className="border-2 border-gray-300 ml-1 bg-white rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black" />
                <button className="border-2 border-gray-300 ml-1 bg-red-700 rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black" />
                <button className="border-2 border-gray-300 ml-1 bg-blue-700 rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black" />
                <button className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black" />
              </div>

              {/* size */}
              <div className="flex ml-6 items-center">
                <span className="mr-3 scroll-m-20 text-base font-semibold text-myBlackHead">
                  Size
                </span>

                <label className="form-control w-full max-w-xs">
                  <select className="select select-bordered">
                    <option disabled selected>
                      Select Size
                    </option>
                    <option>SM</option>
                    <option>MD</option>
                    <option>LG</option>
                    <option>XL</option>
                    <option>XXL</option>
                  </select>
                </label>

                <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center">
              <span className="mr-3 scroll-m-20 text-base font-semibold text-myBlackHead">
                Quantity
              </span>

              <Button className="group bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl w-fit h-fit">
                <FaMinus className="mr-2 h-4 w-4 group-hover:text-myOrange duration-300" />
                Less
              </Button>

              <div className="mr-2 ml-2 scroll-m-20 text-base font-semibold tracking-tight">
                1
              </div>

              <Button className="group bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl w-fit h-fit">
                <FaPlus className="mr-2 h-4 w-4 group-hover:text-myOrange duration-300" />
                Add
              </Button>
            </div>

            <div className="divider"></div>
            <div className="flex items-center justify-between mt-5">
              {/* price */}
              <span className="scroll-m-20 text-2xl font-semibold text-myBlackHead">
                $58.00
              </span>
              {/* cart button */}
              <Button className="group bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl ">
                <FaShoppingCart className="mr-2 h-4 w-4 group-hover:text-myOrange duration-300" />
                Add to Cart
              </Button>
            </div>

            {/* buy button */}
            <Button className="mt-3 w-full group bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl ">
              <FaHeart className="mr-2 h-4 w-4 group-hover:text-myOrange duration-300" />
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
