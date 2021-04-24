import React from "react";
import cantFind from "../image/cant_find.jpg";

export default function Movies(props) {
  const { movie } = props;
  const apiImageAddress = "http://image.tmdb.org/t/p/original/";
  return (
    <div className="moviesBox">
      <div className="card">
        <h1>
          {movie.original_title.length > 6
            ? movie.original_title.slice(0, 6) + "..."
            : movie.original_title}
        </h1>
        <br />
        {movie.poster_path === null ? (
          <img src={cantFind} alt="can't find" />
        ) : (
          <img src={apiImageAddress + movie.poster_path} alt={movie.name} />
        )}
      </div>
    </div>
  );
}
