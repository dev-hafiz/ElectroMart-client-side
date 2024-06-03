import SwiperSlider from "../../components/home-compo/SwiperSlider";

const Home = () => {
  return (
    <div className="lg:container px-5 md:mx-auto h-screen">
      <div className="grid md:grid-cols-12 gap-4">
        <div className=" col-span-8">
          <SwiperSlider />
        </div>
        <div className=" col-span-4">right</div>
      </div>
    </div>
  );
};

export default Home;
