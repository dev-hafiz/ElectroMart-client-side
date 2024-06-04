/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./Shop.css";
import Sidebar from "./Sidebar/Sidebar";
import { products } from "../../components/home-compo/Products/ProductsDB";
import { useState } from "react";
import ProductCard from "../../components/home-compo/product-card/ProductCard";
import Recommended from "./Recommended/Recommended";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  // const handleInputChange = (event) => {
  //   setQuery(event.target.value);
  // };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, price, title, company }) =>
          category === selected ||
          price === selected ||
          title === selected ||
          company === selected
      );
    }

    return filteredProducts;
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <div className="lg:container px-5 mt-4   md:mx-auto">
      <Recommended handleClick={handleClick} />

      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-12">
        <div className=" col-span-4 md:col-span-3">
          <Sidebar handleChange={handleChange} />
        </div>
        <div className="flex flex-wrap mt-8 mb-20 col-span-9 md:col-span-8 ">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {result.map((product) => (
              <ProductCard key={product.title} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
