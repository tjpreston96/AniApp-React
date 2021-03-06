import React from "react";
import { Link, useParams } from "react-router-dom";
import "./ResultItem.css";

const ResultItem = ({ result, setIndResult }) => {
  const { category } = useParams();
  return (
    <Link
      to={{
        pathname: `/${category}/details/${result.attributes.slug}`,
        state: { result },
      }}
      className="card resultListCard"
      onClick={() => setIndResult(result)}
    >
      <img
        src={result.attributes.posterImage.large}
        className="card-img-top"
        alt="resultImg"
      />
      <h5 className="card-title">{result.attributes.canonicalTitle}</h5>
    </Link>
  );
};

export default ResultItem;
