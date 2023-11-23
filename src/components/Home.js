import React, { useEffect, useState } from "react";
import InfiniteScrollLayout from "./InfiniteScrollLayout";

const Home = () => {
  return (
    <>
      <InfiniteScrollLayout
        fetchRequest={"titles?info=base_info&limit=30&list=top_boxoffice_200"}
      />
    </>
  );
};

export default Home;
