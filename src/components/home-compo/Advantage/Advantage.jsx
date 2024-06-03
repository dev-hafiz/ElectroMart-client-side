import "./Advantage.css";
import icon1 from "../../../assets/images/icon/i1.png";
import icon2 from "../../../assets/images/icon/i2.png";
import icon3 from "../../../assets/images/icon/i3.png";
import icon4 from "../../../assets/images/icon/i4.png";
const Advantage = () => {
  return (
    <div className="advantage-wrapper">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="advantage-card ">
          <img src={icon1} alt="icon" />
          <div className="ml-2">
            <p className="advantage-title">Free Delivery</p>
            <p className="advantage-des">free shopping on all order</p>
          </div>
        </div>
        <div className="advantage-card ">
          <img src={icon2} alt="icon" />
          <div className="ml-2">
            <p className="advantage-title">Online Support 24/7</p>
            <p className="advantage-des">Support online 24 hours</p>
          </div>
        </div>
        <div className="advantage-card ">
          <img src={icon3} alt="icon" />
          <div className="ml-2">
            <p className="advantage-title">Money Return</p>
            <p className="advantage-des">Back guarantee under 7 days</p>
          </div>
        </div>
        <div className="advantage-card ">
          <img src={icon4} alt="icon" />
          <div className="ml-2">
            <p className="advantage-title">Member Discount</p>
            <p className="advantage-des">Onevery order over $30.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantage;
