/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const EditProduct = () => {
  const product = useLoaderData();
  // console.log(product);

  const [title, setTitle] = useState(product.title);
  const [image, setImage] = useState(product.image);
  const [price, setPrice] = useState(product.price);
  const [delPrice, setDelPrice] = useState(product.del_price);
  const [ratings, setRatings] = useState(product.ratings);
  const [offSale, setOffSell] = useState(product.off_sale);
  const [category, setCategory] = useState(product.category);
  const [company, setCompany] = useState(product.company);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const title = form.title.value;
    const image = form.image_url.value;
    const price = form.price.value;
    const delPrice = form.del_price.value;
    const ratings = form.ratings.value;
    const offSale = form.off_sale.value;
    const category = form.category.value;
    const company = form.company.value;

    const data = {
      title,
      image,
      price,
      delPrice,
      ratings,
      offSale,
      category,
      company,
    };
    // console.log(data);

    await fetch(
      `https://electro-mart-server-side.vercel.app/products/${product._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: "Product Edited Successfully!",
          text: `Your product ${data.title} has been Edited.`,
          icon: "success",
        });
      });
  };

  return (
    <div>
      <h1 className="text-5xl font-bold text-center">Edit Products</h1>

      <div className="my-16">
        {/* form start  */}

        <form onSubmit={handleSubmit} className="w-8/12 mx-auto ">
          <div className="relative z-0 w-full mb-5 group">
            <input
              defaultValue={title}
              type="text"
              name="title"
              placeholder="Title"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            />
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              defaultValue={company}
              type="text"
              name="company"
              placeholder="Company"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            />
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                defaultValue={price}
                type="number"
                name="price"
                placeholder="Price"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              />
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                defaultValue={delPrice}
                type="text"
                name="del_price"
                placeholder="Del Price"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                defaultValue={ratings}
                type="number"
                name="ratings"
                placeholder="Ratings"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              />
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                defaultValue={offSale}
                type="text"
                name="off_sale"
                placeholder="Off Sale"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              />
            </div>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              defaultValue={category}
              type="text"
              name="category"
              placeholder="Category"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            />
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              defaultValue={image}
              type="text"
              name="image_url"
              placeholder="Image URL"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            />
          </div>
          <button type="submit" className="btn-submit">
            Submit
          </button>
        </form>

        {/* form end */}
      </div>
    </div>
  );
};

export default EditProduct;
