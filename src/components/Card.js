import React from "react";
import { Star_icon } from "../assets";

const Card = ({ data }) => {
  if (!data) return <p>Loade..</p>;

  const { id, originalTitleText, primaryImage } = data;

  console.log(data);

  return (
    <div
      className="w-[220px] h-[250px] bg-no-repeat bg-cover relative cursor-pointer text-white"
      style={{ backgroundImage: `url(${primaryImage?.url})` }}
    >
      <div className="bg-black w-full h-full opacity-30 absolute top-0 left-0"></div>
      <div className="absolute top-0 left-0 w-full h-full p-5">
        <h2 className="mb-3">{originalTitleText?.text}</h2>
        <div className="">
          <Star_icon />
        </div>
      </div>
    </div>
  );
};

export default Card;
