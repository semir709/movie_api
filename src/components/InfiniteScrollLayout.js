import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import { fetchFromApi } from "../utils/fetchFromApi";
import { Loading_icon, Message_end } from "../assets/index";
const InfiniteScrollLayout = ({ fetchRequest }) => {
  const target = useRef(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [errorMesage, setErrorMesage] = useState("");

  const fetchData = () => {
    fetchFromApi(fetchRequest + `&page=${page}`)
      .then((res) => {
        if (res.results.length === 0) setHasMore(false);
        else {
          setData((prev) => {
            return [...prev, ...res.results];
          });

          setPage((prev) => prev + 1);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setErrorMesage(err);
      });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(([entries]) => {
      //fetch the data
      if (entries.isIntersecting && hasMore) {
        fetchData();
      }
    });

    if (target.current) {
      observer.observe(target.current);
    }

    return () => {
      observer.disconnect(target.current);
    };
  }, [data]);

  return (
    <div className="mt-5 px-custom-side flex flex-wrap gap-7  w-full justify-center mb-5">
      {/* {errorMesage.length > 0 && <p>{errorMesage}</p>} */}
      {data.map((item, index) => (
        <Card data={item} key={index} />
      ))}
      <div className="w-full " ref={target}></div>
      {loading && (
        <div className="animate-spin">
          <Loading_icon />
        </div>
      )}
      {!hasMore && (
        <div className="flex flex-col items-center">
          <span className="mb-4 text-2xl">You reached the end !!!</span>
          <Message_end />
        </div>
      )}
    </div>
  );
};

export default InfiniteScrollLayout;
