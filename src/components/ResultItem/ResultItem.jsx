import React from "react";
import { Link } from "react-router-dom";
import './ResultItem.css'

const ResultItem = ({ result }) => {
  return (
    <Link className="card resultListCard" >
        <img src={result.attributes.posterImage.large} className='card-img-top' alt="resultImg"/>
      <h5 className="card-title">{result.attributes.canonicalTitle}</h5>
    </Link>
  );
};

export default ResultItem;
