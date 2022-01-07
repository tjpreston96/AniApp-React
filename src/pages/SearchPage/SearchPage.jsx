import React, { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import ResultsList from "../../components/ResultsList/ResultsList";
import { useParams } from "react-router-dom";

const SearchPage = () => {
  const [results, setResults] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    setResults([]);
  }, [category]);

  return (
    <>
      <SearchBar setResults={setResults} />
      <ResultsList results={results} />
    </>
  );
};

export default SearchPage;
