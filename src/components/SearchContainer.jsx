import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";

const SearchContainer = ({ placeholderText, notSlash, onChange }) => {
  const location = useLocation();
  const [searchUser, setSearchUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "/") {
        e.preventDefault(); // Prevent default behavior
        document.getElementById("search-input").focus(); // Focus on the input field
        document.querySelector(".searchContainer").classList.add("focusField");
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleFocus = () => {
    document.querySelector(".searchContainer").classList.add("focusField");
  };

  const handleBlur = () => {
    document.querySelector(".searchContainer").classList.remove("focusField");
  };

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/${searchUser}`);
    setSearchUser("");
  }

  return (
    <form
      className="searchContainer"
      onSubmit={handleSubmit}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <input
        type="text"
        placeholder={placeholderText}
        value={searchUser}
        onChange={(e) => {
          setSearchUser(e.target.value);
          onChange(e.target.value);
        }}
        required
        id="search-input"
      />
      {location.pathname === "/" && <Button label={"Search User"} />}
      {!notSlash && location.pathname !== "/" && <span>/</span>}
    </form>
  );
};

export default SearchContainer;
