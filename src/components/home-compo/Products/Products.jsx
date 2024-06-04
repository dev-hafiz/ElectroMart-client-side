import { Link } from "react-router-dom";
import ProductCard from "../product-card/ProductCard";
import "./Products.css";
import { products } from "../Products/ProductsDB";

const Products = () => {
  return (
    <div className="top-product-wrapper">
      <div className="px-6 top-product-box ">
        <h3 className="top-product-heading">Top Products</h3>

        <Link to="/shop">
          <button className="view-btn">All Products</button>
        </Link>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pr-7">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.title} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
