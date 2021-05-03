import React, { useState } from "react";

const SearchForm = ({ handleSubmit, searchParam }) => {
  const [searchInput, setSearchInput] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (searchInput === "") {
      return;
    } else {
      searchParam(searchInput);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className='search-container'>
        <div className='title'>MyFolio</div>
        <div className='search-div'>
          <input type='text' onChange={(e) => setSearchInput(e.target.value)} />
          <button className='search-button' type='submit' value='Search'>
            <i class='fas fa-search'></i>
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
