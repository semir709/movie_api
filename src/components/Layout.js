import React from "react";

const Layout = ({ data }) => {
  return (
    <div className="mt-5 px-custom-side flex flex-wrap gap-7">
      {data.map(({ title, text }) => (
        <div>{title}</div>
      ))}
    </div>
  );
};

export default Layout;
