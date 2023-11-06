import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import { fetchFromApi } from "../utils/fetchFromApi";

const Layout = ({ fetchRequest }) => {
  const target = useRef();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  console.log(fetchRequest + `&page=${page}`);

  useEffect(() => {
    fetchFromApi(fetchRequest + `&page=${page}`).then((res) => {
      setData(res.results);
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        fetchFromApi(fetchRequest + `&page=${page}`).then((res) => {
          setData((prev) => {
            return [...prev, ...res.results];
          });
          setPage((prev) => prev + 1);
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
  }, [data]);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="mt-5 px-custom-side flex flex-wrap gap-7  w-full justify-center mb-5">
      {data.map((item, index) => (
        <Card data={item} />
      ))}
      <div ref={target}></div>
      {/* {loading ? <p>Loading...</p> : <div ref={target}></div>} */}
    </div>
  );
};

export default Layout;
