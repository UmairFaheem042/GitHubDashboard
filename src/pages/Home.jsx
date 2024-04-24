import React from "react";
import "../css/Home.css";
import SearchContainer from "../components/SearchContainer";

const Home = () => {
  
  return (
    <section className="hero maxWidth">
      <div className="hero_content">
        <div className="hero_text">
          <h1>Let’s Search from here</h1>
          <p>Search Engine Powered by GitHub API</p>
        </div>
        <div className="searchBox">
          <SearchContainer placeholderText={"search user here..."} />
        </div>
      </div>
    </section>
  );
};

export default Home;
