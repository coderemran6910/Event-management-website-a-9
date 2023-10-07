const ServicesCard = ({ service }) => {
    console.log(service);
    const {description, image, name, price, shortDescription } = service
  return (
    <div>
      <div className="card w-96 glass mx-auto">
        <figure className="h-48">
          <img
            src={image}
            alt="car!"
            className="object-cover w-full h-full"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p> {shortDescription}</p>
          
          <div className="card-actions  justify-between items-center">
          <button className="btn ">{price}</button>
            <button className="btn btn-primary">More details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;





// https://i.ibb.co/gSgBKRJ/pexels-rdne-stock-project-7648047.jpg
// https://i.ibb.co/ySNZZrR/pexels-wendy-wei-1190297.jpg
// https://i.ibb.co/VTW15x7/pexels-5005252.jpg