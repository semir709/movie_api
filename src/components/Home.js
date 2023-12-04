import React, { useEffect, useState } from "react";
import InfiniteScrollLayout from "./InfiniteScrollLayout";

const Home = () => {
  return (
    <>
      <div className="mt-[100px]">
        <InfiniteScrollLayout
          fetchRequest={
            // "titles/random?info=base_info&limit=20&list=top_boxoffice_200"
            "titles?info=base_info&limit=20&list=top_boxoffice_200"
          }
        />
      </div>
    </>
  );
};

export default Home;
