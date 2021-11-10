import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <img
        className="rounded-lg h-screen m-auto "
        src="https://res.cloudinary.com/abidazad/image/upload/v1636537146/2676383_ugnivd.jpg"
        alt=""
      />
      <div className="mt-6 w-2/4 m-auto text-center">
        <Link
          to="/home"
          className="block m-auto ring-4 ring-indigo-300 px-5 text-lg py-3 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md md:inline hover:bg-blue-400"
        >
          Go To Home Page
        </Link>
      </div>
    </>
  );
};

export default NotFound;
