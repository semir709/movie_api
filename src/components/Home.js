import React, { useEffect, useState } from "react";
import Layout from "./Layout";

const Home = () => {
  return (
    <>
      <Layout fetchRequest={"titles?info=base_info&limit=20"} />
    </>
  );
};

export default Home;
