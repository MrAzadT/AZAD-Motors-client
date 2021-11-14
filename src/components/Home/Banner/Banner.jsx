import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className=" bg-secondary">
      <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
        <div className="flex flex-col items-center w-full md:flex-row md:w-1/2">
          <div className="max-w-lg md:mx-12 md:order-2">
            <h1 className="text-3xl text-white font-medium tracking-wide  md:text-4xl">
              AZAD Motors
            </h1>
            <h1 className="text-3xl mt-4 font-medium tracking-wide text-white  md:text-4xl">
              Find your perfect car
            </h1>
            <p className="mt-4 text-white">
              Azad Motors, we understand how stressful buying a car can be for
              people. That's why our friendly, knowledgeable, and professionally
              certified sales staff will treat you with the respect and
              consideration you deserve. We have an A+ rating with the Better
              Business Bureau because the sales team at R.W. Motors takes a
              consultative approach to sales. All you have to do is answer a few
              questions, and a salesperson will guide you through our lot to
              find the perfect vehicle to fit your needs and budget.
            </p>
            <div className="mt-8 w-40">
              <Link
                to="/moreCars"
                className="block ring-2  ring-gray-500 px-5 text-lg py-3 font-semibold text-center text-white transition-colors duration-200 transform rounded-md md:inline bg-primary  hover:bg-white hover:text-black"
              >
                CHECK NOW
              </Link>
            </div>
          </div>
        </div>

        <div className=" flex items-center justify-center w-full h-96 md:w-1/2">
          <img
            alt=""
            className=" transform transition-all hover:-translate-x-6 hover:scale-105  object-cover w-full h-full max-w-2xl rounded-md"
            src="https://res.cloudinary.com/abidazad/image/upload/v1636532159/pexels-jesse-zheng-1213294_ahmbfw.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
