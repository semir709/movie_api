import React, { useEffect, useRef, useState } from "react";
import { Star_icon } from "../assets";
import { Link } from "react-router-dom";
import { no_image } from "../assets/index";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { caculateRating } from "../utils/fetchFromApi";

const Card = ({ data }) => {
  const { id, originalTitleText, primaryImage, ratingsSummary } = data;
  const [rating, setRating] = useState([0, 0, 0, 0, 0]);
  const [isLoading, setIsLoading] = useState(true);
  const element = useRef(null);

  useEffect(() => {
    setRating(caculateRating(rating, ratingsSummary));
  }, [data]);

  const whenLoaded = () => {
    setIsLoading(false);
  };

  return (
    <>
      <Link to={`/movie/${id}`}>
        <div
          key={id}
          className="w-[220px] h-[250px] bg-no-repeat bg-cover relative cursor-pointer text-white group "
        >
          <div className="overflow-hidden w-full h-full ">
            {isLoading ? (
              <Skeleton
                style={{ lineHeight: "2", borderRadius: 0, height: "100%" }}
              />
            ) : null}
            <img
              ref={element}
              src={primaryImage ? primaryImage?.url : no_image}
              className={`w-full h-full bg-cover group-hover:scale-110 duration-200  ${
                isLoading && "hidden"
              }`}
              onLoad={whenLoaded}
              loading="lazy"
            />
          </div>
          <div className="bg-black w-full h-full opacity-30 absolute top-0 left-0"></div>
          <div className="absolute top-0 left-0 w-full h-full p-5 flex flex-col justify-between ">
            <h2 className="mb-3 text-center">
              {!isLoading && originalTitleText?.text}
            </h2>
            {!isLoading && (
              <div className="flex w-full justify-center">
                {rating.map((val) =>
                  val === 1 ? (
                    <Star_icon className="fill-custom-pink" />
                  ) : (
                    <Star_icon />
                  )
                )}
              </div>
            )}
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
