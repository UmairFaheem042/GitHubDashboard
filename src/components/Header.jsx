import React from "react";
import SearchContainer from "./SearchContainer";
import { Link, useLocation } from "react-router-dom";
import "../css/Header.css";

const Header = () => {
  const location = useLocation();
  return (
    <header>
      <nav className="">
        <Link to={"/"}>
          <div className="logo">
            <i className="ri-github-fill"></i>
          </div>
        </Link>
        {location.pathname !== "/" && (
          <SearchContainer placeholderText={"search user here..."} />
        )}
      </nav>
    </header>
  );
};

export default Header;
