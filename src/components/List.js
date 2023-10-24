import { useState } from "react";
import { Link } from "react-router-dom";

const List = ({ Icon, text, list }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div
        className={`w-full h-screen bg-red-300 fixed top-0 -translate-y-full transition-all left-0 ${
          toggle && "translate-y-0"
        }`}
      >
        <div className="flex justify-end me-custom-side mt-5">
          <button
            onClick={() => setToggle(false)}
            className="hover:underline underline-offset-8"
          >
            Close
          </button>
        </div>

        <div className="w-full py-[100px] px-custom-side">
          <ul className="grid grid-cols-5 w-full justify-items-center text-2xl">
            {list.map(({ value, text }) => (
              <li className="mb-5 text-center" key={value}>
                <Link to={`/category/${value}`}>
                  <span className="hover:underline underline-offset-[15px] ">
                    {text}
                  </span>
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
