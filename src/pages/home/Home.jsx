import SwiperSlider from "../../components/home-compo/SwiperSlider";

const Home = () => {
  return (
    <div className="lg:container px-5  md:mx-auto">
      <div className=" grid md:grid-cols-12 gap-4 mt-6">
        <div className=" col-span-6 md:col-span-8  ">
          <SwiperSlider />
        </div>
        <div className="bg-gray-300 col-span-6 md:col-span-4 p-4">right</div>
      </div>
    </div>
  );
};

export default Home;
