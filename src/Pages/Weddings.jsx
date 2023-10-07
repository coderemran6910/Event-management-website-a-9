import { Link } from "react-router-dom";
import wedingImg from "../assets/image/wedding.jpg";
const Weddings = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-10  w-2/4 mx-auto text-center mt-20">
        <h1 className="text-5xl font-bold"> Your Dream Wedding</h1>
        <p className="py-6 ">
          Celebrate love and create memories that last a lifetime.
          <span className="text-blue-500">
            <Link to={"/contact"}>contact us</Link>
          </span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center  h-[80vh] overflow-hidden">
        <div className="object-cover">
          <img
            src={wedingImg}
            alt=""
            className="rounded-2xl h-full w-full object-cover  object-top"
          />
        </div>

        <div>
          <div className="bg-white shadow-md p-4">
            <h1 className="text-2xl font-extrabold text-orange-600 ">
              Our Wedding
            </h1>
          </div>
          <div className="container mx-auto p-4">
            <section className="my-8 space-x-5">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                How We'll Manage the Wedding Event
              </h2>
              <p className="text-gray-700">
                At our wedding, we're dedicated to making this special day as
                memorable and enjoyable as possible for our guests. Here's how
                we plan to manage the event:
              </p>
              <ul className="list-disc pl-4 mt-4">
                <li className="text-gray-700">
                  <strong>Event Date:</strong> We have carefully chosen a date
                  that works for us and our loved ones, so everyone can join us
                  in celebrating our union.
                </li>
                <li className="text-gray-700">
                  <strong>Venue:</strong> We've selected a beautiful venue that
                  offers both indoor and outdoor spaces, ensuring a comfortable
                  and picturesque setting for the ceremony and reception.
                </li>
                <li className="text-gray-700">
                  <strong>Guest List:</strong> We've created a guest list that
                  includes our closest friends and family members, ensuring an
                  intimate and meaningful gathering.
                </li>
                <li className="text-gray-700">
                  <strong>Food and Drinks:</strong> Our catering team will
                  provide a delicious menu, including options for dietary
                  preferences and restrictions.
                </li>
                <li className="text-gray-700">
                  <strong>Entertainment:</strong> We've hired a talented DJ and
                  live band to keep the celebration lively and fun for everyone.
                </li>
                <li className="text-gray-700">
                  <strong>Decorations:</strong> The venue will be beautifully
                  decorated to reflect our style and love story, creating a
                  romantic atmosphere.
                </li>
              </ul>
              <p className="text-gray-700 mt-4">
                We can't wait to share this special day with you and create
                lasting memories together.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weddings;
