import React, { useState } from "react";
import { useRecoilState } from "recoil";
import currentTasks from "../data/atoms";

const Card = ({ id, title, children, status, timeDuration, cerated }) => {
  // State for managing the dropdown visibility and selected option
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(status);
  const [taskData, setTaskData] = useRecoilState(currentTasks);

  // Current Date
  const currentDate = new Date();
  const RemainingTime = calculateTimeDifference(currentDate, cerated);
  // console.log(RemainingTime);
  const cardBg = (RemainingTime) => {
    // console.log(RemainingTime);

    if (RemainingTime[0] >= 2) {
      return "bg-green-500";
    } else if (RemainingTime[0] === 1) {
      return "bg-lime-500";
    } else if (RemainingTime[0] === 0) {
      if (RemainingTime[1] <= 20) return "bg-yellow-400";
    } else if (RemainingTime[0] === 0) {
      return "bg-amber-500";
    }
    return "bg-red-500";
  };
  cardBg(RemainingTime);

  // Toggle the dropdown visibility
  const toggleDropdown = () => setDropdownVisible(!dropdownVisible);

  const currentTask = taskData.find((task) => task.id === id);

  const handleSetActive = () => {
    setSelectedOption("active");
    setDropdownVisible(false);
    const updatedTasks = taskData.map((task) => {
      if (task.id === id) {
        return { ...task, status: "active" };
      }
      return task;
    });
    setTaskData(updatedTasks);
  };

  const handleSetCompleted = () => {
    setSelectedOption("completed");
    setDropdownVisible(false);
    const updatedTasks = taskData.map((task) => {
      if (task.id === id) {
        return { ...task, status: "completed" };
      }
      return task;
    });
    setTaskData(updatedTasks);
  };

  const handleSetDelete = () => {
    setSelectedOption("delete");
    setDropdownVisible(false);
    const updatedTasks = taskData.filter((task) => task.id !== id);
    setTaskData(updatedTasks);
  };

  // const handleSetTaskData = () => {
  //   const updatedTasks = taskData.map((task) => {
  //     if (task.id === id) {
  //       return { ...task, status: "active" };
  //     }
  //     return task;
  //   });
  //   setTaskData(updatedTasks);
  // };

  return (
    <div className="flex justify-center mt-4">
      {/* Card with Heading and Description */}
      <div
        className={`w-full max-w-md py-5 px-5  rounded-lg shadow-lg relative  ${
          status != "completed" ? cardBg(RemainingTime) : "bg-green-300"
        }`}
      >
        <h2 className="text-xl font-bold mb-1">{title}</h2>
        <p className="text-base mb-2">{children}</p>
        <p>Duration:{` ${timeDuration}${timeDuration === 1 ? "hr" : "hrs"}`}</p>
        {status !== "completed" && (
          <p>
            Remaining Time :{" "}
            {`${RemainingTime[0] === 0 ? "" : RemainingTime[0] + "day"} `}
            {`${
              RemainingTime[1] === 0 && RemainingTime[0] === 0
                ? ""
                : RemainingTime[1] + "hr"
            } `}
            {`${RemainingTime[2] + "min"} `}
          </p>
        )}
        {/* Three dot or cross button on the top-right */}
        <button
          onClick={toggleDropdown}
          className="absolute top-4 right-4 focus:outline-none"
        >
          {dropdownVisible ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 12h12M6 6h12M6 18h12"
              />
            </svg>
          )}
        </button>

        {/* Dropdown Menu */}
        {dropdownVisible && (
          <div className="absolute top-12 right-4 bg-white text-black rounded-lg shadow-lg w-40 z-10">
            <ul className="px-2 py-1">
              {!(status === "active") && (
                <li
                  className={`cursor-pointer hover:bg-gray-200 px-2 py-1 rounded ${
                    selectedOption === "Option 1" ? "bg-gray-300" : ""
                  }`}
                  onClick={handleSetActive}
                >
                  Active
                </li>
              )}
              {!(status === "completed") && (
                <li
                  className={`cursor-pointer hover:bg-gray-200 px-2 py-1 rounded ${
                    selectedOption === "Option 2" ? "bg-gray-300" : ""
                  }`}
                  onClick={handleSetCompleted}
                >
                  Completed
                </li>
              )}
              <li
                className={`cursor-pointer hover:bg-gray-200 px-2 py-1 rounded ${
                  selectedOption === "Option 3" ? "bg-gray-300" : ""
                }`}
                onClick={handleSetDelete}
              >
                Delete
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;

const calculateTimeDifference = (date1, date2) => {
  // Ensure both date parameters are Date objects
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  // Calculate the difference in milliseconds
  const timeDifference = d2 - d1;

  // Convert milliseconds to time units
  const millisecondsInOneDay = 1000 * 60 * 60 * 24;
  const millisecondsInOneHour = 1000 * 60 * 60;
  const millisecondsInOneMinute = 1000 * 60;
  const millisecondsInOneSecond = 1000;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(Math.abs(timeDifference) / millisecondsInOneDay);
  const hours = Math.floor(
    Math.abs(timeDifference % millisecondsInOneDay) / millisecondsInOneHour
  );
  const minutes = Math.floor(
    Math.abs(timeDifference % millisecondsInOneHour) / millisecondsInOneMinute
  );
  const seconds = Math.floor(
    Math.abs(timeDifference % millisecondsInOneMinute) / millisecondsInOneSecond
  );

  const result = [days, hours, minutes, seconds];

  // If date1 is later, the difference should be negative
  if (timeDifference < 0) {
    result[0] = -result[0]; // Make the days negative
    result[1] = -result[1]; // Make the hours negative
    result[2] = -result[2]; // Make the minutes negative
    result[3] = -result[3]; // Make the seconds negative
  }

  return result;
};
