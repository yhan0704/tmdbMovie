import React from "react";

export default function Search(props) {
  return (
    <div className="searchBox">
      <input
        type="text"
        onChange={(e) => props.setSearch(e.target.value)}
        value={props.value}
        placeholder="Find Your Movies...."
      />
      <button className="button">Search</button>
    </div>
  );
}
