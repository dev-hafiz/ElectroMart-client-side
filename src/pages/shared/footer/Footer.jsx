import BottomFooter from "./bottom-footer/BottomFooter";
import MidFooter from "./mid-footer/MidFooter";
import TopFooter from "./top-footer/TopFooter";

const Footer = () => {
  return (
    <div className="bg-[#081828] text-white pt-14 pb-6">
      <div className="lg:container px-5 md:mx-auto">
        <TopFooter />
        <MidFooter />
        <BottomFooter />
      </div>
    </div>
  );
};

export default Footer;
