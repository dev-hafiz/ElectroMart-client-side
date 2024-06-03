import "./BottomFooter.css";
import mastercard from "../../../../assets/images/credit-cards-footer.png";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

const BottomFooter = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
      <div className="flex items-center ">
        <p className="footer-text">We Accept:</p>
        <img width={"200px"} src={mastercard} alt="mastercard" />
      </div>
      <div className="flex items-center justify-end">
        <span className=" mr-3">Follow Us On:</span>
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
  );
};

export default BottomFooter;
