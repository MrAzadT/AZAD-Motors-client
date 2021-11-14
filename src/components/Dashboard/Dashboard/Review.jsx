import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const Review = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://limitless-temple-20432.herokuapp.com/review", data)
      .then((res) => {
        console.log(res);
        alert("Your Review Submit");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-full m-auto flex justify-center ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="block mt-3 text-md mb-2">Name</label>
        <input
          placeholder="name"
          className="px-4 w-80 ring-2 ring-green-400 border-2 py-2 rounded-md text-sm outline-none"
          {...register("name", { required: true })}
        />
        <br />
        <label className="block mt-3 text-md mb-2">Review</label>
        <textarea
          placeholder="review"
          className="px-4 w-80 ring-2 ring-green-400 border-2 py-2 rounded-md text-sm outline-none"
          {...register("review", { required: true })}
        />
        <br />
        <label className="block mt-3 text-md mb-2">Rating (0-5)</label>
        <input
          placeholder="rating (0-5)"
          type="number"
          className="px-4 w-80 ring-2 ring-green-400 border-2 py-2 rounded-md text-sm outline-none"
          {...register("rating", { required: true, maxLength: 0 })}
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

export default Review;
