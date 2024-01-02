import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import "./LoginCompStyle.css";
import { Modal, notification, Form, Input, Button } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slicer/slicer";

export function Login() {
  const [cookies, setcookies, removecookies] = useCookies();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [form2] = Form.useForm();
  const [modalOpen, setModalOpen] = useState(false);
  const [Message, setMessage] = useState();
  const dispatch = useDispatch();
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
    // console.log("RRRRRR values", values);
    axios({
      method: "get",
      url: "http://127.0.0.1:5500/login",
    }).then((res) => {
      for (var user of res.data) {
        console.log(user);
        if (user.Email == values.Email && user.Password == values.Password) {
          setModalOpen(true);
          setcookies("logindata", user);
          dispatch(
            login({
              email: user.Email,
              password: user.Password,
            })
          );
          break;
        } else {
          form.setFields([
            { name: "Email", errors: ["invalid Email"] },
            { name: "Password", errors: ["invalid Password"] },
          ]);
        }
      }
    });
  };
  return (
    <>
      <div
        className="container-fluid d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="signin-box" style={{ width: "450px" }}>
          <Form form={form} onFinish={SubmitHandler}>
            <Form.Item
              name="Email"
              rules={[{ required: true, message: "Email is required" }]}
              style={{ width: "50ch" }}
            >
              <Input placeholder="Enter Email" />
            </Form.Item>
            <Form.Item
              name="Password"
              rules={[{ required: true, message: "Password is required" }]}
            >
              <Input.Password placeholder="Enter Password" />
            </Form.Item>
            <div className="d-flex justify-content-center align-items-center">
              <button
                type="submit"
                className="btn btn-success"
                style={{ width: "20ch", fontWeight: "400" }}
              >
                LOGIN
              </button>
            </div>
          </Form>
        </div>
      </div>
      <Modal
        title="Enter OTP"
        open={modalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        maskClosable={false}
      >
        <Form form={form2}>
          <Form.Item
            name="OTP"
            rules={[
              { required: true, message: "OTP is required" },
              { min: 6, max: 6, message: "OTP is only 6 digit" },
            ]}
          >
            <Input
              maxLength={6}
              placeholder="Enter OTP"
              onChange={(event) => setMessage(event.target.value)}
            />
          </Form.Item>
          <Button type="submit">Modal Submit</Button>
        </Form>
      </Modal>
    </>
  );
}
