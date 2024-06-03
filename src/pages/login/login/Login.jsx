import "./Login.css";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

  return (
    <div className="h-screen  flex justify-center items-center">
      <div className="register-area w-2/4">
        <div className="top-box flex justify-between items-center ">
          <h3 className="title-text-login">Login</h3>
          <p className="toggle-text-login">
            Don&apos;t Have an account?{" "}
            <Link to="/register">
              <span className="cursor-pointer font-bold">Register Now</span>
            </Link>
          </p>
        </div>

        <div className="grid md:grid-cols-2 input-area gap-5 mb-4">
          <div>
            <h3 className="recomend-text">We recommmend</h3>
            <span className="sub-text">Happy! shopping and deal with us</span>
            <div className="mt-4 mb-10">
              <button className="social-btn-login">
                <FaGoogle className="fa-btn-login" />
                <span className="btn-text-login">Sign In By Google</span>
              </button>
              <button className="social-btn-login">
                <FaFacebookSquare className="fa-btn-login" />
                <span className="btn-text-login">Sign In By Facebook</span>
              </button>
              <button className="social-btn-login">
                <FaTwitterSquare className="fa-btn-login" />
                <span className="btn-text-login">Sign In By Twitter</span>
              </button>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="right-text">Login with ElectroMart!</h3>
            <form onSubmit={handleSubmit}>
              <div className="">
                <div>
                  <input
                    type="email"
                    name="email"
                    className="input-field mb-3"
                    placeholder="Enter Emaill "
                    required
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    className="input-field"
                    placeholder="Enter Password"
                    required
                  />
                </div>
              </div>

              <input className="submit-btn-login" type="submit" value="Login" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
