import React from "react";
import { Link } from "react-router-dom";
import { Statistic_icon, logo, Category_icon, Logo } from "../assets";

import SearchBar from "./SearchBar";

const Navigation = () => {
  return (
    <>
      <div className="bg-custom-black py-4 px-custom-side text-white flex items-center justify-between">
        <div className="flex items-center">
          <div className="me-5">
            <Link to={"/"}>
              <Logo className="hover:fill-custom-pink" />
            </Link>
          </div>
          <div className="ms-5">
            <ul className="flex items-center">
              <li className="mx-3 cursor-pointer ">
                <div className="flex items-center group">
                  <Category_icon className="group-hover:fill-custom-pink" />
                  <span className="ms-2 group-hover:text-custom-pink">
                    Category
                  </span>
                </div>
              </li>
              <li className="mx-3 cursor-pointer">
                <div className="flex items-center group">
                  <Statistic_icon className="group-hover:stroke-custom-pink" />
                  <span className="ms-2 group-hover:text-custom-pink">
                    Category
                  </span>
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
