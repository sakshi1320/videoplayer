import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "./LandingPage/routeLP";
import { Videoplayer } from "./videoplayer/videoplayer";
import { Homepage } from "./videoplayer/videoHomepage";
import { VideoCategory } from "./videoplayer/VideoCategory";
import { Newvideo } from "./videoplayer/videoUpload";
import { Settings } from "./videoplayer/videoSetting";
// import { Login } from "./LandingPage/login";
import { Login } from "./LandingPage/LoginComponent";
import { SignUp } from "./LandingPage/signupComponet";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          {/* <Videoplayer /> */}
          {/* <Route path="/" element={<LandingPage />}></Route> */}
          <Route path="/home" element={<Homepage />}></Route>
          <Route path="/category" element={<VideoCategory />}></Route>
          <Route path="/upload" element={<Newvideo />}></Route>
          <Route path="/setting" element={<Settings />}></Route>
          {/* <Route path="/login" element={<Login />}></Route> */}
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>{" "}
      </BrowserRouter>
    </>
  );
}

export default App;
