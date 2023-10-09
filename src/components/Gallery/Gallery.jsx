import  { useContext, useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../Gallery/gallery.modules.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { HomePageContext } from "../../HomePageProvider/HomePageProvider";

export default function App() {
  const { servicesPageData } = useContext(HomePageContext);
  const { services } = servicesPageData;

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <div className="bg-gray-100 p-10 mx-auto container "> 
      <div className="flex flex-col items-center justify-center py-10 text-center">
      <h2 className="text-5xl font-extrabold text-orange-600">Our Gallery</h2>
      <p className="py-6 text-lg"> {services?.description} </p>
      </div>


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
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {services?.servicesList?.map((service) => {
          return (
            <div key={service.id} className="w-2/4 mx-auto h-screen">
              <SwiperSlide>
                {" "}
                <img className="w-full h-screen object-cover" src={service.image} alt="" />{" "}
              </SwiperSlide>
            </div>
          );
        })}

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      </div>
    </>
  );
}
