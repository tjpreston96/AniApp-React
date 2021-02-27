import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ResultItem from "../ResultItem/ResultItem";

const ResultsList = ({ results, setResults }) => {
    const {category} = useParams()
  useEffect(() => {
    setResults([]);
  }, [category]);
  const renderedResults = results.map((result) => {
    return <ResultItem result={result} key={result.id} />;
  });
  return <div>{renderedResults}</div>;
};

export default ResultsList;
