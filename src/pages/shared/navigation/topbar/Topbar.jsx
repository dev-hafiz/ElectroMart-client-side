import "./Topbar.css";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineNotListedLocation } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import { RxDashboard } from "react-icons/rx";

const Topbar = () => {
  const { user, logOut } = useAuth();
  console.log("User From Topbr Nav -->", user);
  return (
    <div className="topbar-wrapper">
      <div className="topbar lg:container px-5 md:mx-auto grid md:grid-cols-4 gap-2">
        <div className=" col-span-2">
          <p className="sub-text">Wellcome To Our Online Shopping Store !</p>
        </div>
        <div className=" col-span-2 flex items-center justify-between">
          <div className="icon-box sm:ml-4 ">
            <IoLocationOutline /> <span>Contacts</span>
          </div>
          <div className="icon-box">
            <MdOutlineNotListedLocation /> <span>Need Help</span>
          </div>
          {user?.uid && (
            <div className="icon-box">
              <Link
                to="/dashboard"
                style={{ display: "flex", alignItems: "center" }}
              >
                <RxDashboard /> <span className="ml-1">Dashboard</span>
              </Link>
            </div>
          )}
          <div>
            {user?.uid ? (
              <>
                <button onClick={logOut} className="logout-btn">
                  Log Out
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="icon-box">
                  <AiOutlineUser /> <span>Sign In / Register</span>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
