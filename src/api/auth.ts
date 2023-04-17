import instance from ".";
import { SignupForm, SigninForm } from "../models";

export const signup = (data: SignupForm) => {
  return instance.post("users/signup", data);
};

export const signin = (data: SigninForm) => {
  const uri = "/users/signin";
  return instance.post(uri, data);
};
