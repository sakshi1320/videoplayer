import * as Yup from "yup";
export const Signupschema = Yup.object({
  Email: Yup.string().email().required("Please enter your email").email(),
  Password: Yup.string().required("Please enter your password"),
  OTP: Yup.string().max(6, "min 6 only").min(6, "max 6 only"),
});
