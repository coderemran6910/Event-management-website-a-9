import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const MainLayout = () => {
    return (
        <div> 
            <Helmet><title> Home Page </title></Helmet>
            <Navbar></Navbar>
           <div>
           <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;