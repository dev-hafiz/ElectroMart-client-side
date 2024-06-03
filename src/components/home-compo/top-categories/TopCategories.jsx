import "./TopCategories.css";
import { productsDB } from "./TopCategoriesDB";
import TopCategoryCard from "./TopCategoryCard";

const TopCategories = () => {
  return (
    <div className="category-wrapper">
      <h3 className="heading">top Categories</h3>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {productsDB.map((product) => (
          <TopCategoryCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
