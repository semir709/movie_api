import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Close_icon } from "../assets";

const List = ({ Icon, text, list }) => {
  const [toggle, setToggle] = useState(false);
  const [current, setCurrent] = useState(-1);

  useEffect(() => {
    if (toggle === false) {
      setCurrent(-1);
      return;
    }

    console.log(current);
    const timeId = setInterval(() => {
      setCurrent((prev) => (prev < list.length - 1 ? prev + 1 : prev));
    }, 10);

    return () => clearInterval(timeId);
  }, [toggle]);
  return (
    <>
      <div
        className={`w-full min-h-0 bg-custom-white text-custom-black fixed top-0 -translate-y-full transition-all left-0 ${
          toggle && "translate-y-0 min-h-full"
        }`}
      >
        <div className="flex flex-col md:flex-row justify-between items-center mx-custom-side mt-5">
          <h2 className="text-3xl ">{text}</h2>
          <button
            onClick={() => setToggle(false)}
            className=" md:mt-0 mt-[100px] "
          >
            <Close_icon className="fill-black w-[30px] h-[30px] md:w-[20px] md:h-[20px]" />
          </button>
        </div>

        <div className="w-full py-[100px] px-custom-side">
          <ul className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3  w-full justify-items-center items-start text-2xl">
            {list.map(({ value, text }, index) => (
              <li className="mb-5 text-center overflow-hidden px-2" key={value}>
                <Link
                  to={`/category/${value}`}
                  onClick={() => setToggle(false)}
                >
                  <div
                    className={`duration-200 hover:underline`}
                    style={
                      index <= current
                        ? { translate: "0px 0px" }
                        : { translate: "0px 100%" }
                    }
                  >
                    <span className=" underline-offset-[15px]">{text}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex items-center group" onClick={() => setToggle(true)}>
        <Icon className="group-hover:fill-custom-pink" />
        <span className="ms-2 group-hover:text-custom-pink">{text}</span>
      </div>
    </>
  );
};

export default List;
