import React, { useEffect, useState } from "react";
import InfiniteScrollLayout from "./InfiniteScrollLayout";
import { useLocation } from "react-router-dom";

const Category = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  return (
    <>
      <div className="mt-[100px]">
        <InfiniteScrollLayout
          fetchRequest={`titles?info=base_info&limit=20&genre=${path}&startYear=2010&endYear=2023&sort=year.decr`}
        />
      </div>
    </>
  );
};

export default Category;
