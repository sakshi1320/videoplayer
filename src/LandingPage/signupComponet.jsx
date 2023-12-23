import { FacebookOutlined, Twitter } from "@mui/icons-material";
import { Button, ButtonGroup, TextField } from "@mui/material";
import { useFormik } from "formik";
import { Signupschema } from "../schema/validation";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Spin, notification } from "antd";
import { useDispatch } from "react-redux";
import { signup } from "../redux/slicer/slicer";
import Swal from "sweetalert2";

const initialValues = {
  FirstName: "",
  LastName: "",
  Email: "",
  Password: "",
  CnfPassword: "",
};

export function SignUp() {
  const [loader, setloader] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
    initialValues,
    validationSchema: Signupschema,
    onSubmit: (values, action) => {
      setloader(true);
      dispatch(
        signup({
          firstname: values.FirstName,
          lastname: values.LastName,
          email: values.Email,
          password: values.Password,
        })
      );
      // alert(JSON.stringify(values));
      axios({ method: "post", url: "http://127.0.0.1:5500/signupDetails", data: values }).then(
        (res) => {
          setloader(false);
          // alert("signup done");
          // notification.msg({ message: "Thank You For Signup." });
          Swal.fire({
            icon: "success",
            title: "Thank You For Signup.",
          });
          navigate("/login");
        }
      );
    },
  });

  return (
    <>
      <Spin spinning={loader} tip="loading" size="large">
        <div
          className="container-fluid d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <div style={{ color: "#808080" }}>
            <form onSubmit={handleSubmit}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  background: "white",
                  padding: "20px",
                  border: "2px solid ",
                  borderRadius: "10px",
                  width: "500px",
                  // maxHeight: "450px",
                  // overflowY: "auto",
                }}
              >
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
                <div className="mt-4">
                  <TextField
                    id="outlined-basic"
                    type="password"
                    label="Confirm-Password"
                    name="CnfPassword"
                    variant="outlined"
                    size="small"
                    value={values.CnfPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    sx={{ width: "50ch" }}
                  ></TextField>
                  {errors.CnfPassword && touched.CnfPassword ? (
                    <p style={{ color: "red" }}>{errors.CnfPassword}</p>
                  ) : null}
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <div className="ms-3 mt-4">
                    <Button
                      variant="contained"
                      color="success"
                      type="submit"
                      sx={{ width: "20ch" }}
                    >
                      SignUp
                    </Button>
                  </div>
                </div>
                <p style={{ marginTop: "10px" }}>
                  Already have an account <Link to="/login">LogIn</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </Spin>
    </>
  );
}
