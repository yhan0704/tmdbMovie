import React, { useState, useEffect } from "react";
import "../App.css";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import MovieComponent from "../Components/MovieComponent";
import Search from "../Components/Search";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const API = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const getMovieRequest = async () => {
      let curURL = ``;
      if (search === "") {
        curURL = `https://api.themoviedb.org/3/movie/popular?api_key=${API}&language=en-US&page=1`;
      } else {
        curURL = `https://api.themoviedb.org/3/search/movie?api_key=${API}&language=en_US&query=${search}`;
      }
      const res = await fetch(curURL);
      const movies = await res.json();
      setMovies(movies.results);
    };
    getMovieRequest();
  }, [search]);

  return (
    <div className="App">
      <Header />
      <Search setSearch={setSearch} search={search} />
      <MovieComponent movies={movies} />
      <Footer />
    </div>
  );
}

export default App;
