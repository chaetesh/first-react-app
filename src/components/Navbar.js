import React from "react";
import PropTypes from "prop-types";

// Exporting this JSX code to app.js

// Props are just we pass as parameters to functions, we can use that value in JSX  
// Recieving props in parameters
export default function Navbar(props) {
  return (
    <nav className="navbar navbar-dark bg-dark" >
      <div className="container-fluid">
        {/* adding props using . and curly braces as it is Js component */}
        <a className="navbar-brand" href="/">
          {props.tittle}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                About
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

// Will display an error in console if other datatype is passed other than below one
// This is called PropTypes
Navbar.propTypes = {
    tittle: PropTypes.string
};
// we can even use default props.