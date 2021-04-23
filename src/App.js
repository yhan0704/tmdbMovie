import React, { useState, useEffect } from "react";
import "./App.css";
import MovieComponent from "./Components/MovieComponent";

function App() {
  const [movies, setMovies] = useState([]);
  const [movieName, setmovieName] = useState("titanic");
  const API = process.env.REACT_APP_API_KEY
  const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API}&language=en_US&query=${movieName}&page=1&include_adult=true`;
//`https://api.themoviedb.org/3/movie/popular?api_key=${API}&language=en-US&page=1  =>  recent movies`
  useEffect(() => {
    async function fectchMovies() {
      const res = await fetch(URL)
      const movies = await res.json()
      setMovies(movies.results)
    }
    fectchMovies();
  }, [URL]);

  return <div className="App"> <MovieComponent movies={movies} /> </div>;
}

export default App;
