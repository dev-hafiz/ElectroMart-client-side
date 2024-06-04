import { Link, Outlet } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoHomeOutline } from "react-icons/io5";
import { LiaProductHunt } from "react-icons/lia";
import { IoIosAddCircleOutline } from "react-icons/io";
import { GrHomeOption } from "react-icons/gr";
import "../pages/dashboard/DashboardLayout.css";
import { LuUser2 } from "react-icons/lu";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3  dashbaord-left  min-h-screen px-12">
        <div className="dashboard-logo-wrapper">
          <LuLayoutDashboard className="dashboard-logo" />
          <h3 className="dashboard-title">Dashboard</h3>
        </div>
        <ul>
          <li>
            <button className="dashboard-link">
              <LuUser2 className="link-icon" />
              <Link to={""} className="lnik-text">
                User Profile
              </Link>
            </button>
          </li>
          <li>
            <button className="dashboard-link">
              <LiaProductHunt className="link-icon" />
              <Link to={"allProducts"} className="lnik-text">
                All Products
              </Link>
            </button>
          </li>
          <li>
            <button className="dashboard-link">
              <IoIosAddCircleOutline className="link-icon" />
              <Link to={"addProduct"} className="lnik-text">
                Add Product
              </Link>
            </button>
          </li>

          <li>
            <button className="dashboard-link">
              <IoHomeOutline className="link-icon" />
              <Link to={"/"} className="lnik-text">
                Home
              </Link>
            </button>
          </li>
        </ul>
      </div>
      <div className="col-span-9 dashbaord-right p-20">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
