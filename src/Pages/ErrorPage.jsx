import { Helmet } from "react-helmet";
import errorIcon from "../assets/image/error.jpg";

const ErrorPage = () => {
  return (
    <div>
      <Helmet><title> Error Page </title></Helmet>      
      <div className="bg-gray-100 h-screen flex flex-col items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
         
          <img
            src={errorIcon}

            alt="Error Icon"
            className="mx-auto mb-4 rounded-full w-40 h-40"
          />

        
          <h1 className="text-4xl font-bold text-red-600 mb-2">
            Oops! Something went wrong.
          </h1>
          <p className="text-gray-600">
            We apologize for the inconvenience. The page you are looking for may
            have been moved or does not exist.
          </p>

        
          <a
            href="/"
            className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
