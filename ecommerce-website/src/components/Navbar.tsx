"use client";
import Link from "next/link";
import React, { useState } from "react";

// Icons
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCloseCircle } from "react-icons/io";

// Components
import { NavigationMenuDemo } from "./NavLinks";
import Image from "next/image";
import logo from "../../public/logo.png";

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);
  const toggleNavbar = (): void => {
    setIsClick(!isClick);
  };

  return (
    <div>
      <div className="navbar bg-myWhite">
        <div className="navbar-start">
          <div className="dropdown">
            {/* hamburger-icon */}
            <div
              tabIndex={0}
              role="button"
              className="p-0 text-2xl lg:hidden cursor-pointer text-myBlackHead"
              onClick={toggleNavbar}
            >
              {isClick ? (
                <IoIosCloseCircle size={30} />
              ) : (
                <GiHamburgerMenu size={30} />
              )}
            </div>
            {isClick && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link href={"/"}>Home</Link>
                </li>
                <li>
                  <details>
                    <summary>Mens</summary>
                    <ul className="p-2">
                      <li>
                        <Link href={"/shirts"}>Shirts</Link>
                      </li>
                      <li>
                        <Link href={"/men-pants"}>Pants</Link>
                      </li>
                      <li>
                        <Link href={"/accessories"}>Acessories</Link>
                      </li>
                      <li>
                        <Link href={"/men-shoes"}>Shoes</Link>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details>
                    <summary>WOMENS</summary>
                    <ul className="p-2">
                      <li>
                        <Link href={"/tops"}>Tops</Link>
                      </li>
                      <li>
                        <Link href={"/women-pants"}>Pants</Link>
                      </li>
                      <li>
                        <Link href={"/jewelry"}>Accessories/Jewelry</Link>
                      </li>
                      <li>
                        <Link href={"/women-shoes"}>Shoes</Link>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <Link href={"/about"}>About</Link>
                </li>
                <li>
                  <Link href={"/contact"}>Contact</Link>
                </li>
              </ul>
            )}
          </div>
          <Image
            src={logo}
            alt="logo"
            className="hidden lg:block h-[90px] w-[90px] ml-4 cursor-pointer"
            height={100}
            width={100}
          />
        </div>

        <div className="navbar-center">
          <Image
            src={logo}
            alt="logo"
            className="block lg:hidden h-[90px] w-[90px] cursor-pointer"
            height={100}
            width={100}
          />
          <div className="hidden lg:flex">
            <NavigationMenuDemo />
          </div>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="mr-4 cursor-pointer group"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 group-hover:text-myOrange duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item font-semibold text-myBlackHead group-hover:text-myWhite group-hover:bg-myBlackPara">
                  8
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
