import "./Midbar.css";
import logo from "../../../../assets/images/logo/LOGO.png";
import { BsSearch, BsTelephone } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

const Midbar = () => {
  return (
    <div className="lg:container px-5 md:mx-auto grid md:grid-cols-12 gap-5 py-5 sm:mt-2  items-center">
      <div className="col-span-2">
        <Link to="/">
          <img width="auto" src={logo} alt="website logo" />
        </Link>
      </div>
      <div className="search-input flex items-center col-span-6 ">
        <input placeholder="Search your product..." />
        <BsSearch className="search-icon" />
      </div>
      <div className=" col-span-2 flex   items-center ">
        <div className="icon-area-call">
          <BsTelephone />
        </div>
        <div className="contact-des">
          <span>Hotline:</span>
          <p>(+880) 178 658 9600</p>
        </div>
      </div>
      <div className="wishlist flex gap-2 items-center col-span-2">
        <div className="badge">
          <span className="couter-badge">04</span>
          <button className="icon-area">
            <GoHeart />
          </button>
        </div>

        <button className="flex items-center">
          <div className="badge">
            <span className="couter-badge">18</span>
            <div className="icon-area">
              <FiShoppingCart />
            </div>
          </div>
          <div className="cart-amount">
            <h3>Cart</h3>
            <p>$ 654.00</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Midbar;
