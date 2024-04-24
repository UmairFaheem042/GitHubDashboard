import React from "react";
import "../css/ErrorPage.css";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error_page">
      <div className="error_text">
        <h1>Error 404</h1>
        <p>Page you are looking couldn't be found.</p>
      </div>
      <Link to={"/"}>
        <Button label={"Go Home"} />
      </Link>
    </div>
  );
};

export default ErrorPage;
