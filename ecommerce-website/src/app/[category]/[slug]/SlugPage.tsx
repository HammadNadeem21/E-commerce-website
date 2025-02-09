"use client";
import { Button } from "@/components/ui/button";
import { FaShoppingCart, FaHeart, FaPlus, FaMinus } from "react-icons/fa";
import { useAppSelector } from "../../store/hooks";
import SlugComponent from "@/components/SlugComponent";

const SlugPage = ({ params }: { params: { slug: string } }) => {
  const product = useAppSelector((state) => state.product);
  const slug = product.filter((val) => val.slug == params.slug);

  console.log("slug", slug);

  return (
    <div>
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          {/* Image */}
          <SlugComponent image={slug[0].image }/>

          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            {/* category */}
            <h2 className="scroll-m-20 text-sm font-semibold tracking-tight text-gray-500 uppercase">
              {slug[0].category}
            </h2>

            {/* heading */}
            <h1 className="mt-2 scroll-m-20 text-2xl font-semibold tracking-tight mb-1 text-myBlackHead">
              {slug[0].title}
            </h1>

            {/* ratings */}
            <div className="mt-2 rating rating-sm">
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-myOrange"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-myOrange"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-myOrange"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-myOrange"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-myOrange"
              />
            </div>

            {/* description */}
            <p
              className="mt-2 leading-relaxed scroll-m-20 text-base font-normal 
          text-myBlackPara"
            >
              {slug[0].description}
            </p>

            <div className="flex mt-6 items-center mb-5">
              {/* colors */}
              <div className="flex">
                <span className="mr-3 scroll-m-20 text-base font-semibold text-myBlackHead">
                  Color
                </span>
                {slug[0].color.map((item, i) => (
                  <button
                    key={i}
                    className="border-2 border-gray-300 ml-1 rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black"
                    style={{ backgroundColor: item }}
                  />
                ))}
              </div>

              {/* size */}
              <div className="flex ml-6 items-center">
                <span className="mr-3 scroll-m-20 text-base font-semibold text-myBlackHead">
                  Size
                </span>

                <label className="form-control w-full max-w-xs">
                  <select className="select select-bordered">
                    <option disabled selected>
                      Select Size
                    </option>
                    {slug[0].size.map((item, i) => (
                      <option key={i}>{item}</option>
                    ))}
                    
                  
                  </select>
                </label>

            
              </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center">
              <span className="mr-3 scroll-m-20 text-base font-semibold text-myBlackHead">
                Quantity
              </span>

              <Button className="group bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl w-fit h-fit">
                <FaMinus className="mr-2 h-4 w-4 group-hover:text-myOrange duration-300" />
                Less
              </Button>

              <div className="mr-2 ml-2 scroll-m-20 text-base font-semibold tracking-tight">
                {slug[0].quantity}
              </div>

              <Button className="group bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl w-fit h-fit">
                <FaPlus className="mr-2 h-4 w-4 group-hover:text-myOrange duration-300" />
                Add
              </Button>
            </div>

            <div className="divider"></div>
            <div className="flex items-center justify-between mt-5">
              {/* price */}
              <div>
              <span className={`scroll-m-20 text-2xl font-semibold tracking-tight text-myBlackHead ${
                slug[0]?.discount && slug[0].discount > 0 &&
                "line-through decoration-2  decoration-myOrange/70"
              }`}>
                ${slug[0].price}
              </span>
                {/* Discounted value */}
            {slug[0]?.discount && slug[0].discount > 0 && (
                <span className="ml-3 scroll-m-20 text-2xl font-semibold tracking-tight text-myBlackHead">${slug[0].price - (slug[0].price * slug[0].discount)/100}</span>
              )
            }
              </div>
              {/* cart button */}
              <Button className="group bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl ">
                <FaShoppingCart className="mr-2 h-4 w-4 group-hover:text-myOrange duration-300" />
                Add to Cart
              </Button>
            </div>

            {/* buy button */}
            <Button className="mt-3 w-full group bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl ">
              <FaHeart className="mr-2 h-4 w-4 group-hover:text-myOrange duration-300" />
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlugPage;
