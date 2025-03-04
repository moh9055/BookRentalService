import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="material-icons">list</i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                  <i className="material-icons">home</i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About us
                  <i className="material-icons">info</i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/books">
                  Books
                  <i className="material-icons">library_books</i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/addbook">
                  Add Books
                  <i className="material-icons">add</i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Conatact Us
                  <i className="material-icons">contacts</i>
                </Link>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center">
            <Link className="text-reset me-3" to="/cart">
              <i className="material-icons">shopping_cart</i>
            </Link>

            <div className="dropdown">
              <Link
                to="/profile"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://avatars.githubusercontent.com/u/74243780?v=4"
                  className="rounded-circle"
                  height="25"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
