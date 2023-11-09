import React, { useEffect, useState } from "react";
import { Star_icon } from "../assets";
import { Link } from "react-router-dom";
import { no_image } from "../assets/index";

const Card = ({ data }) => {
  const { id, originalTitleText, primaryImage, ratingsSummary } = data;
  const [rating, setRating] = useState([0, 0, 0, 0, 0]);

  useState(() => {
    const score = Math.round(ratingsSummary?.aggregateRating / 2);
    setRating((prev) => {
      return prev.map((val, index) => {
        if (index < score) {
          return 1;
        } else return 0;
      });
    });
  }, [data]);

  if (!data) return <p>Loade..</p>;

  console.log(no_image);

  return (
    <Link to={`/movie/${id}`}>
      <div
        key={id}
        className="w-[220px] h-[250px] bg-no-repeat bg-cover relative cursor-pointer text-white group"
        // style={{ backgroundImage: `url(${primaryImage?.url})` }}
      >
        <div className="overflow-hidden w-full h-full">
          <div
            style={{
              backgroundImage: primaryImage
                ? `url(${primaryImage?.url})`
                : `url(${no_image})`,
            }}
            className="w-full h-full bg-cover group-hover:scale-110 duration-200"
          ></div>
        </div>
        <div className="bg-black w-full h-full opacity-30 absolute top-0 left-0"></div>
        <div className="absolute top-0 left-0 w-full h-full p-5 flex flex-col justify-between ">
          <h2 className="mb-3 text-center">{originalTitleText?.text}</h2>
          <div className="flex w-full justify-center">
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
    </Link>
  );
};

export default Card;
