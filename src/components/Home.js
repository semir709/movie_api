import React, { useEffect, useState } from "react";
import Layout from "./Layout";

const Home = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchAllData = async () => {
  //     const movies = await fetchFromApi("titles?info=base_info").then((res) => {
  //       return res.results;
  //     });

  //     setData(movies);
  //   };

  //   fetchAllData();

  //   // console.log(data);
  // }, []);

  return (
    <>
      <Layout fetchRequest={"titles?info=base_info&limit=20"} />
    </>
  );
};

export default Home;
