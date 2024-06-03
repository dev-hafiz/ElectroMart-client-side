import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import "./SwiperSlider.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import banner2 from "../../../src/assets/images/banner/banner2.png";

const SwiperContainer = styled.div`
  .swiper-button-next,
  .swiper-button-prev {
    display: none !important;
  }
`;

const SwiperSlider = () => {
  return (
    <SwiperContainer>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="grid md:grid-cols-12 gap-4 background-image-one">
            <div className="left-area text-start col-span-12 md:col-span-6">
              <span className="price-text">
                No restocking fee ($35 savings)
              </span>
              <h1 className="slider-title">
                A Journey Beyond <span className="bold-text">Reality</span>
              </h1>
              <p className="slider-des">
                The Xbox One S boasts a redesigned controller and seamless PC
                cross-play compatibility as standout features.
              </p>
              <button className="shop-btn">Shopping Now </button>
            </div>
            <div className="right-area  col-span-12 md:col-span-6 ">
              <img src={banner2} alt="banner" className="slider-img" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid md:grid-cols-12 gap-4 background-image-one">
            <div className="left-area text-start col-span-12 md:col-span-6">
              <span className="price-text">
                No restocking fee ($35 savings)
              </span>
              <h1 className="slider-title">
                A Journey Beyond <span className="bold-text">Reality</span>
              </h1>
              <p className="slider-des">
                The Xbox One S boasts a redesigned controller and seamless PC
                cross-play compatibility as standout features.
              </p>
              <button className="shop-btn">Shopping Now </button>
            </div>
            <div className="right-area  col-span-12 md:col-span-6 ">
              <img src={banner2} alt="banner" className="slider-img" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid md:grid-cols-12 gap-4 background-image-one">
            <div className="left-area text-start col-span-12 md:col-span-6">
              <span className="price-text">
                No restocking fee ($35 savings)
              </span>
              <h1 className="slider-title">
                A Journey Beyond <span className="bold-text">Reality</span>
              </h1>
              <p className="slider-des">
                The Xbox One S boasts a redesigned controller and seamless PC
                cross-play compatibility as standout features.
              </p>
              <button className="shop-btn">Shopping Now </button>
            </div>
            <div className="right-area  col-span-12 md:col-span-6 ">
              <img src={banner2} alt="banner" className="slider-img" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </SwiperContainer>
  );
};

export default SwiperSlider;
