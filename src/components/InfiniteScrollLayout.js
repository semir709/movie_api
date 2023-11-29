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
  const [newRequest, setNewRequest] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const obj = await fetchFromApi(fetchRequest + `&page=${page}`);
      setData([...obj.results]);
      setNewRequest(fetchRequest);
    };
    fetchData();
  }, [fetchRequest]);

  useEffect(() => {
    if (data.length === 0) return;

    const observer = new IntersectionObserver(([entries]) => {
      if (entries.isIntersecting && hasMore) {
        const fetchData = async () => {
          const obj = await fetchFromApi(newRequest + `&page=${page}`);
          setData((prev) => [...prev, ...obj.results]);
        };
        fetchData();
      }
    });

    if (target.current) {
      observer.observe(target.current);
    }

    return () => {
      observer.disconnect(target.current);
    };
  }, [newRequest]);

  return (
    <div className="mt-5 px-custom-side flex flex-wrap gap-7  w-full justify-center mb-5">
      {/* {errorMesage.length > 0 && <p>{errorMesage}</p>} */}
      {data.map((item, index) => (
        <Card data={item} key={index} />
      ))}
      <div className="w-full bg-red-300  p-5" ref={target}></div>
      {/* {loading && (
        <div className="animate-spin">
          <Loading_icon />
        </div>
      )} */}
      {/* {!hasMore && (
        <div className="flex flex-col items-center">
          <span className="mb-4 text-2xl">You reached the end !!!</span>
          <Message_end />
        </div>
      )} */}
    </div>
  );
};

export default InfiniteScrollLayout;
