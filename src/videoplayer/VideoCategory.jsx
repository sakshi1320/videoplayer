// import { Header } from "./videoHeader";
import { useEffect, useState } from "react";
import { Header } from "./videoHeaderNew";
import { Videoplayer } from "./videoplayer";
import axios from "axios";

export function VideoCategory() {
  let [category, setcategory] = useState([]);
  let [filterscategoryfood, setfilterscategoryfood] = useState([]);
  let [filterscategoryedu, setfilterscategoryedu] = useState([]);
  let [filterscategorymusic, setfilterscategorymusic] = useState([]);
  let [filterscategorymovie, setfilterscategorymovie] = useState([]);
  useEffect(() => {
    axios({ method: "get", url: "http://127.0.0.1:5500/allvideo" }).then((res) => {
      // console.log(
      //   "res",
      //   res.data.filter((i) => {
      //     // console.log("i", i);
      //     if (i.category == "food") {
      //       console.log("i",i)
      //       // setfilterscategory(i)
      //     }
      //   })
      // );
      let FoodList = res.data.filter((i) => {
        return i.category == "food";
      });
      setfilterscategoryfood(FoodList);
      let educationList = res.data.filter((i) => {
        return i.category == "education";
      });
      setfilterscategoryedu(educationList);
      let MusicList = res.data.filter((i) => {
        return i.category == "music";
      });
      setfilterscategorymovie(MusicList);
      let movieList = res.data.filter((i) => {
        return i.category == "movie";
      });
      setfilterscategorymusic(movieList);
      // let data = res.data.filter((i) => {
      //   return i.category == "food";
      // });
      // setfilterscategory(data);
    });
  }, []);

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
            <h4 className="categoryTitle">Food Video List</h4>
            <div className="d-flex justify-content-between align-items-center flex-wrap">
              {filterscategoryfood?.map((vid) => (
                <div>
                  <div className="videobox">
                    <iframe key={vid.id} src={vid?.url} title=""></iframe>
                  </div>
                  <div className="vidtitle">
                    <h6 key={vid.id}>{vid.title}</h6>
                  </div>
                </div>
              ))}
            </div>
            <h4 className="categoryTitle">Food Video List</h4>
            <div className="categoryDiv d-flex justify-content-between align-items-center flex-wrap">
              {filterscategoryedu?.map((vid) => (
                <div>
                  <div className="videobox">
                    <iframe key={vid.id} src={vid?.url} title=""></iframe>
                  </div>
                  <div className="vidtitle">
                    <h6 key={vid.id}>{vid.title}</h6>
                  </div>
                </div>
              ))}
            </div>
            <h4 className="categoryTitle">Food Video List</h4>
            <div className="categoryDiv d-flex justify-content-between align-items-center flex-wrap">
              {filterscategorymovie?.map((vid) => (
                <div>
                  <div className="videobox">
                    <iframe key={vid.id} src={vid?.url} title=""></iframe>
                  </div>
                  <div className="vidtitle">
                    <h6 key={vid.id}>{vid.title}</h6>
                  </div>
                </div>
              ))}
            </div>
            <h4 className="categoryTitle">Food Video List</h4>
            <div className="categoryDiv d-flex justify-content-between align-items-center flex-wrap">
              {filterscategorymusic?.map((vid) => (
                <div>
                  <div className="videobox">
                    <iframe key={vid.id} src={vid?.url} title=""></iframe>
                  </div>
                  <div className="vidtitle">
                    <h6 key={vid.id}>{vid.title}</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
