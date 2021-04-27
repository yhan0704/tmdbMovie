import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="navBox">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/romance">Romance</Link>
      </li>
    </div>
  );
}
