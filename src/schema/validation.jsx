import * as Yup from "yup";
export const Signupschema = Yup.object({
  FirstName: Yup.string().min(2).required("Enter your first name"),
  LastName: Yup.string().min(2).required("Enter your last name"),
  Email: Yup.string().email().required("Please enter your email").email(),
  Password: Yup.string().required("Please enter your password"),
});
