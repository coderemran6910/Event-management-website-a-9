import { Helmet } from "react-helmet";


const AnniversariesPage = () => {
  return (
    <div className="  p-10 ">


      <Helmet> <title> Anniversaries Secret</title> </Helmet>
      <header className=" py-10">
        <div className="container mx-auto text-center">
          <h1 className=" text-3xl md:text-5xl font-semibold">
            Celebrate <span className='text-orange-600'>Anniversaries</span> with Us
          </h1>
          <p className="text-lg md:text-xl lg:text-xl mt-2">
            Special moments deserve special celebrations!
          </p>
        </div>
      </header>
      <main className="container mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
         
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">10th Anniversary</h2>
            <p className="text-gray-600">
              Join us in celebrating a decade of love and togetherness.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">25th Anniversary</h2>
            <p className="text-gray-600">
              Silver jubilee! A quarter-century of cherished memories.
            </p>
          </div>
      
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">5th Anniversary</h2>
            <p className="text-gray-600">
              Celebrating half a decade of love and laughter.
            </p>
          </div>
         
        </div>


        <section className="mt-12 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            Create Your Custom Anniversary Package
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600">
            Tailor your celebration with our customizable anniversary packages.
          </p>
          <a
            href="/"
            className="mt-4 inline-block bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition duration-300 ease-in-out"
          >
            Explore Packages
          </a>
        </section>
      </main>
    </div>
  );
};

export default AnniversariesPage;
