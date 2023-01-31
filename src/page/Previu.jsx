import React from "react";
import "../styles/Previu.css";
import Camera from "../img/step.png";
function Previu() {
  return (
    <div className="previu">
      <div>
        <img className="camera" src={Camera} alt="" />
      </div>
      <div className="text">
      Leave a trail behind you
      </div>
      <div className="time">
      14d:20h:15m
      </div>
      <div  className="ll"></div>
    </div>
  );
}

export default Previu;
