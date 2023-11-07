import { FacebookOutlined, Twitter } from "@mui/icons-material";
import { Button, ButtonGroup, TextField } from "@mui/material";
import { Signupschema } from "../schema/validation";
import { Form, Formik, useFormik } from "formik";
import axios from "axios";
const initialValues = {
  Email: "",
  Password: "",
};

export function Login() {
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
    initialValues,
    validationSchema: Signupschema,
    onSubmit: (values, action) => {
      alert("hhi");
      alert(JSON.stringify(values));
      axios({
        method: "GET",
        url: "http://127.0.0.1:5000/login",
      }).then((res) => {
        console.log("rrr", res);
        alert("login done");
      });
    },
  });
  function handleSubmits() {
    alert("hii");
  }
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center">
        <div>
          <div className="d-flex justify-content-center align-items-center ">
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
              <Button startIcon={<FacebookOutlined />} color="primary">
                Login with Facebook
              </Button>
              <Button startIcon={<Twitter />} color="success">
                Login with Twitter
              </Button>
            </ButtonGroup>
          </div>
          <div className="text-center">Or Login with</div>
          <form onSubmit={handleSubmit}>
            <div>
              <div className="mt-4">
                <TextField
                  id="outlined-basic"
                  label="Email"
                  name="Email"
                  variant="outlined"
                  size="small"
                  value={values.Email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  sx={{ width: "50ch" }}
                ></TextField>
                {errors.Email && touched.Email ? (
                  <p style={{ color: "red" }}>{errors.Email}</p>
                ) : null}
              </div>
              <div className="mt-4">
                <TextField
                  id="outlined-basic"
                  type="password"
                  label="Password"
                  name="Password"
                  variant="outlined"
                  size="small"
                  value={values.Password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  sx={{ width: "50ch" }}
                ></TextField>
                {errors.Password && touched.Password ? (
                  <p style={{ color: "red" }}>{errors.Password}</p>
                ) : null}
              </div>
              <div className="d-flex justify-content-center align-items-center m-4">
                <button
                  // variant="contained"
                  // color="success"
                  type="submit"
                  // sx={{ width: "30ch", backgroundColor: "orangered" }}
                >
                  Log In
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
