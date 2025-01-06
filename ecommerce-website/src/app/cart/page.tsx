import CartCard from "@/components/CartCard";
import { Button } from "@/components/ui/button";
import React from "react";

const Cart = () => {
  return (
    <div className="mt-[100px] mb-[100px]">
      <div className="grid lg:grid-cols-3 grid-cols-1">
        {/* items */}
        <div className="col-span-2">
            
{/* Cart Card */}
<CartCard src="/promo1.jpg" title="Ladies Overcoat" size="L" price={1500}/>
        </div>



        {/* summary */}
        <div className="bg-myBlackHead/5 p-5 rounded-xl">
          {/* Heading */}
          <h2 className="scroll-m-20 text-lg font-semibold tracking-tight uppercase text-myBlackHead">
            order summary
          </h2>

          {/* Divider */}
          <div className="divider mt-0 mb-1"></div>

          {/* Pricing */}
          <div className="text-sm font-medium tracking-tight text-myBlackPara">
            {/* Product Prices */}
            <div className="flex items-center justify-between capitalize">
              <h2>sub total</h2>
              <h2>$1500</h2>
            </div>

            {/* Delivery Charges */}
            <div className="flex items-center justify-between capitalize">
              <h2>delivery charges</h2>
              <h2>TBD</h2>
            </div>

            {/* services charges */}
            <div className="flex items-center justify-between capitalize">
              <h2>sales tax</h2>
              <h2>TBD</h2>
            </div>
          </div>
          {/* Divider */}
          <div className="divider mt-0 mb-1"></div>
          {/* Extimated total */}
          <div className="flex items-center justify-between uppercase font-semibold text-sm tracking-tighter text-myBlackHead">
            <h2>estimated total</h2>
            <h2>$1500</h2>
          </div>
          {/* Divider */}
          <div className="divider mt-0 mb-1"></div>
          {/* checkout button */}
          <div className="flex items-center justify-center w-full">
            <Button className="bg-myBlackHead hover:bg-transparent duration-300 text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight hover:shadow-md uppercase rounded-xl">
              proceed to checkout
            </Button>
          </div>
          {/* Divider */}
          <div className="divider mt-0 mb-1"></div>
          {/* note */}
          <p className="text-xs font-semibold tracking-tighter text-myBlackHead w-[97%] text-center italic">
            {`*Delivery Charges and the Sales Tax will be calculated in the checkout page`}
          </p>
        </div>

      </div>
    </div>
  );
};

export default Cart;
