import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import { fetchFromApi } from "../utils/fetchFromApi";
import { Loading_icon, Message_end } from "../assets/index";
const InfiniteScrollLayout = ({ fetchRequest }) => {
  const target = useRef(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [end, setEnd] = useState(false);
  const [page, setPage] = useState(1);
  const maxPage = 5; //How to define when we don't have any new data
  const [isIntersect, setIsIntersect] = useState(false);
  const [errorMesage, setErrorMesage] = useState("");

  // First request
  useEffect(() => {
    setLoading(true);
    setEnd(false);
    setPage(1);
    fetchFromApi(fetchRequest + `&page=${page}`).then((res) => {
      setData([...res.results]);
      setLoading(false);
    });
  }, [fetchRequest]);

  //Creating observer
  useEffect(() => {
    const observer = new IntersectionObserver(([entries]) => {
      setIsIntersect(entries.isIntersecting);
    });

    if (target.current) {
      observer.observe(target.current);
    }

    return () => {
      observer.disconnect(target.current);
    };
  }, [fetchRequest, target.current]);

  //fetching every nexe page
  useEffect(() => {
    if (isIntersect) {
      setLoading(true);
      setPage((prev) => prev + 1);

      fetchFromApi(fetchRequest + `&page=${page}`)
        .then((res) => {
          setData((prev) => {
            return [...prev, ...res.results];
          });
          setLoading(false);
          if (page === maxPage) setEnd(true);
        })
        .catch((err) => {
          console.log(err);
          setErrorMesage(err);
        });
    }
  }, [isIntersect]);

  return (
    <div className="mt-5 px-custom-side flex flex-wrap gap-7  w-full justify-center mb-5">
      {errorMesage.length > 0 && <p>{errorMesage}</p>}
      {data.map((item, index) => (
        <Card data={item} key={index} />
      ))}
      {!end && <div className="w-full " ref={target}></div>}
      {loading && !end && (
        <div className="animate-spin">
          <Loading_icon />
        </div>
      )}
      {end && (
        <div className="flex flex-col items-center">
          <span className="mb-4 text-2xl">You reached the end !!!</span>
          <Message_end />
        </div>
      )}
    </div>
  );
};

export default InfiniteScrollLayout;
