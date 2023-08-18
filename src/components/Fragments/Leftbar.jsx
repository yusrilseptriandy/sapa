import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Leftbar = () => {
  return (
    <div className="Leftbar sticky bg-white top-0  h-screen col-span-3 py-2 grid grid-cols-6 grid-rows-6 ">
      <div className="logo col-start-3 col-span-6 p-2">
        <img src="../public/sapa.png" width={50} className="cursor-pointer" />
      </div>

      <div className="col-start-1 mx-0.5 xl:col-start-2 col-end-6">
        <ul className="cursor-pointer">
          <Link to={"/home"}>
            <li
              className="
        flex items-center 
        mb-3 
        rounded-full 
        py-1  
        px-2  
        hover:bg-slate-200 
        transition-all"
            >
              <Icon
                icon="tabler:smart-home"
                width="35"
                height="35"
                className="text-slate-800"
              />
              <span className="ml-5 font-bold">Home</span>
            </li>
          </Link>

          <li
            className="
        flex 
        items-center 
        mb-3
        rounded-full 
        py-1  
        px-2 
        hover:bg-slate-200 
        transition-all"
          >
            <Icon
              icon="tabler:search"
              width="35"
              height="35"
              className="text-slate-800"
            />
            <span className="ml-5 font-bold">Search</span>
          </li>

          <li
            className="
        flex 
        items-center 
        rounded-full
        mb-3
        py-1  
        px-2 
        hover:bg-slate-200 
        transition-all
        "
          >
            <Icon
              icon="tabler:bell"
              width="35"
              height="35"
              className="text-slate-800"
            />
            <span className="ml-5 font-bold">Notifications</span>
          </li>

          <Link to={"/messages"}>
            <li
              className="
        flex 
        items-center 
        rounded-full
        mb-3
        py-1  
        px-2 
        hover:bg-slate-200 
        transition-all
        "
            >
              <Icon
                icon="tabler:message"
                width="35"
                height="35"
                className="text-slate-800"
              />
              <span className="ml-5 font-bold">Messages</span>
            </li>
          </Link>

          <Link to={"/profile"}>
            <li
              className="
        flex 
        items-center 
        rounded-full
        mb-3
        py-1 
        px-2 
        hover:bg-slate-200 
        transition-all"
            >
              <Icon
                icon="majesticons:user-line"
                width="35"
                height="35"
                className="text-slate-800"
              />
              <span className="ml-5 font-bold">Profile</span>
            </li>
          </Link>

          <li
            className="
        flex 
        items-center 
        rounded-full
        mb-3
        py-1 
        px-2 
        hover:bg-slate-200 
        transition-all
        "
          >
            <Icon
              icon="tabler:logout"
              width="35"
              height="35"
              className="text-slate-800"
            />
            <span className="ml-5 font-bold">Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Leftbar;
