import React from "react";
import Movies from "./Movies";
import styled from "styled-components";

export default function MovieComponent({ movies }) {
  const Wrap = styled.div`
    background: black;
    color: white;
    display:flex;
    width:100%;
    justify-content:center;
    flex-wrap:wrap;
  `;
  return (
    <Wrap>
        {movies.map((movie) => (
          <Movies key={movie.id} movie={movie} />
        ))}
    </Wrap>
  );
}
