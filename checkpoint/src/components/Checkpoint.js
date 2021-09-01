import React from "react";
import img from "../image/im.png";
import video from "../video.mp4";
import "./Checkpoint.css";

const Checkpoint = () => {
  return (
    <div>
      <div
        className="App"
        style={{ border: "solid 1px black", maxWidth: "100vw" }}
      >
        <h1 className={"title red"}>NIKON</h1>
        <br />
        <div className="imgs">
          <img alt="" src={img} />
          <br />
          <img alt="" src="im.png" />
        </div>
      </div>
      <div className="vid">
        <video width={320} height={240} controls>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Checkpoint;
