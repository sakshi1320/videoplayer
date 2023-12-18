import { Dropdown, Space, message } from "antd";
import "../videoplayer/videoplayer.css";
import Avatar from "antd/es/avatar/avatar";
import { UserOutlined, DownOutlined } from "@ant-design/icons";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Filterdata } from "./filterdata";
import axios from "axios";
export function Header(props) {
  const [cookies, setcookies, removecookies] = useCookies();
  const [data, setData] = useState([]);
  const [inputvalue, setinputvalue] = useState("");
  const items = [
    {
      label: (
        <Link to="/" style={{ textDecoration: "none" }}>
          Log Out
        </Link>
      ),
      key: 1,
    },
  ];
  useEffect(() => {
    axios({ method: "get", url: "http://127.0.0.1:5500/allvideo" }).then((res) => {
      setData(res.data);
      // console.log(res.data);
      // updatefilter();
    });
  }, []);
  // const updatefilter = () => {
  //   <Filterdata />;
  // };
  // updatefilter();
  const showfiltervalues = async (e) => {
    e.preventDefault();
    setinputvalue(e.target.value);
    console.log("inputvalue", inputvalue);
    let newFilterVideo = props.state.video.filter((items) => {
      console.log("RRRRR items", items.title);
      // console.log("RRRRR  state.searchedName", e.target.value);
      return items.title.toLowerCase() === e.target.value.toLowerCase();
    });
    props.setState({ video: newFilterVideo });
  };
  return (
    <>
      <div className="container-fluid header ">
        <div className="row">
          <div className="col-3">
            <div className="logo">
              <span className="bi bi-camera-video"></span>
              <h3>VideoPlayer</h3>
            </div>
          </div>
          <div className="col-6 d-flex justify-content-center align-items-center">
            <div>
              {/* className="searchbar" */}
              <input
                type="text"
                placeholder="Search Here"
                className="search"
                onChange={showfiltervalues}
                value={inputvalue}
                // onChange={(e) => {
                //   let newFilterVideo = props.state.video.filter((items) => {
                //     console.log("RRRRR items", items.title);
                //     console.log("RRRRR  state.searchedName", e.target.value);
                //     return items.title.toLowerCase() === e.target.value.toLowerCase();
                //   });
                //   props.setState({ video: newFilterVideo });
                // }}
              ></input>
              <button type="submit">search</button>
            </div>
          </div>
          <div className="col-3 d-flex justify-content-center align-items-center">
            <div className="accounperson">
              <Space size={40}>
                <Avatar
                  style={{
                    backgroundColor: "#87d068",
                  }}
                  icon={<UserOutlined />}
                ></Avatar>
              </Space>
            </div>
            <div>
              {cookies?.logindata?.FirstName.toUpperCase()}&nbsp;
              {cookies?.logindata?.LastName.toUpperCase()}&nbsp;
              <Dropdown menu={{ items }} trigger={["click"]}>
                <Space>
                  <DownOutlined />
                </Space>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
