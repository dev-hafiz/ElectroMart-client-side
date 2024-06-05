/* eslint-disable react/no-unknown-property */
import "./NavBottom.css";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { Link } from "react-router-dom";

const NavBottom = () => {
  return (
    <div className="nav-wrapper">
      <div className="lg:container px-5 md:mx-auto items-center">
        <div className="grid md:grid-cols-12 ">
          <div className="  md:col-span-3 ">
            <p>Category</p>
          </div>
          <div className="md:col-span-5 ">
            {/* nav start */}

            <div className="flex items-center">
              <Link
                to="/"
                class="text-[17px] text-white mr-14 font-[600] hover:border px-3 rounded-sm"
              >
                Home
              </Link>
              <Link
                to="/shop"
                class="text-[17px] text-white mr-14 font-[600] hover:border  px-3 rounded-sm"
              >
                Shop
              </Link>
              <Link
                to="/about"
                class="text-[17px] text-white mr-14 font-[600] hover:border  px-3 rounded-sm"
              >
                About
              </Link>
              <Link
                to="/contact"
                class="text-[17px] text-white mr-14 font-[600] hover:border  px-3 rounded-sm"
              >
                Contact
              </Link>
            </div>

            {/* nav end */}
          </div>
          <div className=" flex items-center justify-end  md:col-span-4 ">
            <span className="flw-text ">Follow Us:</span>
            <div className="icon-area-social">
              <RiTwitterXFill />
            </div>
            <div className="icon-area-social">
              <FiInstagram />
            </div>
            <div className="icon-area-social">
              <FaLinkedinIn />
            </div>

            <div className="icon-area-social">
              <FaFacebookF />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBottom;
