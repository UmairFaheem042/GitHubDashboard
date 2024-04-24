import React from "react";
import timeAgo from "../utils/dateFormatted";

const Repository = ({ data }) => {
  return (
    <a href={data.svn_url} target="_blank" className="repo box">
      <div className="repo_top">
        <header>
          <h2>{data.name}</h2>
          <span>{timeAgo(data.created_at)}</span>
        </header>
        {data.description && <p>{data.description}</p>}
      </div>
      <div className="repo_bottom">
        <p className="lang">{data.language}</p>
        <p>
          <i className="ri-star-line"></i>
          <span>{data.stargazers_count}</span>
        </p>
      </div>
    </a>
  );
};

export default Repository;
