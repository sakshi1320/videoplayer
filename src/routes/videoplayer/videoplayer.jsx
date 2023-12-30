import { Link } from "react-router-dom";
// import { Header } from "./videoHeader";
import { Header } from "./videoHeaderNew";
// import { Login } from "../LandingPage/login";
import "../videoplayer/videoplayer.css";

export function Videoplayer() {
  return (
    <>
      <div className="container-fluid" style={{ height: "500px" }}>
        <div className="row">
          <div className="col-md-3 col-sm-12">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="menudiv">
                <Link to="/home">
                  <button>
                    <span className="bi bi-house-door-fill  me-4"></span>Home
                  </button>
                </Link>
              </div>
              <div className="menudiv">
                <Link to="/category">
                  <button>
                    <span className="bi bi-valentine  me-4"></span>Category
                  </button>

                  {/* <ul>
                    <li>food</li>
                    <li>education</li>
                    <li>music</li>
                  </ul> */}
                </Link>
              </div>
              <div className="menudiv">
                <Link to="/upload">
                  <button>
                    <span className="bi bi-cloud-plus-fill  me-4"></span>Create/Upload
                  </button>
                </Link>
              </div>
              <div className="menudiv">
                <Link to="/setting">
                  <button>
                    <span className="bi bi-gear-fill me-4"></span>Setting
                  </button>
                </Link>
              </div>
              <div className="menudiv">
                <Link to="/signup"></Link>
              </div>
              <div className="menudiv">
                <Link to="/login"></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
