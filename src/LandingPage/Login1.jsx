import { useFormik } from "formik";
import { Signupschema } from "../schema/loginschema";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const initialValues = {
  Email: "",
  Password: "",
};

export function Login() {
  const [cookies, setcookies, removecookies] = useCookies();
  const navigate = useNavigate();
  const { values, errors, handleChange, handleSubmit, handleBlur, touched } = useFormik({
    initialValues,
    validationSchema: Signupschema,
    onSubmit: (values, action) => {
      // alert("hii");
      // console.log(values);
      // alert(JSON.stringify(values));
      axios({
        method: "get",
        url: "http://127.0.0.1:5000/login",
      }).then((res) => {
        // console.log("rrr", res.data);
        for (var user of res.data) {
          // console.log(user);
          if (user.Email == values.Email || user.Password == values.Password) {
            setcookies("logindata", user);
            // swal("to continues click ok").then((values) => {
            //   swal(`you choose to login ${values} `);
            //   navigate("/home");
            // });
            navigate("/home");
            break;
          } else {
            navigate("/signup");
          }
        }
      });
    },
  });
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="Email" className="input-lable">
              User Name :
            </label>
            <input
              type="email"
              name="Email"
              id="Email"
              placeholder="Email ID"
              value={values.Email}
              onChange={handleChange}
              // onBlur={handleBlur}
            ></input>
            {errors.Email && touched.Email ? <p>{errors.Email}</p> : null}
          </div>
          <div>
            <label htmlFor="Password">Password:</label>
            <input
              type="password"
              name="Password"
              id="Password"
              placeholder="Password"
              value={values.Password}
              onChange={handleChange}
              // onBlur={handleBlur}
            ></input>
            {errors.Password && touched.Password ? <p>{errors.Password}</p> : null}
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </>
  );
}
