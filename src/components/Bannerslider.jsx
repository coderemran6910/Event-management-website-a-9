import { useContext } from "react";
import sliderImg1 from "../assets/image/1.jpg";
import { HomePageContext } from "../HomePageProvider/HomePageProvider";
// import sliderImg2 from "../assets/image/2.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../components/Banner2/banner2Style.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

const Bannerslider = () => {
  const { servicesPageData } = useContext(HomePageContext);
  const { services } = servicesPageData;

  const { homePageData } = useContext(HomePageContext);
  const { banner } = homePageData;
  console.log(banner);
  return (
    <>
      <div
        className="hero w-full min-h-[90vh]"
        style={{
          backgroundImage: "url(" + sliderImg1 + ")",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="  grid  grid-cols-1 justify-center ">
          {/* ===================================================================== */}
          <div className="w-96 mx-auto md:mx-0  md:w-auto mb-10 z-10">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 5,
                slideShadows: false,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              {services?.servicesList?.map((image) => {
                return (
                  <SwiperSlide key={image.id}>
                    <img
                      className="w-full h-80 md:h-96 object-cover rounded-lg"
                      src={image.image}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          {/* ======================================================================= */}
          <div className=" text-center  bg-opacity-60 bg-black p-10">
            <h1 className="mb-5 text-5xl font-extrabold text-center text-orange-500 ">
             
              {banner?.title}
            </h1>
            <p className="mb-5 text-white text-2xl ">{banner?.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bannerslider;
