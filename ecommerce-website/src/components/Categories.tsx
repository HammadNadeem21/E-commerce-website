import React from "react";

// Images
import tops from "../../public/Categories/tops.jpg";
import womenpants from "../../public/Categories/womenpants.jpg";
import womenaccessories from "../../public/Categories/wpmenaccessories.jpg";
import womenshoes from "../../public/Categories/womenshoes.jpg";

import shirts from "../../public/Categories/mens/shirts.jpg";
import pants from "../../public/Categories/mens/pants.jpg";
import accessories from "../../public/Categories/mens/accessories.jpg";
import shoes from "../../public/Categories/mens/shoes.jpg";

// Component
import CategoryCard from "./CategoryCard";

// Mens
const Mens = [
  { image: shirts, title: "shirts" },
  { image: pants, title: "Pants" },
  { image: accessories, title: "accessories" },
  { image: shoes, title: "shoes" },
];

// Womens
const Womens = [
  { image: tops, title: "Tops" },
  { image: womenpants, title: "Pants" },
  { image: womenaccessories, title: "accessories" },
  { image: womenshoes, title: "shoes" },
];

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
      {/* Mens */}
      <h2 className="scroll-m-20 text-2xl font-bold tracking-tight text-myBlackHead mb-10 mt-10">
        Mens
      </h2>

      {/* Categories Start */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Mens.map((category, index) => (
          <CategoryCard
            key={index}
            image={category.image}
            title={category.title}
          />
        ))}
      </div>
      {/* Categories End */}

      {/* Womens */}

      <h2 className="scroll-m-20 text-2xl font-bold tracking-tight text-myBlackHead mb-10 mt-10">
        Womens
      </h2>

      {/* Categories Start */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Womens.map((category, index) => (
          <CategoryCard
            key={index}
            image={category.image}
            title={category.title}
          />
        ))}
      </div>
      {/* Categories End */}
    </div>
  );
};

export default Categories;
