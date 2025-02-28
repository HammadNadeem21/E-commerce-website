import React from "react";
import { Button } from "./ui/button";

// icons
import { GiShoppingBag } from "react-icons/gi";

const Hero = () => {
  return (
    <div className="mb-[100px]">
      <div className="hero min-h-[80vh] custom-img bg-fixed bg-center bg-no-repeat">
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-myWhite">
              Fururistic <span className="text-myOrange">Clothes</span>
            </h1>
            <p className="mb-5 scroll-m-20 text-xl font-semibold tracking-tight text-myWhite">
              Fashion for Him & Her Discover the Perfect Outfit for Every
              Moment!.
            </p>
            <Button className="outline outline-offset-2 outline-1 text-myWhite group hover:rounded-3xl duration-300 hover:outline-myOrange">
              <GiShoppingBag className="group-hover:text-myOrange group-hover:animate-bounce" />{" "}
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
