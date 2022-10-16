import React, { useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Repositories = ({ showContent }) => {
  const [gitHubIntro, setGitHubIntro] = useState(null);
  const [gitHubRepos, setGitHubRepos] = useState(null);
  useEffect(() => {
    fetch("https://api.github.com/users/RCvetinskis")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setGitHubIntro({
          followers: data.followers,
          following: data.following,
          bio: data.bio,
          repos: data.public_repos,
          url: data.url,
        });
      });

    fetch("https://api.github.com/users/RCvetinskis/repos")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, [showContent]);
  console.log(gitHubIntro);

  return (
    <div className="repo-container">
      <Helmet>
        <title>Github Repositories</title>
      </Helmet>
      <header>
        <h1>Github Repositories</h1>
      </header>
    </div>
  );
};

export default Repositories;
