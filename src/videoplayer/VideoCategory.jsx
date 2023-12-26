// import { Header } from "./videoHeader";
import { Header } from "./videoHeaderNew";
import { Videoplayer } from "./videoplayer";

export function VideoCategory() {
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
          <div className="col-8">
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
