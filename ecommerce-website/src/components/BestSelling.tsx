import React from "react";
import BestSellingCards from "./BestSellingCards";

import womenWhiteShirt from "../../public/best-selling/womenWhiteShirt.webp";
import blackJacket from "../../public/best-selling/blackJacket.webp";
import redSandles from "../../public/best-selling/redSandles.jpg";

const SellingCards = [
  {
    image: womenWhiteShirt,
    alt: "Women-White-Shirt",
    title: "Women White Printed Shirt",
    description: "Best Quality Top For Women.",
    price: 100,
    category: "tops",
    product:"white-top"
  },
  {
    image: blackJacket,
    alt: "Men-Black-Jacket",
    title: "Men Black Jacket",
    description: "Best Quality Jacket For Mens.",
    price: 120,
     category: "shirts",
    product:"black-jacket"
  },
  {
    image: redSandles,
    alt: "Women-red-sandles",
    title: "Women Red Sandle",
    description: "Best Quality Sandle For Women.",
    price: 130,
     category: "women-shoes",
    product:"red-sandle"
  }
  
];

const BestSelling = () => {
  return (
    <div className="mb-[100px] mt-[100px]">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl">
          Best Selling Products
        </h1>

        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>

      {/* Best Selling Products Cards */}

      <div className="flex flex-wrap justify-center gap-5">
        {SellingCards.map((selling, index) => (
          <BestSellingCards
            key={index}
            image={selling.image}
            alt={selling.alt}
            title={selling.title}
            description={selling.description}
            price={selling.price}
            category={selling.category}
            product={selling.product}
          />
        ))}
      </div>


    </div>
  );
};

export default BestSelling;
