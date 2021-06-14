import React from "react";

export default function Movies(props) {
  const { movie } = props;
  const apiImageAddress = "http://image.tmdb.org/t/p/";
  return (
    <>
      {(movie.original_language === "en" || movie.original_language === "ko") &&
        movie.poster_path && (
          <>
            <div className="moviesBox">
              <div className="card">
                <br />
                <div className="appearHover">
                  <p className="imageDesc" style={{ paddingTop: "20%" }}>
                    <h3>Release Date: </h3>
                    <h4>{movie.release_date}</h4>
                    <div className="spacePtag"></div>
                    <h3>Overview:</h3>
                    <h4>{movie.overview.slice(0, 310)}</h4>
                  </p>
                  <img
                    src={`${apiImageAddress}w300${movie.poster_path}`}
                    alt={movie.name}
                  />
                </div>
                <h4 style={{ marginTop: "1rem" }}>{movie.original_title}</h4>
              </div>
            </div>
          </>
        )}
    </>
  );
}
