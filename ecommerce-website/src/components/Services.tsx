import Image from "next/image";
import React from "react";

// imges
import truck from "../../public/truck.png";
import CustomerService from "../../public/CustomerService.png";
import Money from "../../public/Money.png";

const Services = () => {
  return (
    <div>
      <section className="body-font mb-[100px] ">
        <div className="container px-5 mx-auto">
          {/* Heading */}

          <div className="text-center mb-10">
            <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl">
              Our Services
            </h1>

            <div className="flex mt-2 justify-center">
              <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
            </div>
          </div>

          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            {/* Deliery */}
            <div className="p-4 mx-auto lg:w-1/3 flex flex-col text-center cursor-pointer items-center">
              <div className="w-[120px] h-[120px] inline-flex items-center justify-center mb-5 flex-shrink-0">
                <Image
                  src={truck}
                  alt="delivery"
                  height={300}
                  width={300}
                  className="w-[120px] h-[120px]"
                />
              </div>
              <div className="flex-grow cursor-pointer group">
                <h2 className="text-myBlackHead group-hover:text-myOrange duration-300 capitalize scroll-m-20 text-lg font-extrabold tracking-tight lg:text-xl mb-3 ">
                  Free Delivery
                </h2>
                <p className="line-clamp-2 scroll-m-20 text-base text-myBlackPara font-semibold group-hover:text-myBlackPara/80 duration-300 tracking-tight">
                  Free Delivery on order Above $500.
                </p>
              </div>
            </div>

            {/* 24/7 Services */}
            <div className="p-4 mx-auto lg:w-1/3 flex flex-col text-center cursor-pointer items-center">
              <div className="w-[120px] h-[120px] inline-flex items-center justify-center mb-5 flex-shrink-0">
                <Image
                  src={CustomerService}
                  alt="delivery"
                  height={300}
                  width={300}
                  className="w-[120px] h-[120px]"
                />
              </div>
              <div className="flex-grow cursor-pointer group">
                <h2 className="text-myBlackHead group-hover:text-myOrange duration-300 capitalize scroll-m-20 text-lg font-extrabold tracking-tight lg:text-xl mb-3 ">
                  24/7 Customer Service
                </h2>
                <p className="line-clamp-2 scroll-m-20 text-base text-myBlackPara font-semibold group-hover:text-myBlackPara/80 duration-300 tracking-tight">
                  For Queries and Question Feel Free to Contact.
                </p>
              </div>
            </div>

            {/* Money Back */}
            <div className="p-4 mx-auto lg:w-1/3 flex flex-col text-center cursor-pointer items-center">
              <div className="w-[120px] h-[120px] inline-flex items-center justify-center mb-5 flex-shrink-0">
                <Image
                  src={Money}
                  alt="delivery"
                  height={300}
                  width={300}
                  className="w-[120px] h-[120px]"
                />
              </div>
              <div className="flex-grow cursor-pointer group">
                <h2 className="text-myBlackHead group-hover:text-myOrange duration-300 capitalize scroll-m-20 text-lg font-extrabold tracking-tight lg:text-xl mb-3 ">
                  Money Back Guarantee
                </h2>
                <p className="line-clamp-2 scroll-m-20 text-base text-myBlackPara font-semibold group-hover:text-myBlackPara/80 duration-300 tracking-tight">
                  Get Money Back Gurantee on Damage Products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
