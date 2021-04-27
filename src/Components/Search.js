import React from "react";
export default function Search(props) {
  console.log(props);
  return (
    <div className="searchBox">
      <input
        type="text"
        onChange={(e) => props.setSearch(e.target.value)}
        placeholder="Find Your Movies...."
      />
      <button className="button">Search</button>
      <button className="button" onClick={props.romanceMovie}>
        Random
      </button>
    </div>
  );
}
