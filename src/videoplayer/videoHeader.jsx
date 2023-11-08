import { Space } from "antd";
import "../videoplayer/videoplayer.css";
import Avatar from "antd/es/avatar/avatar";
import { UserOutlined } from "@ant-design/icons";
export function Header() {
  return (
    <>
      <div className="container-fluid mt-2 mb-2 header ">
        <div className="row">
          <div className="col-3 d-flex">
            <div className="logo">
              <div>VideoPlayer</div>
            </div>
          </div>
          <div className="col-6">
            <div className="searchbar ms-5">
              <input
                placeholder="Search"
                style={{ border: "none", cursor: "pointer", background: "transparent" }}
                className="ms-3 mt-1"
              ></input>
            </div>
          </div>
          <div className="col-3 d-flex">
            <div className="accountName mt-2">
              <Space size={30}>
                <Avatar
                  style={{
                    backgroundColor: "#87d068",
                  }}
                  icon={<UserOutlined />}
                ></Avatar>
              </Space>
            </div>
            <div>
              
            </div>
          </div>
         
        </div>
      </div>
      <hr></hr>
    </>
  );
}
