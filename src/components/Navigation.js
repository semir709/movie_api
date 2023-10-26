import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Ranking_icon,
  Category_icon,
  Logo,
  Menu_icon,
  Close_icon,
} from "../assets";
import { List, SearchBar } from "../components/index";
import { main_filter, genres } from "../utils/constants";

const Navigation = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <div className="bg-custom-black py-4 sm:px-custom-side px-[30px] text-white flex items-center justify-between">
        <div className="flex items-center md:w-1/2 w-full pe-3 ">
          <div className="me-5">
            <Link to={"/"}>
              <Logo className="hover:fill-custom-pink" />
            </Link>
          </div>
          <SearchBar />
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
              className={`md:flex md:items-center md:static absolute top-[250%] -left-[30%]  bg-custom-black py-5 md:py-0  ps-1 pe-2 rounded-md ${
                toggle ? "block" : "hidden"
              }`}
            >
              <li className="cursor-pointer my-2 md:mx-3">
                <List text={"Category"} Icon={Category_icon} list={genres} />
              </li>

              <li className=" cursor-pointer my-2 md:mx-3">
                <List
                  text={"Rankings"}
                  Icon={Ranking_icon}
                  list={main_filter}
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
