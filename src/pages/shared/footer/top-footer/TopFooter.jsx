import "./TopFooter.css";
import logo from "../../../../assets/images/logo/LOGO FOOTER.png";

const TopFooter = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pb-10 border-b-[.5px] border-[#444444]">
      <div>
        <img src={logo} width={"200px"} alt="logo footer" />
      </div>
      <div>
        <h3 className="text-xl font-bold">Subscribe to our Newsletter</h3>
        <p className="text-[#d6d6d6;] text-[16px] ">
          Get all the latest information, Sales and Offers.
        </p>
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email address here..."
          className="email-input"
        />
        <button className="subscribe-btn">Subscribe</button>
      </div>
    </div>
  );
};

export default TopFooter;
