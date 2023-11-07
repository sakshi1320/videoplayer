import { Header } from "./videoHeader";
import { Videoplayer } from "./videoplayer";

export function Newvideo() {
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
            <div>new video</div>
          </div>
        </div>
      </div>
    </>
  );
}
