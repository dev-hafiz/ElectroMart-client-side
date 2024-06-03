import "./MidFooter.css";
import { AiOutlineApple } from "react-icons/ai";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { Link } from "react-router-dom";

const MidFooter = () => {
  return (
    <div className="mt-16 pb-10 mb-8 border-b-[.5px] border-[#444444]">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div>
          <h3 className="footer-title">Get In Touch With Us</h3>
          <div>
            <p className="footer-des">Phone: +1 (900) 33 169 7720</p>
            <span className="footer-des mt-3">Monday-Friday:</span>
            <p className="footer-des">9.00 am - 8.00 pm</p>
            <span className="footer-des mt-3">Saturday</span>
            <p className="footer-des">10.00 am - 6.00 pm</p>
            <p className="footer-des">support@customer.com</p>
          </div>
        </div>
        <div>
          <h3 className="footer-title">Our Mobile App</h3>
          <button className="store-btn">
            <AiOutlineApple className="fa-store" />
            <div>
              <p className="store-text">Download on the</p>
              <h4 className="store">Apple Store</h4>
            </div>
          </button>
          <button className="store-btn">
            <IoLogoGooglePlaystore className="fa-store" />
            <div>
              <p className="store-text">Download on the</p>
              <h4 className="store">Google Play</h4>
            </div>
          </button>
        </div>
        <div>
          <h3 className="footer-title">Information</h3>
          <div>
            <ul>
              <li>
                <Link to="/" className="link-btn">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/" className="link-btn">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/" className="link-btn">
                  Downloads
                </Link>
              </li>
              <li>
                <Link to="/" className="link-btn">
                  Sitemap
                </Link>
              </li>
              <li>
                <Link to="/" className="link-btn">
                  FAQs Page
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="footer-title">Shop Departments</h3>
          <div>
            <ul>
              <li>
                <Link to="/" className="link-btn">
                  Computers & Accessories
                </Link>
              </li>
              <li>
                <Link to="/" className="link-btn">
                  Smartphones & Tablets
                </Link>
              </li>
              <li>
                <Link to="/" className="link-btn">
                  TV, Video & Audio
                </Link>
              </li>
              <li>
                <Link to="/" className="link-btn">
                  Cameras, Photo & Video
                </Link>
              </li>
              <li>
                <Link to="/" className="link-btn">
                  Headphones
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidFooter;
