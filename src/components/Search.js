import React, { useEffect, useState } from "react";
import { fetchFromApiAll } from "../utils/fetchFromApi";
import { Loading_icon } from "../assets";
import Card from "./Card";
import { useLocation } from "react-router-dom";

const Search = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMesage, setErrorMesage] = useState("");

  const location = useLocation();
  const path = location.pathname.split("/").pop();

  const input = decodeURIComponent(path);

  useEffect(() => {
    setData([]);
    setLoading(true);
    const fetchData = async () => {
      try {
        const obj = await fetchFromApiAll(
          `titles/search/title/${input}?info=base_info&limit=5`,
          `titles/search/keyword/${input}?info=base_info&limit=5`,
          `titles/search/akas/${input}?info=base_info&limit=5`
        );

        const selectData = [].concat(...obj.map((el) => el.data.results));

        setData([...selectData.slice(0, 10)]);
        setLoading(false);
      } catch (err) {
        setErrorMesage(err);
      }
    };

    fetchData();
  }, [input]);

  return (
    <>
      <div className="mt-5 px-custom-side flex flex-wrap gap-7  w-full justify-center mb-5">
        {errorMesage.length > 0 && <p>{errorMesage}</p>}
        {data.map((item, index) => (
          <Card data={item} key={index} />
        ))}
        {loading && (
          <div className="flex flex-col items-center">
            <h2 className="mb-5 text-3xl">Searching...</h2>
            <div className="animate-spin w-fit h-fit ">
              <Loading_icon />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
