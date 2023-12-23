import * as Yup from "yup";
export const Signupschema = Yup.object({
  FirstName: Yup.string().min(3).required("Enter your first name"),
  LastName: Yup.string().min(2).required("Enter your last name"),
  Email: Yup.string()
    .email()
    .required("Please enter your email")
    .matches(
      /^[(?a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
      "Please enter a valid email address in the following format: example@example.com. The email address should start with alphanumeric characters, plus (+), underscore (_), dot (.), or hyphen (-), followed by the @ symbol, and then a domain with alphanumeric characters, dot (.), or hyphen (-). For example, user@example.com. Thank you!"
    ),
  Password: Yup.string()
    .required("Please enter your password")
    .matches(
      /^(?=.*[A-Z])(?=.*[@#$!])[A-Za-z0-9@#$!]+$/,
      "Password should be alphanumeric value with one upper case and have atleast one special character(@#$!)"
    ),
  CnfPassword: Yup.string()
    .required("Please enter your password")
    .oneOf([Yup.ref("Password"), null], "password must match"),
});
