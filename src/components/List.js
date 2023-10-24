const List = ({ Icon, text, list, toggle, setToggle }) => {
  return (
    <>
      <div
        className={`w-full h-screen bg-red-300 fixed top-0 -translate-y-full transition-all left-0 ${
          toggle && "translate-y-0"
        }`}
      >
        <p onClick={() => setToggle(false)}>Close</p>
        {list.map((val) => (
          <p>{val}</p>
        ))}
      </div>

      <div className="flex items-center group" onClick={() => setToggle(true)}>
        <Icon className="group-hover:fill-custom-pink" />
        <span className="ms-2 group-hover:text-custom-pink">{text}</span>
      </div>
    </>
  );
};

export default List;
