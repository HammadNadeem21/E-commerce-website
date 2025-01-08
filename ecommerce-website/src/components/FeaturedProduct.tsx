"use client"
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import womenWhiteShirt from "../../public/best-selling/womenWhiteShirt.webp";
import blackJacket from "../../public/best-selling/blackJacket.webp";
import redSandles from "../../public/best-selling/redSandles.jpg";
import BestSellingCards from './BestSellingCards';

const FeaturedProduct = () => {
    // my data
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
        },       {
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

    // Carousel Setting
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
              arrows: false,
            }
          },
          {
            breakpoint: 850,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              dots: true,
              arrows: false,
            }
          },
          {
            breakpoint: 570,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              arrows: false,
            }
          }
        ]
      };



  return (
    <div className="mt-[100px] mb-[100px]">
 
    
       {/* Heading */}
       <div className="text-center mb-10">
        <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl">
          Featured Products
        </h1>

        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>

      {/* Carousel */}
      <Slider {...settings}>
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
      </Slider>

    </div>
  )
}

export default FeaturedProduct
