import { useNavigate } from "react-router-dom";
export function MainPage() {
  const navigate = useNavigate();
  return (
    <>
      <>
        <div className="mt-1" style={{ height: "3px", background: "white" }}></div>
        <div>
          <div className="mt-1" id="background">
            <div id="main" className="d-flex justify-content-center align-items-center">
              <div>
                <div className="header-heading">
                  <h2>PLAY UNLIMITED VIDEO</h2>
                  <p className="details">Watch Your Favourite Songs,Movies And Many More.... </p>
                  <p>Just sign up with your Email</p>
                  <div className="header-btns">
                    <span onClick={() => navigate("/signup")} className="header-btn">
                      GET STARTED
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
