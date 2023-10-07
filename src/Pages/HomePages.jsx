import Bannerslider from "../components/Bannerslider";
import AboutUs from "./AboutUs";
import ServicesPage from "./ServicesPage";
import Weddings from "./Weddings";
const HomePages = () => {
 

    return (
        <div>
           <Bannerslider></Bannerslider>
           <ServicesPage></ServicesPage>
           <Weddings></Weddings>
           <AboutUs></AboutUs>
        </div>
    );
};

export default HomePages;