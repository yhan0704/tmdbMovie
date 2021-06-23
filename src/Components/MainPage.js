import axios from "axios";
import React, { useState, useEffect } from "react";
import MovieComponent from "../Components/MovieComponent";
import Paging from "./Paging";
import Search from "../Components/Search";

const API = process.env.REACT_APP_API_KEY;

export default function Mainpage() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [number, setNumber] = useState(1);
  const [totalPage, setTotalPage] = useState([]);

  useEffect(() => {
    //remove prev movies(used for when search is true or false)
    setMovies([]);
    let movie = ``;
    if (search === "") {
      movie += `https://api.themoviedb.org/3/movie/popular?api_key=${API}&language=en-US&page=${number}`;
    } else {
      movie += `https://api.themoviedb.org/3/search/movie?api_key=${API}&language=en_US&page=${number}&query=${search}`;
    }
    fetchdata(movie);
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [API, number, search]);

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
      <Search setSearch={setSearch} />
      <MovieComponent movies={movies} />
      {loading ? (
        <div style={{ textAlign: "center" }}>"..loading"</div>
      ) : (
        <Paging setNumber={setNumber} totalPage={totalPage} />
      )}
    </div>
  );
}
