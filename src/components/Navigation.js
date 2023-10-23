import React from "react";
import { Link } from "react-router-dom";
import { logo, category_icon, statistic_icon } from "../assets";
import SearchBar from "./SearchBar";

const Navigation = () => {
  return (
    <>
      <div className="bg-custom-black py-4 px-custom-side text-white flex items-center justify-between">
        <div className="flex items-center">
          <div className="me-5">
            <Link to={"/"}>
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="ms-5">
            <ul className="flex items-center">
              <li className="mx-3 cursor-pointer ">
                <div className="flex items-center">
                  <div>
                    <img src={category_icon} alt="category_icon" />
                  </div>
                  <span className="ms-2">Category</span>
                </div>
              </li>
              <li className="mx-3 cursor-pointer">
                <div className="flex items-center">
                  <div>
                    <img src={statistic_icon} alt="category_icon" />
                  </div>
                  <span className="ms-2">Category</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <SearchBar />
      </div>
    </>
  );
};

export default Navigation;
