import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { fetchFromApi } from "../utils/fetchFromApi";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchFromApi("titles").then((res) => setData(res.results));
  }, []);

  return (
    <>
      <Layout data={data} />
    </>
  );
};

export default Home;
