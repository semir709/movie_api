import React, { useEffect, useState } from "react";
import InfiniteScrollLayout from "./InfiniteScrollLayout";
import { useLocation } from "react-router-dom";

const Category = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [request, setRequest] = useState(
    `titles?info=base_info&limit=20&genre=${path}`
  );

  useEffect(() => {
    setRequest(`titles?info=base_info&limit=20&genre=${path}`);
  }, [path]);

  return (
    <>
      <InfiniteScrollLayout fetchRequest={request} />
    </>
  );
};

export default Category;
