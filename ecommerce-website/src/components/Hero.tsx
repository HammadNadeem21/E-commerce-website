import React from 'react'
import { Button } from './ui/button'

// icons
import { AiFillShopping } from "react-icons/ai";

const Hero = () => {
  return (
    <div>
      <div
  className="hero min-h-[80vh] custom-img">
  <div className="hero-overlay bg-opacity-30"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Fururistic Clothes</h1>
      <p className="mb-5">
      Fashion for Him & Her Discover the Perfect Outfit for Every Moment!.
      </p>
      <Button>
      <AiFillShopping className='h-4 w-4'/> Shop Now
    </Button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Hero
