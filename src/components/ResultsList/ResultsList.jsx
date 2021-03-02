import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ResultsList.css";
import ResultItem from "../ResultItem/ResultItem";

const ResultsList = ({ results, setResults, setIndResult }) => {
  const { category } = useParams();

  useEffect(() => {
    setResults([]);
  }, [category, setResults]);

  const renderedResults = results.map((result) => {
    return (
      <ResultItem result={result} key={result.id} setIndResult={setIndResult} />
    );
  });

  return <div className="resultsList">{renderedResults}</div>;
};

export default ResultsList;
