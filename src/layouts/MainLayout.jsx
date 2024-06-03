import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/footer/Footer";
import Topbar from "../pages/shared/navigation/topbar/Topbar";
import Midbar from "../pages/shared/navigation/midbar/Midbar";
import NavBottom from "../pages/shared/navigation/navbottom/NavBottom";

const MainLayout = () => {
  return (
    <>
      <Topbar />
      <Midbar />
      {/* <NavBottom /> */}
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
