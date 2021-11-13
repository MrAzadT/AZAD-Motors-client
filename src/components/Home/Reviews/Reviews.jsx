import React, { useEffect, useState } from "react";
import axios from "axios";
import Rating from "react-rating";

const Reviews = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fathomless-woodland-69605.herokuapp.com/reviews")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <h1 className=" text-4xl text-center mt-16 font-bold">
        CUSTOMER REVIEWS
      </h1>
      <hr className=" border-2 w-4/12 rounded-lg mt-3 border-primary m-auto" />
      <div className="grid xl:grid-cols-3 gap-10 m-auto mt-14 md:grid-cols-2 grid-cols-1 max-w-6xl">
        {data.map((item) => (
          <div key={item._id} className=" w-72 mx-auto text-center ">
            <div className=" shadow-md border  border-gray-200 rounded-lg max-w-sm mb-5">
              <div className="p-5 ring-2 rounded-lg">
                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                  {item.name}
                </h5>

                <p className="font-normal text-xl text-gray-700 mb-3">
                  <img
                    className="w-10"
                    src="https://res.cloudinary.com/abidazad/image/upload/v1636736312/double-quotes_1_fbje3r.png"
                    alt=""
                  />
                  {item.review}
                  <img
                    className=" w-10 mx-48"
                    src="https://res.cloudinary.com/abidazad/image/upload/v1636736312/double-quotes_2_bsyo9l.png"
                    alt=""
                  />
                </p>
                <p className=" font-serif  text-lg text-gray-700 mb-3">
                  <Rating
                    initialRating={item.rating}
                    emptySymbol="far fa-star text-red-600 mr-1 "
                    fullSymbol="fas fa-star text-red-600 mr-1 "
                    readonly
                  />
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Reviews;
