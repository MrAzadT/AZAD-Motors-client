import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    axios
      .post("https://limitless-temple-20432.herokuapp.com/cars", data)
      .then((res) => {
        console.log(res);
        alert("Add a Product successful ");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-full text-center mt-16 m-auto">
      <h1 className=" text-3xl r font-bold text-green-600">Add A Product</h1>
      <hr className="border-2 w-52 m-auto mt-2 mb-5 border-green-700" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="block mt-3 text-md mb-2">Image Link</label>
        <input
          placeholder="image link"
          className="px-4 w-80 ring-2 ring-green-400 border-2 py-2 rounded-md text-sm outline-none"
          {...register("img", { required: true })}
        />
        <br />
        <label className="block mt-3 text-md mb-2">Company</label>
        <input
          placeholder="company"
          className="px-4 w-80 ring-green-400 ring-2 border-2 py-2 rounded-md text-sm outline-none"
          {...register("company", { required: true })}
        />
        <br />
        <label className="block mt-3 text-md mb-2">Price</label>
        <input
          placeholder="price"
          className="px-4 w-80 ring-green-400 ring-2 border-2 py-2 rounded-md text-sm outline-none"
          {...register("price", { required: true })}
        />
        <br />
        <label className="block mt-3 text-md mb-2">Tax</label>
        <input
          placeholder="tax"
          className="px-4 w-80 ring-green-400 ring-2 border-2 py-2 rounded-md text-sm outline-none"
          {...register("tax", { required: true })}
        />
        <br />
        <label className="block mt-3 text-md mb-2">Model</label>
        <input
          placeholder="model"
          className="px-4 w-80 ring-green-400 ring-2 border-2 py-2 rounded-md text-sm outline-none"
          {...register("model", { required: true })}
        />
        <br />
        <label className="block mt-3 text-md mb-2">Details</label>
        <input
          placeholder="details"
          className="px-4 w-80 ring-green-400 ring-2 border-2 py-2 rounded-md text-sm outline-none"
          {...register("dis", { required: true })}
        />
        <br />

        {errors.exampleRequired && <span>This field is required</span>}
        <br />
        <input
          className="mt-4 cursor-pointer px-4 ring-2 ring-green-500 py-2 border-2  rounded-lg bg-green-400 text-white"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddProduct;
