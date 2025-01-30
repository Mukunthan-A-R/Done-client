import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { workSheets, currentSheet } from "../data/atoms";

const WorkingWorkSheets = () => {
  const [data, setData] = useRecoilState(workSheets);
  // const [currentSheetVal, setCurrentSheetVal] = useRecoilState(currentSheet);

  const handleCurrentSheetVal = (data) => {
    console.log("clicked");

    setCurrentSheetVal(data);
  };

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
              className=" py-2 w-full flex hover:bg-blue-800"
              onClick={() => {
                console.log("Hello");
                handleCurrentSheetVal(val);
                // console.log(currentSheetVal);
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
