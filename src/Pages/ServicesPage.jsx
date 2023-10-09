import { useContext } from "react";
import { HomePageContext } from "../HomePageProvider/HomePageProvider";
import ServicesCard from "../components/ServicesCard";

const ServicesPage = () => {
  const { servicesPageData } = useContext(HomePageContext);
  const {services } = servicesPageData
  // console.log(servicesPageData);
  return (
    <>
   
      <div className="bg-gray-100 p-10 mx-auto "> 
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <h1 className="text-5xl font-extrabold text-orange-600 border-b-2 border-orange-400">{services?.title}</h1>
        <p className="py-6 text-lg">{services?.description}</p>
      </div>

      {/* servicesList */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6   place-items-center"> 
      {
        services?.servicesList?.map((service) =>{
          return (
            <ServicesCard key={service.id} service={service}></ServicesCard>
          )
        })
      }
      </div>
      </div>
    </>
  );
};

export default ServicesPage;
