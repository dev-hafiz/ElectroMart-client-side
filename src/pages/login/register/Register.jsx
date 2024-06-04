import "./Register.css";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
  const { registerWithEmailAndPassword, signInWithGoogle } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoUrl.value;
    // console.log(name, email, password, photoUrl);
    registerWithEmailAndPassword(
      email,
      password,
      name,
      photoUrl,
      location,
      navigate
    );
  };

  const handleGoogleLogin = () => {
    signInWithGoogle(location, navigate);
  };

  return (
    <div className="h-screen  flex justify-center items-center">
      <div className="register-area w-2/4">
        <div className="flex justify-between items-center">
          <h3 className="title-text">Register</h3>
          <p className="toggle-text">
            Already Have an account?{" "}
            <Link to="/login">
              <span className="cursor-pointer font-bold">Login Now</span>
            </Link>
          </p>
        </div>
        <div>
          <div className="social-btn-wrapper">
            <span>You can either...</span>
            <div className="grid md:grid-cols-12  gap-2">
              <div className="col-span-4">
                <button onClick={handleGoogleLogin} className="social-btn">
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

          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 input-area gap-2 mb-4">
              <div>
                <input
                  type="text"
                  name="name"
                  className="input-field"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  className="input-field"
                  placeholder="Enter your email "
                  required
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 input-area gap-2 ">
              <div>
                <input
                  type="password"
                  name="password"
                  className="input-field"
                  placeholder="Enter password "
                  required
                />
              </div>
              <div>
                <input
                  type="url"
                  name="photoUrl"
                  className="input-field"
                  placeholder="Photo URL "
                  required
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
