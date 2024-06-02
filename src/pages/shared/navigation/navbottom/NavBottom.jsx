/* eslint-disable react/no-unknown-property */
import "./NavBottom.css";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

const NavBottom = () => {
  return (
    <div className="nav-wrapper">
      <div className="lg:container px-5 md:mx-auto grid md:grid-cols-12 gap-5 items-center">
        <div className="col-span-3 border-[#e5e5e5] border-r-[1px] hidden md:block h-[60px] ">
          <p>Category</p>
        </div>
        <div className="md:col-span-6 ">
          {/* nav start */}

          {/* nav end */}
        </div>
        <div className="md:col-span-3 flex items-center  ">
          <span className="flw-text pl-4">Follow Us:</span>
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
  );
};

export default NavBottom;
