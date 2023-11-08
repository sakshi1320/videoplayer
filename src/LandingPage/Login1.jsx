import { useFormik } from "formik";
import { Signupschema } from "../schema/loginschema";
import axios from "axios";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import "./signin.css";
import { Modal, message, notification, Form, Input, Button } from "antd";
import useModal from "antd/es/modal/useModal";
import { useState } from "react";

export function Login() {
  const [cookies, setcookies, removecookies] = useCookies();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [form2] = Form.useForm();
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
  // const { values, errors, handleChange, handleSubmit, handleBlur, touched } = useFormik({
  //   initialValues,
  //   validationSchema: Signupschema,
  //   onSubmit: (values, action) => {
  //     axios({
  //       method: "get",
  //       url: "http://127.0.0.1:5000/login",
  //     }).then((res) => {
  //       for (var user of res.data) {
  //         // console.log(user);
  //         if (user.Email == values.Email && user.Password == values.Password) {
  //           setModalOpen(true);
  //           setcookies("logindata", user);
  //           break;
  //         } else {
  //           notification.error({ message: "Please eanter valide credentials." });
  //           action.resetForm();
  //           // break;
  //           // navigate("/signup");
  //         }
  //       }
  //     });
  //   },
  // });
  const SubmitHandler = (values) => {
    console.log("RRRRRR values", values);
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
          // action.resetForm();
          form.resetFields();
          // break;
          // navigate("/signup");
        }
      }
    });
  };
  return (
    <>
      <div
        className="container-fluid d-flex justify-content-center align-items-center"
        style={{ height: "100vh", background: "black" }}
      >
        <div className="signin-box">
          <Form form={form} onFinish={SubmitHandler}>
            <Form.Item name="Email" rules={[{ required: true, message: "Email is required" }]}>
              <Input placeholder="Email enter" />
            </Form.Item>
            <Form.Item
              name="Password"
              rules={[{ required: true, message: "Password is required" }]}
            >
              <Input.Password placeholder="Password enter" />
            </Form.Item>
            <button type="submit" className="btn btn-outline-danger">
              Sign In
            </button>
          </Form>
        </div>
      </div>
      {/* <Modal title="Enter OTP" open={modalOpen} onOk={handleOk} onCancel={handleCancel}> */}
      <Form form={form2}>
        <Form.Item
          name="OTP"
          rules={[
            { required: true, message: "OTP is required" },
            { min: 6, max: 6, message: "OTP is only 6 digit" },
          ]}
        >
          <Input />
        </Form.Item>
        <Button type="submit">Modal Submit</Button>
      </Form>
      {/* </Modal> */}
    </>
  );
}
