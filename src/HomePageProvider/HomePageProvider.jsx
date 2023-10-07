import { createContext, useEffect, useState } from "react";

export const HomePageContext = createContext(null);

const HomePageProvider = ({ children }) => {
  const [homePageData, setHomePageData] = useState({});
  const [servicesPageData, setServicesPageData] = useState({});

  // Home Page Data
  useEffect(() => {
    fetch('/homePageData.json')
      .then(res => res.json())
      .then(data => setHomePageData(data))
     
  }, []);

  // Services Page Data
  useEffect(() => {
    fetch('/ServicesPage.json')
      .then(res => res.json())
      .then(data => setServicesPageData(data))
    
  }, []);

  const data = {
    homePageData,
    servicesPageData
  };


  return (
    <div>
      <HomePageContext.Provider value={data}>
        {children}
      </HomePageContext.Provider>
    </div>
  );
};

export default HomePageProvider;
