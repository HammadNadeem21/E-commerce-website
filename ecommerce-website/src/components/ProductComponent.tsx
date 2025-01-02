"use client"

import Image from 'next/image'
import React, { useState } from 'react'

import blackJacket from "../../public/best-selling/blackJacket.webp";
import tops from "../../public/Categories/tops.jpg";
import womenpants from "../../public/Categories/womenpants.jpg";
import womenshoes from "../../public/Categories/womenshoes.jpg";


const ProductComponent = () => {

    const [path, setPath] = useState("");

  return (
    <div>
      <Image alt='e-commerce' width={400} height={400} src={path ? path : blackJacket}/>

      <div className='flex items-center justify-evenly mx-auto mt-2'>

        <div className='cursor-pointer'>
<Image alt='abc' src={tops} width={60} height={60} onClick={()=>setPath("/Categories/tops.jpg")}/>
</div>

<div className='cursor-pointer'>
<Image alt='abc' src={womenpants} width={60} height={60} onClick={()=>setPath("/Categories/womenpants.jpg")}/>
</div>

<div className='cursor-pointer'>
<Image alt='abc' src={womenshoes} width={60} height={60} onClick={()=>setPath("/Categories/womenshoes.jpg")}/>
</div>

<div>

<Image alt='abc' src={tops} width={60} height={60} onClick={()=>setPath("/Categories/tops.jpg")}/>
</div>

      </div>

    </div>
  )
}

export default ProductComponent
