import Link from 'next/link';
import React from 'react'

// Icons
import { GiHamburgerMenu } from "react-icons/gi";
import { NavigationMenuDemo } from './NavLinks';

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-myWhite">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       <li><Link href={'/'}>Home</Link></li>
      <li>
        <details>
          <summary>Mens</summary>
          <ul className="p-2">
            <li><Link href={'#'}>Shirts</Link></li>
            <li><Link href={'#'}>Pants</Link></li>
            <li><Link href={'#'}>Acessories</Link></li>
            <li><Link href={'#'}>Shoes</Link></li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>WOMENS</summary>
          <ul className="p-2">
            <li><Link href={'#'}>Tops</Link></li>
            <li><Link href={'#'}>Pants</Link></li>
            <li><Link href={'#'}>Accessories/Jewelry</Link></li>
            <li><Link href={'#'}>Shoes</Link></li>
          </ul>
        </details>
      </li>
      <li><Link href={'#'}>About</Link></li>
      <li><Link href={'#'}>Contact</Link></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>


  <div className="navbar-center hidden lg:flex">
  ,<NavigationMenuDemo/>

  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    </div>
  )
}

export default Navbar
