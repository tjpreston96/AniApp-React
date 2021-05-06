import React, { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import ResultsList from "../../components/ResultsList/ResultsList";

const SearchPage = () => {
  const [results, setResults] = useState([]);

  return (
    <>
      <SearchBar setResults={setResults} />
      <ResultsList results={results} setResults={setResults} />
    </>
  );
};

export default SearchPage;
