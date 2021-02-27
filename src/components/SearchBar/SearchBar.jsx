import React, { useState, useEffect } from "react";
import "./SearchBar.css";
import { search } from "../../services/searchService";
import { useParams } from "react-router-dom";

const SearchBar = ({ setResults }) => {
  const [term, setTerm] = useState("");
  const { category } = useParams();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const results = await search(term, category);
    setResults(results);
  };
  return (
    <>
      <h2>
        Search {category.charAt(0).toUpperCase() + category.slice(1)} Titles
      </h2>
      <div className="searchBox">
        <form onSubmit={handleSubmit} className="search">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              value={term}
              onChange={(evt) => setTerm(evt.target.value)}
              placeholder="Title Search..."
              aria-label="Title Search"
              aria-describedby="button-addon2"
            />
            <div class="input-group-append">
              <button class="btn gold" type="button" id="button-addon2">
                Search <i class="bi bi-search"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
