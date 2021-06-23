import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
const API = process.env.REACT_APP_API_KEY;
const apiImageAddress = "http://image.tmdb.org/t/p/";

function DetailPage(props) {
  const movieId = props.match.params.id;
  const Wrap = styled.div`
    padding-top: 4% 0;
    background: black;
    position: relative;
    color: white;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 82vh;
    justify-content: center;
    align-items: center;
    @media (max-width: 870px) {
      height: 120vh;
    }
  `;

  const [movie, setMovie] = useState({});

  useEffect(() => {
    window.scroll(0, 0);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API}&language=en-US`
      )
      .then((res) => setMovie(res.data));
  }, [movieId]);

  return (
    <Wrap>
      <section className="midContainer">
        <div className="detailLeft">
          <img
            src={`${apiImageAddress}w300${movie.poster_path}`}
            alt="movie_picture"
          />
          <p className="voteAverage">{movie.vote_average}</p>
        </div>

        <div className="detailRight">
          <h1>
            {movie.original_title} ({movie.status})
          </h1>
          <p>Release_Date:{movie.release_date}</p>
          <p>
            Genres:{` `}
            {movie.genres && movie.genres.map((genre) => genre.name).join(", ")}
          </p>
          <p>
            Overview: <br />
            {movie.overview}
          </p>
        </div>
      </section>
    </Wrap>
  );
}

export default DetailPage;
