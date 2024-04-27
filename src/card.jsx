import React from "react";
import star_icon from "./assets/star.svg";
import "./card.css";

function Card({ movie }) {
  return (
    <div className="card">
      <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} />
      <p className="card-title">{movie.title}</p>
      <div className="d-flex">
        <img className="icon" src={star_icon} />
        <p className="white-color"> {movie.vote_average}</p>
      </div>
    </div>
  );
}

export default Card;
