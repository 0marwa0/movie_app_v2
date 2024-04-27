import React from "react";
import "./card.css";
function BlurCard({ imgSrc }) {
  return (
    <div className="card">
      <img src={imgSrc} />
      <div className="blur-effect">
        <p>Title name</p>
        <div>33.8</div>
      </div>
    </div>
  );
}

export default BlurCard;
