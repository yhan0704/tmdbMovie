import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import MovieComponent from "./Component/MovieComponent";

function App() {
  const [movies, setMovies] = useState([]);
  const API = process.env.REACT_APP_API_KEY
  const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API}&language=en-US&page=1`;

  useEffect(() => {
    async function fectchMovies() {
      const res = await fetch(URL)
      const json = await res.json()
      console.log(json)
      setMovies(json)
    }
    fectchMovies();
  }, [URL]);

  return <div className="App">{/* <MovieComponent movies={movies} /> */}</div>;
}

export default App;
