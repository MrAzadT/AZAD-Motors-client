import React from "react";
import "./TopModels.css";

const TopModels = () => {
  return (
    <>
      <h1 className="text-center  text-4xl mt-14 mb-3 font-bold ">
        THE MOST ICONIC CARS
      </h1>
      <hr className="border-2 w-4/12 m-auto mb-10 border-primary rounded-lg" />
      <div className=" w-5/6 m-auto ">
        <div className="gallery">
          <figure className="gallery__item gallery__item--1">
            <img
              src="https://res.cloudinary.com/abidazad/image/upload/v1636541082/pexels-den-pilsh-8022352_1_bamukg.jpg"
              alt="img"
              className="gallery__img rounded-lg"
            />
          </figure>
          <figure className="gallery__item gallery__item--2">
            <img
              src="https://res.cloudinary.com/abidazad/image/upload/v1636541083/pexels-mike-9735310_1_xs6wuq.jpg"
              alt="img"
              className="gallery__img rounded-lg"
            />
          </figure>
          <figure className="gallery__item gallery__item--3">
            <img
              src="https://res.cloudinary.com/abidazad/image/upload/v1636541082/pexels-luca-sammarco-6194412_1_w6fsg0.jpg"
              alt="img"
              className="gallery__img rounded-lg"
            />
          </figure>
          <figure className="gallery__item gallery__item--4">
            <img
              src="https://res.cloudinary.com/abidazad/image/upload/v1636541080/pexels-abdulwahab-alawadhi-3422964_qtl4dq.jpg"
              alt="img"
              className="gallery__img rounded-lg"
            />
          </figure>
          <figure className="gallery__item gallery__item--5">
            <img
              src="https://res.cloudinary.com/abidazad/image/upload/v1636541081/pexels-denys-gromov-4635349_1_xohuno.jpg"
              alt="img"
              className="gallery__img rounded-lg"
            />
          </figure>
          <figure className="gallery__item gallery__item--6">
            <img
              src="https://res.cloudinary.com/abidazad/image/upload/v1636541078/pexels-jae-park-3764984_1_ws8d9q.jpg"
              alt="img"
              className="gallery__img rounded-lg"
            />
          </figure>
        </div>
      </div>
    </>
  );
};

export default TopModels;
