import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="mt-10 w-2/5 m-auto text-center ">
      <h1 className=" text-2xl my-10">Login to your account</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="block text-md mb-2">Email</label>
        <input
          placeholder="email"
          className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
          {...register("email", { required: true })}
        />
        <br />
        <label className="block text-md mt-3 mb-2">Password</label>
        <input
          type="password"
          placeholder="password"
          className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
          {...register("password", { required: true })}
        />
        <br />

        <input
          className="relative ring-2 px-4 mt-6 border rounded-md py-2 text-lg text-white bg-green-600 hover:bg-green-200"
          type="submit"
        />
      </form>
      <h1 className="mt-3">Or</h1>

      <button className="relative ring-2 px-4 mt-4 border rounded-md py-2 text-lg text-white bg-green-500 hover:bg-green-200">
        Login with Google
      </button>
      <br />
      <Link to="/signUp">
        <button className="mt-6">Don't have an account? SignUp Now!</button>
      </Link>
    </div>
  );
};

export default Login;
