import { FacebookOutlined, Twitter } from "@mui/icons-material";
import { Button, ButtonGroup, TextField } from "@mui/material";
import { useFormik } from "formik";
import { Signupschema } from "../schema/validation";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Spin } from "antd";

const initialValues = {
  FirstName: "",
  LastName: "",
  Email: "",
  Password: "",
};

export function SignUp() {
  const [loader, setloader] = useState(false);
  const navigate = useNavigate();
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
    initialValues,
    validationSchema: Signupschema,
    onSubmit: (values, action) => {
      setloader(true);
      // alert(JSON.stringify(values));
      axios({ method: "post", url: "http://127.0.0.1:5000/signupDetails", data: values }).then(
        (res) => {
          setloader(false);
          // alert("signup done");

          navigate("/login");
        }
      );
    },
  });

  return (
    <>
      <Spin spinning={loader} tip="loading" size="large">
        <div className="containe d-flex justify-content-center align-items-center">
          <div>
            <div className="d-flex justify-content-center align-items-center mt-4 ">
              <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button startIcon={<FacebookOutlined />} color="primary">
                  Connect with Facebook
                </Button>
                <Button startIcon={<Twitter />} color="success">
                  Connect with Twitter
                </Button>
              </ButtonGroup>
            </div>
            <div className="d-flex justify-content-center align-items-center mt-4">
              <Button
                variant="contained"
                onClick={() => {
                  navigate("/login");
                }}
                sx={{ width: "30ch", backgroundColor: "red" }}
              >
                Login
              </Button>
            </div>
            <div className="text-center">Or Sign Up with</div>
            <form onSubmit={handleSubmit}>
              <div>
                <div className="mt-4">
                  <TextField
                    id="outlined-basic"
                    label="First Name"
                    name="FirstName"
                    variant="outlined"
                    size="small"
                    value={values.FirstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    sx={{ width: "50ch" }}
                  ></TextField>
                  {errors.FirstName && touched.FirstName ? (
                    <p style={{ color: "red" }}>{errors.FirstName}</p>
                  ) : null}
                </div>
                <div className="mt-4">
                  <TextField
                    id="outlined-basic"
                    label="Last Name"
                    name="LastName"
                    variant="outlined"
                    size="small"
                    value={values.LastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    sx={{ width: "50ch" }}
                  ></TextField>
                  {errors.LastName && touched.LastName ? (
                    <p style={{ color: "red" }}>{errors.LastName}</p>
                  ) : null}
                </div>

                <div className="d-flex justify-content-center align-items-center">
                  {/* <FormControl>
              <FormLabel>Gender</FormLabel>
              <RadioGroup row>
                <FormControlLabel value="male" control={<Radio />} label="male"></FormControlLabel>
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="female"
                ></FormControlLabel>
              </RadioGroup>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }} variant="standard">
              <InputLabel>Age</InputLabel>
              <Select>
                <MenuItem value={10}>18</MenuItem>
                <MenuItem value={20}>above 18</MenuItem>
              </Select>
            </FormControl> */}
                </div>
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
                <div className="d-flex justify-content-center align-items-center mt-4">
                  <Button variant="contained" color="success" type="submit" sx={{ width: "30ch" }}>
                    Create Account
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Spin>
    </>
  );
}
