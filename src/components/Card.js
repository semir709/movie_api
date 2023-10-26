import React from "react";

const Card = ({ data }) => {
  if (!data) return <p>Loade..</p>;

  const { id, originalTitleText, primaryImage } = data;

  console.log(data);

  return (
    <div
      className="w-[100px] h-[100px] bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${primaryImage?.url})` }}
    ></div>
  );
};

export default Card;
