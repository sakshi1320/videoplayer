import { Carousel } from "antd";
import corosel1 from "../../images/corosel1.png";
import corosel2 from "../../images/corosel2.png";
import corosel3 from "../../images/corosel3.png";
import corosel4 from "../../images/corosel4.png";
export function About() {
  return (
    <>
      <div className="mt-1" style={{ height: "10px", background: "white" }}></div>
      <div className="about-title">
        <h1>ABOUT</h1>
      </div>
      <div id="about">
        <div className="row">
          <div className="col-6">
            <div style={{ width: "500px" }}>
              <Carousel autoplay>
                <div>
                  <img style={{ width: "400px", height: "250px" }} src={corosel1}></img>
                </div>
                <div>
                  <img style={{ width: "400px", height: "250px" }} src={corosel2}></img>
                </div>
                <div>
                  <img style={{ width: "400px", height: "250px" }} src={corosel3}></img>
                </div>
                <div>
                  <img style={{ width: "400px", height: "250px" }} src={corosel4}></img>
                </div>
              </Carousel>
            </div>
          </div>
          <div className="col-6 d-flex justify-content-between align-items-center">
            <div className="about-text">
              <h1>Watch on your TV</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, sunt?</p>
              <div>
                <button>START WATCHING</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
