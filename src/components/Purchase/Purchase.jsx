import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Purchase = () => {
  const { carDataId } = useParams();

  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5000/carsData/${carDataId}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [carDataId]);

  return (
    <div className="grid xl:grid-cols-2 text-center mt-14 md:grid-cols-2  ">
      <div className="grid  grid-cols-1 xl:grid-cols-1 text-center mt-14 md:grid-cols-2  ">
        <div className=" mx-auto text-center ">
          <div className="bg-white shadow-md border border-gray-200 rounded-lg mb-5">
            <a href="/">
              <img
                className="rounded-t-lg w-80 rounded-lgv h-60"
                src={data.img}
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="/">
                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                  Company : {data.company}
                </h5>
              </a>
              <p className="font-normal text-xl text-gray-700 mb-3">
                Model : {data.model}
              </p>
              <p className="font-normal text-lg text-gray-700 mb-3">
                Price : ${data.price}
              </p>
              <p className="font-normal text-gray-700 mb-3">Tax : {data.tax}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-14">
        <input placeholder="text" type="text" />
        <br />
        <input placeholder="text" type="text" />
        <br />
        <input placeholder="text" type="text" />
        <br />

        <input placeholder="text" type="text" />
      </div>
    </div>
  );
};

export default Purchase;
