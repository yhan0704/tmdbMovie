import React, { Component }  from "react";
import Movies from "./Movies";

export default class MovieComponent extends Component {
  render() {
    return (
      <div>
        {this.props.movies.map(movie => (
          <Movies key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
}
