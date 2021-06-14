// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import MovieComponent from "../Components/MovieComponent";
// import Search from "../Components/Search";
// import { Typography, Row, Button } from "antd";
// import GridCards from "../commons/GridCards";

// export default function Mainpage() {
//   const [movies, setMovies] = useState([]);
//   const [search, setSearch] = useState("");
//   const [loading, setLoading] = useState(true);
//   // const [MainMovieImage, setMainMovieImage] = useState(null);
//   const [number, setNumber] = useState(1);
//   const API = process.env.REACT_APP_API_KEY;
//   const movie = `https://api.themoviedb.org/3/search/movie?api_key=${API}&language=en_US&page=${number}&query=${search}`;

//   useEffect(() => {
//     const popularMovie = `https://api.themoviedb.org/3/movie/popular?api_key=${API}&language=en-US&page=1`;
//     fetchdata(popularMovie);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const fetchdata = async (endpOint) => {
//     const res = await axios.get(endpOint);
//     const results = res.data;
//     setMovies([...movies, ...results.results]);
//     setNumber(results.page);
//     // setMainMovieImage(MainMovieImage || result.results[0]);
//     setLoading(false);
//     // return results;
//     // const movies = res.data;
//     // console.log(movies);
//     // // const movies = await res.json();
//     // // console.log(movies);
//     // setTotalPage(movies.total_pages);
//     // // console.log(res.data);
//   };

//   const savedHeight = document.body.offsetHeight;

//   const onClick = () => {
//     setLoading(true);
//     let nextURL = `https://api.themoviedb.org/3/movie/popular?api_key=${API}&language=en-US&page=${
//       number + 1
//     }`;
//     fetchdata(nextURL);
//   };

//   const handleScrollPosition = () => {
//     const scrollPosition = sessionStorage.getItem("scrollPosition");
//     if (scrollPosition) {
//       window.scrollTo(0, parseInt(scrollPosition));
//       sessionStorage.removeItem("scrollPosition");
//     }
//   };

//   // store position in sessionStorage

//   // const onClick = () => {
//   //   sessionStorage.setItem("scrollPosition", window.pageYOffset);
//   //   // fetchingNextMovie();
//   // };

//   const apiImageAddress = "http://image.tmdb.org/t/p/original/";

//   return (
//     <div>
//       <Search setSearch={setSearch} />
//       {/* <MovieComponent movies={movies} /> */}
//       {/* <Paging setNumber={setNumber} totalPage={totalPage} /> */}
//       <Row
//         style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
//       >
//         {movies &&
//           movies.map((movie, index) => (
//             <React.Fragment key={index}>
//               <GridCards
//                 key={movie.id}
//                 moviePost={movie.poster_path}
//                 movieId={movie.id}
//                 movieName={movie.original_title}
//               />
//             </React.Fragment>
//           ))}
//       </Row>

//       {loading ? (
//         "..laoding"
//       ) : (
//         <div className="loadButton" style={{ marginTop: "20px" }}>
//           <button onClick={onClick}>Load More</button>
//         </div>
//       )}
//     </div>
//   );
// }
