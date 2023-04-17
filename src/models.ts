import * as Yup from "yup";

export interface IProduct {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: number;
  origin: string;
}

export const signupSchema = Yup.object({
  fullname: Yup.string().required("( Không được bỏ trống )"),
  email: Yup.string()
    .email("( Không đúng định dạng )")
    .required("( Không được bỏ trống )"),
  password: Yup.string()
    .min(6, "( Tối thiểu 6 ký tự )")
    .required("( Không được bỏ trống )"),
  confirmPassword: Yup.string()
    .min(6, "( Tối thiểu 6 ký tự )")
    .oneOf([Yup.ref("password")], "( Mật khẩu không trùng khớp )"),
});

export type SignupForm = Yup.InferType<typeof signupSchema>;

export const signinSchema = Yup.object({
  email: Yup.string()
    .email("( Không đúng định dạng )")
    .required("( Không được bỏ trống )"),
  password: Yup.string()
    .min(6, "( Tối thiểu 6 ký tự )")
    .required("( Không được bỏ trống )"),
});

export type SigninForm = Yup.InferType<typeof signinSchema>;
