import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signinSchema, SigninForm } from "../models";
import { signin } from "../api/auth";

function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninForm>({
    resolver: yupResolver(signinSchema),
  });

  const onSubmit = async (data: SigninForm) => {
    try {
      const response = await signin(data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-gray-200 p-4 max-w-md rounded-md shadow-md m-auto my-[30px]">
      <p className="text-lg font-semibold text-center text-gray-900 mb-4">
        Sign in to your account
      </p>
      <div className="relative mb-4">
        <label>Email</label>
        <span className="text-[12px] text-red-500">
          {errors.email && errors.email.message}
        </span>
        <input
          {...register("email")}
          placeholder="Enter email"
          className="block w-full border border-gray-300 rounded-md py-2 px-4 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />
      </div>
      <div className="relative mb-4">
        <label>Password</label>
        <span className="text-[12px] text-red-500">
          {errors.password && errors.password.message}
        </span>
        <input
          type="password"
          {...register("password")}
          placeholder="Enter password"
          className="block w-full border border-gray-300 rounded-md py-2 px-4 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />
      </div>
      <button
        type="submit"
        className="block w-full bg-indigo-600 text-white py-2 px-4 rounded-md text-sm font-medium uppercase tracking-wide">
        Sign in
      </button>
      <p className="text-sm text-center text-gray-600 mt-4">
        No account?
        <Link to={"/signup"}>Sign up</Link>
      </p>
    </form>
  );
}

export default Signin;
