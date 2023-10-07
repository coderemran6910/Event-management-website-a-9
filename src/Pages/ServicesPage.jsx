import { useContext } from "react";
import { HomePageContext } from "../HomePageProvider/HomePageProvider";
import ServicesCard from "../components/ServicesCard";

const ServicesPage = () => {
  const { servicesPageData } = useContext(HomePageContext);
  const {services, } = servicesPageData
  console.log(servicesPageData);
  return (
    <>
   
      <div className="flex flex-col items-center justify-center py-10">
        <h1 className="text-5xl font-bold">{services?.title}</h1>
        <p className="py-6 ">{services?.description}</p>
      </div>

      {/* servicesList */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 "> 
      {
        services?.servicesList?.map((service) =>{
          return (
            <ServicesCard key={service.id} service={service}></ServicesCard>
          )
        })
      }
      </div>
    </>
  );
};

export default ServicesPage;
