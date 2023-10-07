import { useContext } from "react";
import sliderImg1 from "../assets/image/1.jpg";
import { HomePageContext } from "../HomePageProvider/HomePageProvider";
// import sliderImg2 from "../assets/image/2.jpg";


const Bannerslider = () => {
  const {homePageData} = useContext(HomePageContext)
 const {banner} = homePageData
 console.log(banner);
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(" + sliderImg1 + ")",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold"> {banner?.title} </h1>
            <p className="mb-5">
             {banner?.description}
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bannerslider;
