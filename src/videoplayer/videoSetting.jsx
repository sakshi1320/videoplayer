// import { Header } from "./videoHeader";
import { Link } from "react-router-dom";
import { Header } from "./videoHeaderNew";
import { Videoplayer } from "./videoplayer";

export function Settings() {
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
          </div>
          <div className="col-10">
            <div>
              <div>
                <Link to="/">
                  <button className="logout-btn">Log Out</button>
                </Link>
              </div>
              <div>
                <Link to="/editprofile">
                  {/* <button className="edit-btn">Edit Profile</button> */}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
