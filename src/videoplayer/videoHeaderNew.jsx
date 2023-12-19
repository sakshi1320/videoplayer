import { Dropdown, Space, message } from "antd";
import "../videoplayer/videoplayer.css";
import Avatar from "antd/es/avatar/avatar";
import { UserOutlined, DownOutlined } from "@ant-design/icons";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
export function Header(props) {
  // console.log("props values", props);
  const [cookies] = useCookies();
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

  const submithandler = (e) => {
    e.preventDefault();
    if (e.target.value) {
      console.log("e.target.value", e.target.value);
      var newFilterVideo = props.state.video.filter((items) => {
        //   console.log("RRRRR items", items.title);
        // return e.target.value.toLowerCase() === items.title.toLowerCase();
        return items.title.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
      });
      // console.log("newfiltervideo values", newFilterVideo);
      props.setState({ video: newFilterVideo });
    } else {
      props.setState({
        video: props.state._videoList.map((items) => {
          // console.log("items", items);
          return items;
        }),
      });
    }
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
              <form>
                <input
                  type="text"
                  placeholder="Search Here"
                  className="search"
                  onChange={submithandler}
                ></input>
                {/* <button className="bi bi-search" type="submit"></button> */}
              </form>
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
