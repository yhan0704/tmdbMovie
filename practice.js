import axios from "axios";
import React, { useState, useEffect } from "react";
import MovieComponent from "../Components/MovieComponent";
import Search from "../Components/Search";

export default function Mainpage() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [number, setNumber] = useState(1);
  const API = process.env.REACT_APP_API_KEY;
  const movie = `https://api.themoviedb.org/3/search/movie?api_key=${API}&language=en_US&page=${number}&query=${search}`;
  const popularMovie = `https://api.themoviedb.org/3/movie/popular?api_key=${API}&language=en-US&page=1`;

  const fetchdata = async () => {
    let curURL = ``;
    if (search === "") {
      curURL = popularMovie;
    } else {
      curURL = movie;
    }
    const res = await axios.get(popularMovie);
    const results = res.data;
    console.log(results);
    setMovies([...movies, ...results.results]);
    setNumber(results.page);
    setLoading(false);
    return results;
    // const movies = res.data;
    // console.log(movies);
    // // const movies = await res.json();
    // // console.log(movies);
    // setTotalPage(movies.total_pages);
    // // console.log(res.data);
  };

  const savedHeight = document.body.offsetHeight;

  const onClick = () => {
    setLoading(true);
    let nextURL = `https://api.themoviedb.org/3/movie/popular?api_key=${API}&language=en-US&page=${
      number + 1
    }`;
    fetchdata(nextURL);
  };

  const handleScrollPosition = () => {
    const scrollPosition = sessionStorage.getItem("scrollPosition");
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition));
      sessionStorage.removeItem("scrollPosition");
    }
  };

  // store position in sessionStorage

  useEffect(() => {
    fetchdata(movie);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const onClick = () => {
  // sessionStorage.setItem("scrollPosition", window.pageYOffset);
  //   // fetchingNextMovie();
  // };

  return (
    <div>
      <Search setSearch={setSearch} />
      <MovieComponent movies={movies} />
      {/* <Paging setNumber={setNumber} totalPage={totalPage} /> */}
      {loading ? (
        "..laoding"
      ) : (
        <div className="loadButton" style={{ marginTop: "20px" }}>
          <button onClick={onClick}>Load More</button>
        </div>
      )}
    </div>
  );
}
