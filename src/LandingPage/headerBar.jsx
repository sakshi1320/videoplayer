import { useNavigate } from "react-router-dom";
import logoo from "../images/newlogo.png";
import { Link } from "react-scroll";
export function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="container-fluid "
        style={{
          // color: "#242122",
          color: "white",
          backgroundColor: "black",
          fontWeight: 500,
          fontSize: "20px",
          height: "70px",
        }}
      >
        <nav>
          <div className="logo">
            <img src={logoo}></img>
          </div>
          <div>
            <ul className="menu">
              <li>
                <Link to="features">Features</Link>
              </li>
              <li>
                <Link to="about">About</Link>
              </li>
              <li>
                <Link to="contact">Contact</Link>
              </li>
              <li>
                <Link to="/login">
                  <button
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    SignIn
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
