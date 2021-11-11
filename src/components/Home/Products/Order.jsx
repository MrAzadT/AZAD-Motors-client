import axios from "axios";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/AuthProvider";

const Order = () => {
  const { currentUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    //Filtering
    data.email = currentUser.email;
    axios
      .post("https://dreadful-blood-69167.herokuapp.com/orders", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-full m-auto">
      <h1 className="">Order Now</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="block text-md mb-2">Email</label>
        <input
          //   defaultValue={currentUser.email}
          placeholder="email"
          className="px-4 w-80 border-2 py-2 rounded-md text-sm outline-none"
          {...register("email", { required: true })}
        />
        <br />
        <label className="block text-md mb-2">Email</label>
        <input
          placeholder="email"
          className="px-4 w-80 border-2 py-2 rounded-md text-sm outline-none"
          {...register("email", { required: true })}
        />
        <br />
        <label className="block text-md mb-2">Email</label>
        <input
          placeholder="email"
          className="px-4 w-80 border-2 py-2 rounded-md text-sm outline-none"
          {...register("email", { required: true })}
        />
        <br />
        <label className="block text-md mb-2">Email</label>
        <input
          placeholder="email"
          className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
          {...register("email", { required: true })}
        />
        <br />

        {errors.exampleRequired && <span>This field is required</span>}
        <br />
        <input
          className="mt-4 px-4 ring-2 ring-green-500 py-2 border-2  rounded-lg bg-green-400 text-white"
          type="submit"
        />
      </form>
    </div>
  );
};

export default Order;
