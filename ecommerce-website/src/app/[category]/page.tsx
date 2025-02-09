import CategoryPage from "./CategoryPage";

const Category = ({ params }: { params: { category: string } }) => {
 return (
    <div className="mt-[100px] mb-[100px]">
    <CategoryPage params={params}/>
      
    </div>
  );
};

export default Category;
