import React, { useEffect, useRef } from "react";
import { Close_icon, Search_icon } from "../assets";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const input = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const timeID = setTimeout(() => {
      if (searchTerm) {
        navigate(`/search/${searchTerm}`);
      } else navigate("/");
    }, 1000);

    return () => clearTimeout(timeID);
  }, [searchTerm]);

  const onClose = () => {
    navigate("/");
    setSearchTerm("");
    input.current.focus();
  };

  return (
    <div className="flex items-center bg-white rounded-md ">
      <input
        ref={input}
        type="text"
        id="search"
        placeholder="Search..."
        className="text-custom-black outline-none ps-2 rounded-md"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
      <label htmlFor="search" className="ms-3 hover:cursor-pointer  w-[25px]">
        {searchTerm ? <Close_icon onClick={onClose} /> : <Search_icon />}
      </label>
    </div>
  );
};

export default SearchBar;