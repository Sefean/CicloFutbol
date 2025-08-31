import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1 style={{ margin: 0 }}>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          CicloFutbol
        </Link>
      </h1>
    </header>
  );
}
