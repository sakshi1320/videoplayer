import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import { Videoplayer } from "./videoplayer";
import { Header } from "./videoHeader";

export function Homepage() {
  // const [video, setvideo] = useState([]);
  // const [video, setvideo] = useState([]);
  // const [video, setvideo] = useState([]);
  // const [video, setvideo] = useState([]);
  const [state, setState] = useReducer(
    (newState, newSetState) => ({ ...newState, ...newSetState }),
    {
      video: [],
    }
  );
  useEffect(() => {
    axios({ method: "get", url: "http://127.0.0.1:5000/allvideo" }).then((res) => {
      // console.log("rrr", res);
      // setvideo(res.data);
      setState({ video: res.data });
    });
  }, []);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-2" style={{ borderRight: "1px solid gray" }}>
            <Videoplayer />
          </div>
          <div className="col-10 bg-warning">
            <div>
              <div>
                <div className="d-flex justify-content-between align-items-center flex-wrap bg-primary" >
                  {state?.video?.map((vid) => (
                    <div>
                      <div className="videobox">
                        {/* <div> */}
                          <iframe
                            src={vid.url}
                            title=""
                            style={{ width: "300px", height: "300px", borderRadius: "10px" }}
                          ></iframe>
                        {/* </div> */}
                      </div>
                      <div>
                        <h6>{vid.title}</h6>
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
