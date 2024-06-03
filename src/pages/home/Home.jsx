import SwiperSlider from "../../components/home-compo/SwiperSlider";
import headphone from "../../assets/images/banner/banner3.png";
import watch from "../../assets/images/banner/banner4.png";
import "./Home.css";
import Advantage from "../../components/home-compo/Advantage/Advantage";
import TopCategories from "../../components/home-compo/top-categories/TopCategories";
const Home = () => {
  return (
    <div className="lg:container px-5  md:mx-auto">
      <div className=" grid md:grid-cols-12 gap-4 mt-6">
        <div className=" col-span-6 md:col-span-8  ">
          <SwiperSlider />
        </div>
        <div className=" col-span-6 md:col-span-4">
          <div className="headphone-box">
            <div>
              <span className="headPhn-subText">New line required</span>
              <h3 className="headPhn-title">Tribit XFree Tune</h3>
              <p className="headPhn-price">$259.99</p>
            </div>
            <div>
              <img src={headphone} className="headphone-img" alt="headphone" />
            </div>
          </div>
          <div className="deal-box">
            <div>
              <span className="headPhn-subText">New line required</span>
              <h3 className="headPhn-title">Smart Apple watch</h3>
              <p className="headPhn-price">$029.76</p>
            </div>
            <div>
              <img src={watch} className="watch-img" alt="headphone" />
            </div>
          </div>
        </div>
      </div>
      <Advantage />
      <TopCategories />
    </div>
  );
};

export default Home;
