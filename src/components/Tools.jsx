import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { IoStatsChartOutline } from "react-icons/io5";

import DialogBox from "./DialogBox";
import DeleteAll from "./DeleteConfirmationDialog";

const Tools = () => {
  return (
    <div className="bg-gray-200 p-2 md:px-3 flex flex-col items-center gap-5">
      <p className="font-medium ">Tools</p>
      <DialogBox />
      <DeleteAll></DeleteAll>

      <button>
        <IoSettingsOutline size={25} />
      </button>
      <button>
        <IoStatsChartOutline size={25} />
      </button>
    </div>
  );
};

export default Tools;
