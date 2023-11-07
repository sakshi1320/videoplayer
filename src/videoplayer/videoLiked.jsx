import { Header } from "./videoHeader";
import { Videoplayer } from "./videoplayer";

export function LikedVideo() {
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
            <div>in liked video</div>
          </div>
        </div>
      </div>
    </>
  );
}
