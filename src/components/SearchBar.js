import React, { useEffect, useRef } from "react";
import { Close_icon, Search_icon } from "../assets";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const styleMode = {
  search: {
    mainMode: {
      background: "#ffffff",
      color: "#201925",
    },
    movieMode: {
      background: "#201925",
      color: "#ffffff",
    },
  },

  icon: {
    mainMode: {
      fill: "#201925",
    },
    movieMode: {
      fill: "#ffffff",
    },
  },
};

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const input = useRef(null);

  const navigate = useNavigate();

  const [styleBase, setStyleBase] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.split("/")[1] === "movie") {
      setStyleBase(false);
    } else setStyleBase(true);
  }, [location.pathname]);

  useEffect(() => {
    const timeID = setTimeout(() => {
      if (searchTerm.length > 0) {
        navigate(`/search/${searchTerm}`);
      }
    }, 1000);

    return () => clearTimeout(timeID);
  }, [searchTerm]);

  const onClose = () => {
    navigate("/"); //prevous visited acutally
    setSearchTerm("");
    input.current.focus();
  };

  return (
    <div
      className="flex items-center justify-between bg-white rounded-md h-fit w-full"
      style={styleBase ? styleMode.search.mainMode : styleMode.search.movieMode}
    >
      <input
        style={
          styleBase ? styleMode.search.mainMode : styleMode.search.movieMode
        }
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
          <Close_icon
            className="fill-black"
            onClick={onClose}
            style={
              styleBase ? styleMode.icon.mainMode : styleMode.icon.movieMode
            }
          />
        ) : (
          <Search_icon
            style={
              styleBase ? styleMode.icon.mainMode : styleMode.icon.movieMode
            }
          />
        )}
      </label>
    </div>
  );
};

export default SearchBar;
