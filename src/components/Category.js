import React, { useEffect } from "react";
import Layout from "./Layout";
import { useLocation } from "react-router-dom";

const Category = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  return (
    <>
      <Layout fetchRequest={`titles?info=base_info&limit=20&genre=${path}`} />
    </>
  );
};

export default Category;
