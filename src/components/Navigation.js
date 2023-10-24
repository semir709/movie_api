import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Statistic_icon, logo, Category_icon, Logo } from "../assets";
import { List, SearchBar } from "../components/index";
import { genres, main_filter } from "../utils/constants";

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
                <List text={"Category"} Icon={Category_icon} list={genres} />
              </li>
              <li className="mx-3 cursor-pointer">
                <List
                  text={"Meters"}
                  Icon={Statistic_icon}
                  list={main_filter}
                />
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
