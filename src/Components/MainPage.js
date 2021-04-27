import React, { useState, useEffect } from "react";
import MovieComponent from "../Components/MovieComponent";
import Paging from "../Components/Paging";
import Search from "../Components/Search";

export default function Mainpage() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [number, setNumber] = useState(1);
  const [totalPage, setTotalPage] = useState([]);
  const API = process.env.REACT_APP_API_KEY;
  const movie = `https://api.themoviedb.org/3/search/movie?api_key=${API}&language=en_US&page=${number}&query=${search}`;
  const popularMovie = `https://api.themoviedb.org/3/movie/popular?api_key=${API}&language=en-US&page=${number}`;
  useEffect(() => {
    const getMovieRequest = async () => {
      let curURL = ``;
      if (search === "") {
        curURL = popularMovie;
      } else {
        curURL = movie;
      }
      const res = await fetch(curURL);
      const movies = await res.json();
      setTotalPage(movies.total_pages);
      setMovies(movies.results);
    };
    getMovieRequest();
    window.scrollTo(0, 0);
  }, [number, search, popularMovie, movie]);

  return (
    <div>
      <Search setSearch={setSearch} />
      <MovieComponent movies={movies} />
      <Paging setNumber={setNumber} totalPage={totalPage} />
    </div>
  );
}
