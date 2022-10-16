import React, { useReducer } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import LoadingBox from "./LoadingBox";
import axios from "axios";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, repos: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const Repositories = ({ showContent }) => {
  const [{ loading, error, repos }, dispatch] = useReducer(reducer, {
    repos: [],
    loading: true,
    error: "",
  });

  const REPOS_API =
    "https://api.github.com/users/RCvetinskis/repos?per_page=100&type=owner";

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get(REPOS_API);
        const slicedData = result.data.slice(47, 69);
        dispatch({ type: "FETCH_SUCCESS", payload: slicedData });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err });
      }
    };

    fetchData();
  }, [showContent]);

  return (
    <div className="repo-container">
      <Helmet>
        <title>Github Repositories</title>
      </Helmet>
      <header>
        <h1>Github Repositories</h1>
      </header>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        <div className="repo ">
          {repos.map((x, i) => (
            <a key={i} target="_blank" href={x.html_url}>
              {x.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Repositories;
