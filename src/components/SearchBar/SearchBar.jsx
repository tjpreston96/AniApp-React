import React from "react";

const SearchBar = () => {
  return (
    <>
      <form action="/anime/search" method="POST" class="search">
        <div class="form-row">
          <div class="col-md-12">
            <input
              type="text"
              class="form-control"
              name="query"
              placeholder="Search for anime..."
            />
          </div>
        </div>
        <button type="submit" class="btn" >
          Search
        </button>
      </form>
    </>
  );
};

export default SearchBar;
