import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const MoreCars = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://limitless-temple-20432.herokuapp.com/cars")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="grid xl:grid-cols-3 gap-10 m-auto mt-14 md:grid-cols-2 grid-cols-1 max-w-6xl">
      {data.map((item) => (
        <div key={item.id} className=" w-80 mx-auto text-center ">
          <div className="transform transition   hover:-translate-y-0.5 bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
            <img
              className="rounded-lg w-80 rounded-lgv h-60"
              src={item.img}
              alt=""
            />

            <div className="p-5">
              <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                Car Name : {item.company}
              </h5>

              <p className="font-normal text-xl text-gray-700 mb-3">
                Model : {item.model}
              </p>
              <p className="font-normal text-lg text-gray-700 mb-3">
                Price : ${item.price}
              </p>
              <p className="font-normal text-gray-700 mb-3">Tax : {item.tax}</p>
              <Link
                className="text-white ring-2 ring-blue-500 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                to={`/purchase/${item._id}`}
              >
                Purchase
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoreCars;
