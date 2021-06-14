import axios from "axios";
import React, { useState, useEffect } from "react";
import MovieComponent from "../Components/MovieComponent";
import Paging from "./Paging";
const API = process.env.REACT_APP_API_KEY;

// import Search from "../Components/Search";

export default function Mainpage() {
  const [movies, setMovies] = useState([]);
  // const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [number, setNumber] = useState(1);
  const [totalPage, setTotalPage] = useState([]);

  // const movie = `https://api.themoviedb.org/3/search/movie?api_key=${API}&language=en_US&page=${number}&query=${search}`;

  useEffect(() => {
    const popularMovie = `https://api.themoviedb.org/3/movie/popular?api_key=${API}&language=en-US&page=${number}`;
    fetchdata(popularMovie);
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [API, number]);

  const fetchdata = async (endpOint) => {
    const res = await axios.get(endpOint);
    const results = res.data;
    setTotalPage(results.total_pages);
    setMovies(results.results);
    setNumber(results.page);
    setLoading(false);
  };

  return (
    <div>
      {/* <Search setSearch={setSearch} /> */}
      <MovieComponent movies={movies} />

      {loading ? (
        "..laoding"
      ) : (
        <Paging setNumber={setNumber} totalPage={totalPage} />
      )}
    </div>
  );
}
