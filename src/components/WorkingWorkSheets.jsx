import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { workSheets } from "../data/atoms";

const WorkingWorkSheets = () => {
  const [data, setData] = useRecoilState(workSheets);

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
            <button className=" py-2 w-full flex hover:bg-blue-800">
              {val[0]}
            </button>
          </li> // Ensure to return the <li> element here
        ))}
      </ul>
    </div>
  );
};

export default WorkingWorkSheets;
