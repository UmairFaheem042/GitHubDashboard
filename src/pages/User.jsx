import React, { useEffect, useState } from "react";
import "../css/User.css";
import SearchContainer from "../components/SearchContainer";
import { useParams } from "react-router-dom";
import Repository from "../components/Repository";
import timeAgo from "../utils/dateFormatted";
import LoadingScreen from "../components/LoadingScreen";
import ErrorPage from "./ErrorPage";

const User = () => {
  const { username } = useParams();
  const [userInfo, setUserInfo] = useState([]);

  const [repositories, setRepositories] = useState([]);

  const [loading, setLoading] = useState(true);
  const [errorOccur, setErrorOccur] = useState(true);

  let page = 1;
  // setErrorOccur(true);

  useEffect(() => {
    async function fetchUser() {
      setLoading(true);
      try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        const data = await res.json();

        if (data.message) {
          setErrorOccur(true);
          setTimeout(() => {
            setLoading(false);
          }, 1000);
          return;
        }
        setUserInfo(data);
        setErrorOccur(false);
        console.log(data);
      } catch (error) {
        setErrorOccur(true);
      }
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }

    fetchUser();
  }, [username]);

  useEffect(() => {
    async function fetchRepos() {
      const res = await fetch(
        `https://api.github.com/users/${username}/repos?page=${page}`
      );
      const data = await res.json();

      setRepositories(data);
    }

    fetchRepos();
  }, [page]);

  // console.log(userInfo);
  // console.log(repositories);

  if (loading) return <LoadingScreen />;

  if (errorOccur) return <ErrorPage />;

  return (
    <section className="user maxWidth">
      <div className="user_container">
        <div className="profile_box box">
          <img src={userInfo.avatar_url} alt="pfp" />
          <div className="right_box">
            <div className="right_box-top">
              <h2>{userInfo.name}</h2>
              <p>@{userInfo.login}</p>
            </div>
            <div className="right_box-bottom">
              <p>
                <i className="ri-git-repository-line"></i>
                <span>{userInfo.public_repos}</span> Repositories
              </p>
              <p>
                <i className="ri-user-follow-line"></i>
                <span>{userInfo.followers}</span> follower •{" "}
                <span>{userInfo.following}</span> following
              </p>
            </div>
          </div>
        </div>

        <div className="bio_box box">
          <h2>Bio</h2>
          <p>
            {userInfo.bio ? (
              userInfo.bio
            ) : (
              <p className="notFound">🚫 Nothing to show</p>
            )}
          </p>
        </div>

        <div className="link_box box">
          <ul>
            {userInfo.location && (
              <li>
                <i className="ri-map-pin-line"></i>
                <span>{userInfo.location}</span>
              </li>
            )}
            <li>
              Joined:
              {/* <i class="ri-time-line"></i> */}
              <span>{timeAgo(userInfo.created_at)}</span>
            </li>
          </ul>
        </div>

        <div className="repo_box">
          <header>
            <h2>Repositories</h2>
            {repositories.length !== 0 && (
              <SearchContainer
                placeholderText={"Find a repository..."}
                notSlash={true}
              />
            )}
          </header>
          {repositories.length !== 0 ? (
            <div className="repos">
              {repositories.map((repo) => (
                <Repository key={repo.id} data={repo} />
              ))}
            </div>
          ) : (
            <p className="notFound">No Repositories Found</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default User;
