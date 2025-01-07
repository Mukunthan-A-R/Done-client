import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";
import DialogBox from "./DialogBox";

const Tools = () => {
  return (
    <div className="bg-gray-200 p-2 md:px-3 flex flex-col items-center gap-5">
      <p className="font-medium ">Tools</p>
      <DialogBox />

      <button>
        <AiOutlineDelete size={25} />
      </button>
      <button>
        <IoSettingsOutline size={25} />
      </button>
    </div>
  );
};

export default Tools;
