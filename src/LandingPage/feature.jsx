import { FeaturesBox } from "./featurebox";
import feature1 from "../images/feature1.jpg";
import feature2 from "../images/feature2.png";
import feature3 from "../images/feature3.png";
import feature4 from "../images/feature4.png";
  
export function Feature() {
  return (
    <>
      <div className="mt-1" style={{ height: "10px", background: "white" }}></div>
      <div id="features">
        <h1>FEATURES</h1>
        <div className="container d-flex justify-content-center align-items-center ">
          <FeaturesBox image={feature1} title="Demo" />
          <FeaturesBox image={feature2} title="Demo" />
          <FeaturesBox image={feature3} title="Demo" />
          <FeaturesBox image={feature4} title="Demo" />
        </div>
      </div>
    </>
  );
}
