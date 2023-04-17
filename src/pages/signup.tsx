import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema, SignupForm } from "../models";
import { signup } from "../api/auth";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupForm>({
    resolver: yupResolver(signupSchema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data: SignupForm) => {
    try {
      const { confirmPassword, ...rest } = data;
      const response = await signup(rest);
      navigate("/signin");
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-gray-200 p-4 max-w-md rounded-md shadow-md m-auto my-[30px]">
      <p className="text-lg font-semibold text-center text-gray-900 mb-4">
        Sign up a new account
      </p>
      <div className="relative mb-4">
        <label>Fullname</label>
        <span className="text-[12px] text-red-500">
          {errors.fullname && errors.fullname.message}
        </span>
        <input
          {...register("fullname")}
          placeholder="Enter fullname"
          className="block w-full border border-gray-300 rounded-md py-2 px-4 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />
      </div>
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
      <div className="relative mb-4">
        <label>Confirm Password</label>
        <span className="text-[12px] text-red-500">
          {errors.confirmPassword && errors.confirmPassword.message}
        </span>
        <input
          type="password"
          {...register("confirmPassword")}
          placeholder="Enter confirm password"
          className="block w-full border border-gray-300 rounded-md py-2 px-4 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />
      </div>
      <button
        type="submit"
        className="block w-full bg-indigo-600 text-white py-2 px-4 rounded-md text-sm font-medium uppercase tracking-wide">
        Sign up
      </button>
      <p className="text-sm text-center text-gray-600 mt-4">
        You had an account?
        <Link to={"/signin"}>Sign in</Link>
      </p>
    </form>
  );
}

export default Signup;
