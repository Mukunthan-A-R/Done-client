import React from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";

const Tools = () => {
  return (
    <div className="bg-gray-200 p-2 md:px-3 flex flex-col items-center gap-5">
      <p className="font-medium ">Tools</p>
      <IoAddCircleOutline size={25} />
      <IoSettingsOutline size={25} />
    </div>
  );
};

export default Tools;
