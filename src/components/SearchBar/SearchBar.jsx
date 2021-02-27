import React, { useState, useEffect } from "react";
import "./SearchBar.css";

const SearchBar = ({category}) => {
  const [term, setTerm] = useState("");

  const onSubmit = (evt) => {
    evt.preventDefault();

    onSubmit(term);
  };
  return (
    <>
      <h2>Search {category} Titles</h2>
      <div className="searchBox">
        <form onSubmit={onSubmit} className="search">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              value={term}
              onChange={(evt) => setTerm(evt.target.value)}
              placeholder='Title Search...'
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
