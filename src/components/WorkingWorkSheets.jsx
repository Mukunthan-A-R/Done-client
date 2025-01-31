import React, { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { workSheets, currentSheet } from "../data/atoms";

const WorkingWorkSheets = () => {
  const [currentSelection, setCurrentSelection] = useState("");
  const [data, setData] = useRecoilState(workSheets);
  const setCurrentSheetVal = useSetRecoilState(currentSheet);

  // Using useEffect to track changes in 'data'
  useEffect(() => {
    // console.log("Data changed:", data);
  }, [data]); // This will run whenever 'data' changes

  return (
    <div>
      <ul>
        {data.map((val) => (
          <li
            className={` ${
              val[1] < data.length - 1 ? "border-b border-gray-300" : ""
            }`}
            key={val[1]}
          >
            <button
              className={`px-2 pl-4 rounded-lg py-2 w-full flex hover:bg-blue-800 ${
                currentSelection === val[1] ? "bg-blue-600" : ""
              } `}
              onClick={() => {
                setCurrentSheetVal(val);
                setCurrentSelection(val[1]);
              }}
            >
              {val[0]}
            </button>
          </li> // Ensure to return the <li> element here
        ))}
      </ul>
    </div>
  );
};

export default WorkingWorkSheets;
