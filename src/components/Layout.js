import React from "react";
import Card from "./Card";

const Layout = ({ data }) => {
  console.log(data);
  return (
    <div className="mt-5 px-custom-side flex flex-wrap gap-7">
      {data.map((item) => (
        <Card data={item} />
      ))}
    </div>
  );
};

export default Layout;
