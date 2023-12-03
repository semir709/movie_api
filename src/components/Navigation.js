import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Ranking_icon,
  Category_icon,
  Logo,
  Menu_icon,
  Close_icon,
} from "../assets";
import { List, SearchBar } from "../components/index";
import { main_filter, genres } from "../utils/constants";

const styleMode = {
  mainMode: {
    background: "#201925",
  },
  movieMode: {
    background: "linear-gradient(rgba(181,87,255,0.2), transparent)",
  },
};

const Navigation = () => {
  const [toggle, setToggle] = useState(true);
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");

  const [styleBase, setStyleBase] = useState(true);

  useEffect(() => {
    if (location.pathname.split("/")[1] === "movie") {
      setStyleBase(false);
    } else setStyleBase(true);
  }, [location.pathname]);
  return (
    <>
      <div
        className="py-4 sm:px-custom-side px-[30px] text-white flex items-center justify-between fixed w-full z-10"
        style={styleBase ? styleMode.mainMode : styleMode.movieMode}
      >
        <div className="flex items-center md:w-1/2 w-full pe-3 ">
          <div className="me-5">
            <Link to={"/"} onClick={() => setSearchTerm("")}>
              <Logo className="hover:fill-custom-pink" />
            </Link>
          </div>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
        <div className=" items-center ">
          <div className=" relative px-5 ">
            <div
              className="md:hidden"
              onClick={() => setToggle((prev) => !prev)}
            >
              {toggle ? <Close_icon /> : <Menu_icon />}
            </div>
            <ul
              className={`md:flex md:items-center md:bg-transparent bg-custom-black md:static absolute top-[250%] -left-[30%] py-5 md:py-0  ps-1 pe-2 rounded-md ${
                toggle ? "block" : "hidden"
              }`}
            >
              <li className="cursor-pointer my-2 md:mx-3">
                <List
                  setSearchTerm={setSearchTerm}
                  text={"Category"}
                  Icon={Category_icon}
                  list={genres}
                  group={"category"}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
