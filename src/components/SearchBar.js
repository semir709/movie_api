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
      }
    }, 1000);

    return () => clearTimeout(timeID);
  }, [searchTerm]);

  const onClose = () => {
    navigate("/");
    setSearchTerm("");
    input.current.focus();
  };

  return (
    <div className="flex items-center justify-between bg-white rounded-md h-fit w-full ">
      <input
        ref={input}
        type="text"
        id="search"
        placeholder="Search..."
        className="text-custom-black outline-none ps-2 rounded-md py-1 w-full"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
      <label htmlFor="search" className="ms-3 hover:cursor-pointer  px-3">
        {searchTerm ? (
          <Close_icon className="fill-black" onClick={onClose} />
        ) : (
          <Search_icon />
        )}
      </label>
    </div>
  );
};

export default SearchBar;
