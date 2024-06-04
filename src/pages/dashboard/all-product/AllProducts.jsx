import "./AllProducts.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDelete = (_id) => {
    console.log("Product ID is", _id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/products/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setProducts(products.filter((product) => product._id !== _id));
            Swal.fire({
              title: "Deleted!",
              text: `Your product ${data.title} has been deleted.`,
              icon: "success",
            });
          });
      }
    });
  };

  return (
    <div>
      <h1 className="text-5xl font-bold text-center">All Products</h1>
      <div className="my-16 flex flex-wrap gap-4">
        <div className="   w-full">
          <table className="table mx-auto w-4/5">
            {/* head */}
            <thead>
              <tr className="text-left">
                <th>Product</th>
                <th>Price</th>
                <th>Delete</th>
                <th>Edit </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <>
                  <tr key={product._id}>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={product?.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{product?.title}</div>
                          <div className="text-sm opacity-50">
                            {product?.company}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>$ {product?.price}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(product?._id)}
                        className="btn bg-red-600 text-white btn-ghost btn-xs px-5 py-2 rounded-md"
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      <Link to={`/dashboard/all-products/edit/${product?.id}`}>
                        <button className="btn bg-green-600 text-white btn-ghost btn-xs px-5 py-2 rounded-md">
                          Edit
                        </button>
                      </Link>
                    </td>
                  </tr>
                </>
              ))}

              {/* row 1 */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
