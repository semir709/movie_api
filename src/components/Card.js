import React, { useEffect, useState } from "react";
import { Star_icon } from "../assets";

const Card = ({ data }) => {
  const { id, originalTitleText, primaryImage, ratingsSummary } = data;
  const [rating, setRating] = useState([0, 0, 0, 0, 0]);

  useState(() => {
    const score = Math.round(ratingsSummary.aggregateRating / 2);
    setRating((prev) => {
      return prev.map((val, index) => {
        if (index < score) {
          return 1;
        } else return 0;
      });
    });
  }, [data]);

  if (!data) return <p>Loade..</p>;

  return (
    <div
      key={id}
      className="w-[220px] h-[250px] bg-no-repeat bg-cover relative cursor-pointer text-white"
      style={{ backgroundImage: `url(${primaryImage?.url})` }}
    >
      <div className="bg-black w-full h-full opacity-30 absolute top-0 left-0"></div>
      <div className="absolute top-0 left-0 w-full h-full p-5">
        <h2 className="mb-3">{originalTitleText?.text}</h2>
        <div className="flex">
          {rating.map((val) =>
            val === 1 ? (
              <Star_icon className="fill-custom-pink" />
            ) : (
              <Star_icon />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
