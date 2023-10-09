// import Bannerslider from "../components/Bannerslider";
// import Banner2 from "../components/Banner2/Banner2";
import { Helmet } from "react-helmet";
import Bannerslider from "../components/Bannerslider";
import AboutUs from "./AboutUs";
import ServicesPage from "./ServicesPage";
import Weddings from "./Weddings";


const HomePages = () => {

  

    return (
        <div>
            <Helmet> <title> Home Page </title> </Helmet>
           <Bannerslider></Bannerslider>
           <ServicesPage ></ServicesPage>
           <Weddings></Weddings>
           <AboutUs></AboutUs>
        </div>
    );
};

export default HomePages;