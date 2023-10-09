import aboutImg from "../assets/image/about.jpg";

const AboutUs = () => {
  return (
    <>
     <div className="container mx-auto">

      <div className="flex flex-col items-center justify-center py-10  w-2/4 mx-auto text-center mt-20">
        <h1 className="text-5xl font-extrabold text-orange-600 border-b-2 border-orange-400">About Us</h1>
        <p className="py-6 text-lg ">Welcome to PRO EVENT HANDLER, your premier destination for creating
            unforgettable social events and dream weddings.</p>
      </div>
    

      <div className=" grid grid-cols-1 md:grid-cols-2    justify-items-center overflow-hidden">
        <div className=" object-cover">
          <img src={aboutImg} alt="about image " className="rounded-2xl h-full w-full object-cover  object-top" />
        </div>

        <div className="bg-gray-100 py-12 px-5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mt-10">
              <h2 className="text-3xl font-semibold text-orange-600">
                Our Mission
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Our team of dedicated professionals is passionate about turning
                your vision into reality. With years of experience in event
                planning and a keen eye for detail, we are committed to making
                your special day a truly magical experience.
              </p>
            </div>
            <div className="mt-10">
              <h2 className="text-3xl font-semibold text-orange-600">
                Why Choose Us?
              </h2>
              <ul className="mt-4 text-lg text-gray-500 list-disc list-inside">
                <li>Experienced and creative event planners</li>
                <li>Customized packages to suit your needs</li>
                <li>Attention to detail and flawless execution</li>
                <li>Exceptional customer service</li>
              </ul>
            </div>
            <div className="mt-10">
              <p className="text-lg text-gray-500">
                Let us be a part of your journey and help you create memories
                that will be cherished forever. Contact us today to start
                planning your dream event.
              </p>
            </div>
          </div>
        </div>
      </div>
     </div>
    </>
  );
};

export default AboutUs;
