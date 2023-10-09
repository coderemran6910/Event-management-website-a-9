import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";


import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";



const ServicesCard = ({ service }) => {


  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])



  const navigate = useNavigate();
  const { image, name, price, shortDescription, id, aos } = service;
  return (
    <div>
      <div data-aos={aos} data-aos-duration="1200" className="card w-80 md:w-72 lg:w-96 glass mx-auto shadow-xl">
        <figure className="h-48">
          <img src={image} alt="car!" className="object-cover w-full h-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p> {shortDescription}</p>

          <div className="card-actions  justify-between items-center mt-5 ">
            <button className="btn  bg-orange-600  text-white">{price}</button>
            <button
              className="btn btn-primary"
              onClick={() => navigate(`/service/${id}`)}
            >
              More details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ServicesCard.propTypes = {
  service: PropTypes.object,
};
export default ServicesCard;

// https://i.ibb.co/gSgBKRJ/pexels-rdne-stock-project-7648047.jpg
// https://i.ibb.co/ySNZZrR/pexels-wendy-wei-1190297.jpg
// https://i.ibb.co/VTW15x7/pexels-5005252.jpg
