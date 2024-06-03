// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import "./SwiperSlider.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

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
        // modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="grid md:grid-cols-2">
            <div className="left-area">left </div>
            <div className="right-area"> right</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </SwiperContainer>
  );
};

export default SwiperSlider;
