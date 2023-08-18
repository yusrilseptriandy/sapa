import React from "react";
import { Icon } from "@iconify/react";

const RightBar = () => {
  return (
    <div className="rightBar sticky top-0 h-screen bg-white col-span-3 flex flex-col gap-2 p-3 w-full">
      <div className="profile w-full h-max p-2 bg-white shadow-sm rounded-xl border flex">
        <div className="img">
          <img
            src="../public/pf.jpg"
            alt="profile-img"
            className="w-10 rounded-full cursor-pointer"
          />
        </div>

        <div className="profile-name flex-col mx-2">
          <div className="username flex">
            <span className="font-bold cursor-pointer">yusrilsptr</span>
            <Icon
              icon="ic:round-verified"
              color="#006fa8"
              width="20"
              height="20"
            />
          </div>

          <div className="name">
            <span className="font-bold text-sm tracking-tighter">
              Yusril Septriandy. N. Y
            </span>
          </div>
        </div>
      </div>

      <div className="w-100 h-max bg-white flex flex-row p-3 rounded-xl border shadow-sm">
        <div className="tranding flex place-items-center">
          <Icon icon="tabler:flame" color="#006fa8" width="35" height="35" />
          <h1 className="font-extrabold text-[#006fa8]">Tranding</h1>
          <h1 className="font-bold italic text-sm mx-3 text-[#006fa8]">soon</h1>
        </div>
      </div>

      <div className="w-100 h-max bg-white flex flex-row p-2 rounded-xl border shadow-sm">
        <button className="create-post flex place-items-center w-full">
          <Icon icon="tabler:square-rounded-plus" width="35" height="35" />
          <span className="mx-1 font-bold">Create a post</span>
        </button>
      </div>

      <div className="w-100 h-max bg-white flex flex-row p-2 rounded-xl border shadow-sm">
        <button className="save flex place-items-center w-full">
          <Icon icon="tabler:bookmarks" width="30" height="30" />
          <span className="mx-1 font-bold">Saved</span>
        </button>
      </div>
    </div>
  );
};

export default RightBar;
