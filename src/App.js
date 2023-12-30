import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "./routes/LandingPage/routeLP";
// import { Videoplayer } from "./routes/videoplayer/videoplayer";
import { Homepage } from "./routes/videoplayer/videoHomepage";
import { VideoCategory } from "./routes/videoplayer/VideoCategory";
import { Newvideo } from "./routes/videoplayer/videoUpload";
import { Settings } from "./routes/videoplayer/videoSetting";
import { Login } from "./routes/LandingPage/LoginComponent";
import { SignUp } from "./routes/LandingPage/signupComponet";
import { EditProfileForm } from "./routes/videoplayer/EditProfileForm";
import { NotFound } from "./routes/videoplayer/NotFound ";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/home" element={<Homepage />}></Route>
          <Route path="/category" element={<VideoCategory />}></Route>
          <Route path="/upload" element={<Newvideo />}></Route>
          <Route path="/setting" element={<Settings />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/editprofile" element={<EditProfileForm />}></Route>
        </Routes>{" "}
      </BrowserRouter>
    </>
  );
}

export default App;
