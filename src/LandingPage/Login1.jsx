import { useFormik } from "formik";
import { Signupschema } from "../schema/loginschema";
import axios from "axios";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import "./signin.css";
import { Modal, message, notification } from "antd";
import useModal from "antd/es/modal/useModal";
import { useState } from "react";

const initialValues = {
  Email: "",
  Password: "",
  OTP: "",
};

export function Login() {
  const [cookies, setcookies, removecookies] = useCookies();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [Message, setMessage] = useState();
  const handleOk = () => {
    console.log(Message, "rrr");
    if (Message == 784546) {
      setModalOpen(false);
      navigate("/home");
    } else {
      notification.error({ message: "Please enter valid OTP" });
    }
  };
  const handleCancel = () => {
    setModalOpen(false);
  };
  const { values, errors, handleChange, handleSubmit, handleBlur, touched } = useFormik({
    initialValues,
    validationSchema: Signupschema,
    onSubmit: (values, action) => {
      axios({
        method: "get",
        url: "http://127.0.0.1:5000/login",
      }).then((res) => {
        for (var user of res.data) {
          // console.log(user);
          if (user.Email == values.Email && user.Password == values.Password) {
            setModalOpen(true);
            setcookies("logindata", user);
            break;
          } else {
            notification.error({ message: "Please eanter valide credentials." });
            action.resetForm();
            // break;
            // navigate("/signup");
          }
        }
      });
    },
  });
  return (
    <>
      <div
        className="container-fluid d-flex justify-content-center align-items-center"
        style={{ height: "100vh", background: "black" }}
      >
        <div className="signin-box">
          <form onSubmit={handleSubmit}>
            <div className="lable">
              <label htmlFor="Email" className="input-lable">
                User Name :
              </label>
              <br />
              <input
                className="input-box"
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
            <div className="lable">
              <label htmlFor="Password">Password:</label>
              <br />
              <input
                className="input-box"
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
            <div className="btn d-flex justify-content-center align-items-center">
              <button type="submit">Login</button>
              <Modal title="Enter OTP" open={modalOpen} onOk={handleOk} onCancel={handleCancel}>
                <input
                  name="OTP"
                  value={values.OTP}
                  // onKeyUp={(event) => setMessage(event.target.value)}
                  onChange={handleChange}
                />
                {errors.OTP && touched.OTP ? <p>{errors.OTP}</p> : null}

                {/* <input onChange={handleChange}></input> */}
              </Modal>
            </div>
            <p className="signup-link">
              You can also <Link to="/signup">sign up</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
