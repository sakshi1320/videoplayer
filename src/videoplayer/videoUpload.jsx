import { Button, Form, Input, Upload, message, notification } from "antd";
import { Header } from "./videoHeader";
import { Videoplayer } from "./videoplayer";
import "./addvideo.css";
import { useForm } from "antd/es/form/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Newvideo() {
  let navigate = useNavigate();
  const [form] = Form.useForm();
  const SubmitHandler = (values) => {
    // console.log(values, "rrr");
    alert(JSON.stringify(values));
    axios({ method: "POST", url: "http://127.0.0.1:5500/addvideo", data: values }).then((res) => {
      // console.log(res);
      notification.success({ message: "video added." });
    });
    // .then(() => navigate("/home"));
  };
  return (
    <>
      <div>
        <div className="row">
          <div className="col-12">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <Videoplayer />
            <div style={{borderRight:"1px solid"}}></div>
          </div>
          <div className="col-8">
            <div>
              <div className="addvideo">
                <h6>Add new video easily</h6>
              </div>
              <div className="d-flex">
                {/* <div>
                  <Upload>
                    <Button>click to upload</Button>
                  </Upload>
                </div> */}
                <div>
                  <Form form={form} onFinish={SubmitHandler}>
                    <Form.Item name="Title" rules={[{ required: true }]}>
                      <Input placeholder="Please give title"></Input>
                    </Form.Item>
                    <Form.Item name="Url" rules={[{ required: true }]}>
                      <Input placeholder="Please give url"></Input>
                    </Form.Item>
                    <button type="submit" className="btn btn-outline-danger">
                      Add
                    </button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
