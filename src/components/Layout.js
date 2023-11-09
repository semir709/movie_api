import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import { fetchFromApi } from "../utils/fetchFromApi";
import { Loading_icon, Message_end } from "../assets/index";
import { useLocation } from "react-router-dom";

const Layout = ({ fetchRequest }) => {
  const target = useRef(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  let page = 1;
  const maxPage = 50; //How to define when we don't have any new data

  useEffect(() => {
    fetchFromApi(fetchRequest + `&page=${page}`).then((res) => {
      setData([...res.results]);
      setLoading(false);
    });
  }, [fetchRequest]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        page++;
        setLoading(true);
        console.log(fetchRequest + `&page=${page}`);
        fetchFromApi(fetchRequest + `&page=${page}`).then((res) => {
          setData((prev) => {
            return [...prev, ...res.results];
          });

          setLoading(false);
        });
      }
    });

    if (target.current) {
      observer.observe(target.current);
    }

    return () => {
      if (target.current) {
        observer.unobserve(target.current);
      }
    };
  }, [target]);

  return (
    <div className="mt-5 px-custom-side flex flex-wrap gap-7  w-full justify-center mb-5">
      {data && data.map((item, index) => <Card data={item} />)}
      {page < maxPage && <div className="w-full" ref={target}></div>}

      {loading && (
        <div className="w-full flex justify-center">
          <Loading_icon className="animate-spin" />
        </div>
      )}

      {page === maxPage && (
        <div className="flex flex-col items-center">
          <span className="mb-4 text-2xl">You reached the end !!!</span>
          <Message_end />
        </div>
      )}
    </div>
  );
};

export default Layout;
