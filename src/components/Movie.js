import React, { useEffect, useState } from "react";
import { fetchFromApi, fetchFromApiAll } from "../utils/fetchFromApi";
import { useLocation } from "react-router-dom";
import { caculateRating } from "../utils/fetchFromApi";
import { Star_icon } from "../assets";
import { Calendar_icon } from "../assets";
import { convertMonthToText } from "../utils/constants";
import Card from "./Card";

const Movie = () => {
  const [data, setData] = useState(null);
  const [moreData, setMoreData] = useState([]);
  const [rating, setRating] = useState([0, 0, 0, 0, 0]);

  const url = useLocation();
  const id = url.pathname.split("/").pop();
  useEffect(() => {
    setData([]);
    setMoreData([]);
    const fetchData = async () => {
      try {
        const obj = await fetchFromApi(`titles/${id}?info=base_info`);
        const moreData = await fetchFromApi(
          `titles/random/?info=base_info&limit=5&list=top_rated_series_250`
        );
        setData(obj.results);
        setMoreData(moreData.results);
      } catch (err) {
        // setErrorMesage(err);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    setRating(caculateRating(rating, data?.ratingsSummary));
  }, [data]);

  return (
    <>
      <main className="w-full h-screen relative">
        <img
          src={data?.primaryImage?.url}
          alt={data?.primaryImage?.caption.plainText}
          className="object-cover w-full h-full bg-no-repeat"
        />
        <div className="bg-black w-full h-full absolute top-0 left-0 opacity-80 "></div>

        <div className="absolute top-1/2 w-full -translate-y-1/2 left-0 md:px-custom-side px-5 ">
          <div className="md:w-1/2 w-full md:block flex items-center flex-col ">
            <h1 className="text-white text-6xl mb-5">
              {data?.originalTitleText?.text}
            </h1>

            <div className="flex mb-5">
              {rating.map((val) =>
                val === 1 ? (
                  <Star_icon className="fill-custom-pink w-[50px] h-[50px]" />
                ) : (
                  <Star_icon className="w-[50px] h-[50px]" />
                )
              )}
            </div>

            <div className="mb-5 text-white flex items-center">
              <span className="me-2">
                <Calendar_icon />{" "}
              </span>
              <span className="mx-2 ">
                {data?.releaseDate?.day}{" "}
                {convertMonthToText(data?.releaseDate?.month)}{" "}
                {data?.releaseDate?.year}
              </span>
            </div>

            <article className="text-white text-lg md:text-left text-center">
              {data?.plot?.plotText?.plainText}
            </article>
          </div>
        </div>
      </main>

      <div className="p-5 flex items-center flex-col w-full">
        <h2 className="mb-5 text-4xl text-custom-black w-fit">More movies</h2>
        <div className="mt-5 px-custom-side flex flex-wrap gap-7  w-full justify-center mb-5">
          {moreData.map((item, index) => (
            <Card data={item} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Movie;
