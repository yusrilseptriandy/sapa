import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { titleLeft, titleRight } = props;
  return (
    <nav className="border-b grid grid-cols-7 min-h-max p-3 sticky top-0 bg-white">
      <div className="rounded-full text-white bg-sky-700 py-1 col-start-1 col-span-3 text-xl font-bold place-items-center grid cursor-pointer ">
        <Link to={"/home"}>{titleLeft}</Link>
      </div>
      <div className="col-start-4 px-3 text-slate-500 place-items-center grid">
        •
      </div>
      <div className=" py-1 col-start-5 col-end-8 text-xl font-bold place-items-center grid cursor-pointer">
        {titleRight}
      </div>
    </nav>
  );
};

export default Header;
