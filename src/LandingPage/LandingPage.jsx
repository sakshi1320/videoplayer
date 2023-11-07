import { About } from "./about";
import { Contact } from "./contact";
import { Feature } from "./feature";
import { Header } from "./header";
import { Navbar } from "./navbar";
// import "../LandingPage/css.css"
import "../LandingPage/index.css";

export function LandingPage() {
  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "black" }}>
        <div className="row">
          <div className="col-md-12 ">
            <Navbar />
            <Header />
            <Feature />
            <About />
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
}
