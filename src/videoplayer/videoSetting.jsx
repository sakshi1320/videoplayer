import { Header } from "./videoHeader";
import { Videoplayer } from "./videoplayer";

export function Settings() {
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
            <div>in setting</div>
          </div>
        </div>
      </div>
    </>
  );
}
