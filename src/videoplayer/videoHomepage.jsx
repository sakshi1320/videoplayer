import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import { Videoplayer } from "./videoplayer";
// import { Header } from "./videoHeader";
import { Header } from "./videoHeaderNew";
import { notification } from "antd";
import { NetworkWifi1Bar } from "@mui/icons-material";
import { Shimmer } from "./shimmer";

export function Homepage() {
  // const [video, setvideo] = useState([]);
  // const [video, setvideo] = useState([]);
  // const [video, setvideo] = useState([]);
  // const [video, setvideo] = useState([]);
  const [state, setState] = useReducer(
    (newState, newSetState) => ({ ...newState, ...newSetState }),
    {
      video: [],
      searchedName: "",
      _videoList: [],
      // isFirst: false,
    }
  );
  // useEffect(async () => {
  // getVideos();
  useEffect(() => {
    // const newFilterVideo = state.video.filter((items) => {
    //   console.log("RRRRR items", items.title);
    //   console.log("RRRRR  state.searchedName", state.searchedName);
    //   return items.title === state.searchedName;
    // });
    // setState({ video: newFilterVideo });
    // console.log("RRRRRR newFilterVideo", newFilterVideo);
  }, [state.searchedName]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("http://127.0.0.1:5500/allvideo");
        // console.log(
        //   "check category",
        //   result.data.map((items) => console.log("items",items.category))
        // );
        // Assuming you want to check for a successful response
        if (result) {
          // console.log(isFirst, "sakshi");
          setState({ video: result.data, _videoList: result.data });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        notification.error({ message: "Error fetching data" });
      }
    };
    // }
    fetchData();
  }, []);
  // useEffect(() => {
  //   if (state.isFirst) {
  //     notification.success({ message: "Login successfully done" });
  //   }
  // }, [state.isFirst]);
  const getVideos = async () => {
    try {
      const result = await axios({ method: "get", url: "http://127.0.0.1:5500/allvideo" });
      if (result) notification.success({ message: "Login successfully done" });
    } catch (err) {
      // console.log("rrr", err);
    }
  };
  // useEffect(() => {
  //   axios({ method: "get", url: "http://127.0.0.1:5500/allvideo" }).then((res) => {
  //     // console.log("rrr", res);
  //     setState({ video: res.data });
  //   });
  // }, []);
  // useEffect(() => {
  //   notification.success({
  //     message: "login success",
  //   });
  // }, [state?.video]);
  if (state.video.length === 0) {
    return <Shimmer />;
  }
  return (
    <>
      <div className="container-fluid">
        <div className="row sticky-top" style={{ overflow: "hidden" }}>
          <div className="col-12 ">
            <Header setState={setState} state={state} />
          </div>
        </div>
        <div className="row">
          <div
            className="col-2 h-100"
            style={{ borderRight: "1px solid gray", position: "sticky", top: "70px" }}
          >
            <Videoplayer />
          </div>
          <div className="col-10 h-100 mb-2">
            <div>
              <div>
                <div className="d-flex justify-content-between align-items-center flex-wrap">
                  {state?.video?.map((vid) => (
                    <div>
                      <div className="videobox">
                        {/* <div> */}
                        <iframe key={vid.id} src={vid.url} title=""></iframe>
                        {/* </div> */}
                      </div>
                      <div className="vidtitle">
                        <h6 key={vid.id}>{vid.title}</h6>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
