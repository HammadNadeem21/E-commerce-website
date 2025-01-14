"use client"
import BestSellingCards from '@/components/BestSellingCards'
import React from 'react'
import womenWhiteShirt from '../../../public/best-selling/womenWhiteShirt.webp';
import blackJacket from "../../../public/best-selling/blackJacket.webp";
import redSandles from "../../../public/best-selling/redSandles.jpg";
import { useAppSelector } from '../store/hooks';



const Category = ({params} : {params: { category: string }}) => {
  const product = useAppSelector((state)=>state.product);
  console.log(params.category);
  
//   const SellingCards = [

//     {
//       image: womenWhiteShirt,
//       alt: "Women-White-Shirt",
//       title: "Women White Printed Shirt",
//       description: "Best Quality Top For Women.",
//       price: 100,
//       category: "tops",
//     product:"white-top"
//     },{
//         image: blackJacket,
//         alt: "Men-Black-Jacket",
//         title: "Men Black Jacket",
//         description: "Best Quality Jacket For Mens.",
//         price: 120,
//          category: "shirts",
//         product:"black-jacket"
//       },
//       {
//         image: redSandles,
//         alt: "Women-red-sandles",
//         title: "Women Red Sandle",
//         description: "Best Quality Sandle For Women.",
//         price: 130,
//          category: "women-shoes",
//         product:"red-sandle"
//       }
// ]

const bestSell = product.filter( (val)=>val.category == params.category);

  return (
    <div className="mt-[100px] mb-[100px]">
    
    
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl capitalize">
          {params.category}
        </h1>

        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-5">
        {bestSell.map((selling:any, index) => (
          <BestSellingCards
            key={index}
            image={selling.image[0]}
            alt={selling.title}
            title={selling.title}
            description={selling.description}
            price={selling.price}
            category={selling.category}
            product={selling.product}
          />
        ))}
      </div>
    </div>
  )
}

export default Category;
