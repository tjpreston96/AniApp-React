import React, { useEffect, useState } from "react";
import "./ResultsList.css";
import ResultItem from "../ResultItem/ResultItem";

const ResultsList = ({ results }) => {
  const [indResult, setIndResult] = useState([]);

  const renderedResults = results?.map((result) => {
    return (
      <ResultItem result={result} key={result.id} setIndResult={setIndResult} />
    );
  });

  return <div className="resultsList">{renderedResults}</div>;
};

export default ResultsList;
