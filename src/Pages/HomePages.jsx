// import Bannerslider from "../components/Bannerslider";
// import Banner2 from "../components/Banner2/Banner2";
import Bannerslider from "../components/Bannerslider";
import AboutUs from "./AboutUs";
import ServicesPage from "./ServicesPage";
import Weddings from "./Weddings";
const HomePages = () => {
 

    return (
        <div>
           <Bannerslider></Bannerslider>
           {/* <Banner2> </Banner2> */}
           <ServicesPage></ServicesPage>
           <Weddings></Weddings>
           <AboutUs></AboutUs>
        </div>
    );
};

export default HomePages;