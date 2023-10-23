import React from "react";
import { search_icon } from "../assets";

const SearchBar = () => {
  return (
    <div className="flex items-center bg-white rounded-md">
      <input
        type="text"
        id="search"
        placeholder="Search..."
        className="text-custom-black outline-none ps-2 rounded-md"
      />
      <label htmlFor="search" className="ms-3 hover:cursor-pointer pe-2">
        <img src={search_icon} alt="search_icon" />
      </label>
    </div>
  );
};

export default SearchBar;
