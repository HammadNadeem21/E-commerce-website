"use client";
import BestSellingCards from "@/components/BestSellingCards";
import { useAppSelector } from "../store/hooks";
import fallbackImage from "../../../public/hero.jpg";

const CategoryPage = ({ params }: { params: { category: string } }) => {
  const product = useAppSelector((state) => state.product);
  const bestSell = product.filter((val) => val.category == params.category);

  return (
    <div>
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
        {bestSell.map((items, index) => (
          <BestSellingCards
            key={index}
            image={Array.isArray(items.image) ? items.image[0] : items.image || fallbackImage}
            alt={items.title}
            title={items.title}
            description={items.description}
            price={items.price}
            category={items.category}
            slug={items.slug}
            discount={items.discount ?? 0}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
