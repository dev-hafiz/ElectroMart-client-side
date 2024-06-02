import "./Register.css";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Register = () => {
  return (
    <div className="h-screen  flex justify-center items-center">
      <div className="register-area w-2/4">
        <div className="top-box flex justify-between items-center">
          <h3 className="title-text">Register</h3>
          <p className="toggle-text">
            Already Have an account?{" "}
            <span className="cursor-pointer text-blue-400">Login Now</span>
          </p>
        </div>
        <div>
          <div className="social-btn-wrapper">
            <span>You can either...</span>
            <div className="grid md:grid-cols-12  gap-2">
              <div className="col-span-4">
                <button className="social-btn">
                  <FaGoogle className="fa-btn" />
                  <span className="btn-text">Sign In By Google</span>
                </button>
              </div>
              <div className="col-span-4">
                <button className="social-btn">
                  <FaFacebookSquare className="fa-btn" />
                  <span className="btn-text">Sign In By Facebook</span>
                </button>
              </div>
              <div className="col-span-4">
                <button className="social-btn">
                  <FaTwitterSquare className="fa-btn" />
                  <span className="btn-text">Sign In By Twitter</span>
                </button>
              </div>
            </div>
          </div>
          <p className="sign-text">or, You can register yourself...</p>

          <form>
            <div className="grid md:grid-cols-2 input-area gap-2 mb-4">
              <div>
                <input
                  className="input-field"
                  type="text"
                  placeholder="Enter your name"
                  required
                  name="name"
                />
              </div>
              <div>
                <input
                  className="input-field"
                  type="email"
                  placeholder="Enter your email "
                  required
                  name="email"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 input-area gap-2 ">
              <div>
                <input
                  className="input-field"
                  type="password"
                  placeholder="Enter password "
                  required
                  name="password"
                />
              </div>
              <div>
                <input
                  className="input-field"
                  type="url"
                  placeholder="Photo URL "
                  required
                  name="photo_url"
                />
              </div>
            </div>

            <input
              className="submit-btn"
              type="submit"
              value="Create Account"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
