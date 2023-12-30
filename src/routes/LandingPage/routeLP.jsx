import { About } from "./aboutComponent";
import { Contact } from "./contactComponent";
import { Feature } from "./featureComponent";
import { MainPage } from "./mainPageBody";
import { Navbar } from "./headerBar";
import "../LandingPage/landingPage.css";

export function LandingPage() {
  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "black" }}>
        <div className="row">
          <div className="col-md-12 ">
            <Navbar />
            <MainPage />
            <Feature />
            <About />
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
}
