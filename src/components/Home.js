import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { fetchFromApi } from "../utils/fetchFromApi";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchAllData = async () => {
      const movies = await fetchFromApi("titles?info=base_info").then((res) => {
        return res.results;
      });

      setData(movies);
    };

    fetchAllData();

    // console.log(data);
  }, []);

  return (
    <>
      <Layout data={data} />{" "}
    </>
  );
};

export default Home;
