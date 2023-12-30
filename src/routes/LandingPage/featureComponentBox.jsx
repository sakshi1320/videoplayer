export function FeaturesBox(Props) {
  return (
    <>
      <div className="a-box">
        <div className="a-b-img">
          <img src={Props.image} alt=""></img>
        </div>
        <div className="a-b-text">
          <h2>{Props.title}</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, reprehenderit.</p>
        </div>
      </div>
    </>
  );
}
