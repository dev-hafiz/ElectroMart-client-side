import ProductCard from "../product-card/ProductCard";
import "./Products.css";
const Products = () => {
  return (
    <div className="top-product-wrapper">
      <div className="px-6 top-product-box ">
        <h3 className="heading">Top Products</h3>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pr-7">
        <div>
          <ProductCard />
        </div>
        <div>
          <ProductCard />
        </div>
        <div>
          <ProductCard />
        </div>
        <div>
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Products;
