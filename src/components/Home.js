import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { fetchFromApi } from "../utils/fetchFromApi";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchAllData = async () => {
      const data = await fetchFromApi("titles").then((res) => {
        const resul = res.results;

        // const newData = resul.map(async (obj) => {
        //   const newData = await fetchAllData(`titles/${obj.id}/ratings`);
        // });
      });
    };

    // fetchAllData();
  }, []);

  return <>{/* <Layout data={data} /> */}</>;
};

export default Home;
