import axios from "axios";
import React, { useState, useEffect } from "react";
import MovieComponent from "../MovieComponent";
const API = process.env.REACT_APP_API_KEY;

export default function Genre({ genreId }) {
  const [movies, setMovies] = useState([]);
  const [number, setNumber] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const popularMovie = `https://api.themoviedb.org/3/discover/movie?api_key=${API}&language=en-US&sort_by=primary_release_date.desc&include_adult=false&include_video=false&page=${number}&with_genres=${genreId}&with_watch_monetization_types=flatrate`;
    fetchdata(popularMovie);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [API]);

  const fetchdata = async (endpOint) => {
    const res = await axios.get(endpOint);
    const results = res.data;
    setMovies((prevMovies) => [...prevMovies, ...results.results]);
    setNumber(results.page);
    setLoading(false);
  };

  const onClick = () => {
    setLoading(true);
    let nextURL = `https://api.themoviedb.org/3/discover/movie?api_key=${API}&language=en-US&sort_by=primary_release_date.desc&include_adult=false&include_video=false&page=${
      number + 1
    }&with_genres=${genreId}&with_watch_monetization_types=flatrate`;
    fetchdata(nextURL);
  };

  return (
    <div>
      <MovieComponent movies={movies} />
      {loading ? (
        <div style={{ textAlign: "center" }}>...loading</div>
      ) : (
        <div className="loadButton" style={{ marginTop: "20px" }}>
          <button onClick={onClick}>Load More</button>
        </div>
      )}
    </div>
  );
}
