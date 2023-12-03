import React, { useEffect, useState } from "react";
import { fetchFromApi } from "../utils/fetchFromApi";
import { useLocation } from "react-router-dom";
import { caculateRating } from "../utils/fetchFromApi";
import { Star_icon } from "../assets";
import { Calendar_icon } from "../assets";
import { convertMonthToText } from "../utils/constants";

const Movie = () => {
  const [data, setData] = useState(null);
  const [rating, setRating] = useState([0, 0, 0, 0, 0]);
  const url = useLocation();
  const id = url.pathname.split("/").pop();
  useEffect(() => {
    setData([]);
    const fetchData = async () => {
      try {
        const obj = await fetchFromApi(`titles/${id}?info=base_info`);
        setData(obj.results);
      } catch (err) {
        // setErrorMesage(err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setRating(caculateRating(rating, data?.ratingsSummary));
  }, [data]);

  useEffect(() => {
    console.log(data);
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

        <div className="absolute top-1/2 w-full -translate-y-1/2 left-0 px-custom-side">
          <div className="w-1/2">
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

            <article className="text-white text-lg ">
              {data?.plot?.plotText?.plainText}
            </article>
          </div>
        </div>
      </main>

      <div className="p-5 flex justify-center">
        <h2 className="mb-5 text-4xl text-custom-black">Simular movies</h2>
      </div>
    </>
  );
};

export default Movie;
