import { useContext } from "react";
import { HomePageContext } from "../HomePageProvider/HomePageProvider";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ServicesDetails = () => {
  const navigate = useNavigate();
  const { servicesPageData } = useContext(HomePageContext);
  const { id } = useParams();

  const serviceData = servicesPageData.services.servicesList.find(
    (service) => service?.id === id
  );

  return (
    <div>
      <div className="hero min-h-[80vh] bg-base-200 p-5">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={serviceData?.image} className=" rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{serviceData?.name}</h1>
            <p className="py-6">{serviceData?.description}</p>
            <div className=" flex flex-col md:flex-row gap-5 justify-between items-center">
              <h3 className="py-2 rounded-lg px-8 bg-blue-600 text-white font-bold">{serviceData.price}</h3>

              <button
                onClick={() => {
                  toast.success("Booking successfull");
                  navigate("/");
                }}
                className="btn text-white bg-orange-600"
              >
             
                go to booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
