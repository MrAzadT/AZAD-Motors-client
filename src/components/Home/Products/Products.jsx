import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/cars")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const newData = data.slice(0, 6);

  return (
    <>
      <h1 className=" text-4xl text-center mt-16 font-bold">
        BUYING YOUR DREAM CAR
      </h1>
      <hr className=" border-2 w-5/12 rounded-lg mt-3 border-green-600 m-auto" />
      <div className="grid xl:grid-cols-3 gap-10 m-auto mt-14 md:grid-cols-2 grid-cols-1 max-w-6xl">
        {newData.map((item) => (
          <div key={item.id} className="max-w-lg mx-auto text-center ">
            <div className="transform transition   hover:-translate-y-0.5  bg-white shadow-md translate border border-gray-200 rounded-lg max-w-sm mb-5">
              <img
                className="rounded-t-lg w-72 rounded-lgv h-60"
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
                <p className="font-normal text-gray-700 mb-3">
                  Tax : {item.tax}
                </p>
                <Link
                  className="text-white ring-2 ring-blue-500 bg-blue-700 hover:bg-blue-800 focus:ring-4  font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                  to={`/purchase/${item._id}`}
                >
                  Purchase
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
