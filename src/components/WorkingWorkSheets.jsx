import React, { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { workSheets, currentSheet } from "../data/atoms";

const WorkingWorkSheets = () => {
  const [data, setData] = useRecoilState(workSheets);
  // const [data1, setData1] = useRecoilState(currentSheet);
  const [currentSheetVal, setCurrentSheetVal] = useRecoilState(currentSheet);

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
              className={`px-2 pl-4 py-2 rounded-md w-full flex hover:bg-blue-800 ${
                currentSheetVal[1] === val[1] ? "bg-blue-600 text-white" : ""
              }`}
              onClick={() => {
                setCurrentSheetVal(val);
                // console.log(val);
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
