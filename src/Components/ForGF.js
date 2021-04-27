import React, { useState, useEffect } from "react";
import MovieComponent from "./MovieComponent";
import Paging from "./Paging";
const API = process.env.REACT_APP_API_KEY;

export default function ForGF() {
  const [movies, setMovies] = useState([]);
  const [number, setNumber] = useState(1);
  const [totalPage, setTotalPage] = useState([]);

  const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API}&language=en-US&sort_by=primary_release_date.desc&include_adult=false&include_video=false&page=${number}&with_genres=10749,18&with_watch_monetization_types=flatrate`;

  useEffect(() => {
    const getMovieRequest = async () => {
      const res = await fetch(URL);
      const movies = await res.json();
      setTotalPage(movies.total_pages);
      setMovies(movies.results);
    };
    getMovieRequest();
    window.scrollTo(0, 0);
  }, [URL]);

  return (
    <div>
      <MovieComponent movies={movies} />
      <Paging setNumber={setNumber} totalPage={totalPage} />
    </div>
  );
}
