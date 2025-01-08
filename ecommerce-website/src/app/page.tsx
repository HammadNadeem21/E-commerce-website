import BestSelling from "@/components/BestSelling";
import Categories from "@/components/Categories";
import FeaturedProduct from "@/components/FeaturedProduct";
import Hero from "@/components/Hero";
import Promotion from "@/components/Promotion";
import Services from "@/components/Services";

export default function Home() {
  return (
   <div>

<Hero/>
<FeaturedProduct/>
<Services/>
<Promotion/>
<Categories/>
<BestSelling/>
   </div>
  );
}
