import React from "react";
import Layout from "./Layout";

const Home = () => {
  //fetch data

  const data = [
    { title: "Hello", text: "hello" },
    { title: "Hello", text: "hello" },
  ];
  return (
    <>
      <Layout data={data} />
    </>
  );
};

export default Home;
