import React, { useState } from "react";
import { useRecoilState } from "recoil";
import currentTasks from "../data/atoms";

const Card = ({
  id,
  title,
  children,
  status = "pending",
  timeDuration,
  cerated,
}) => {
  // State for managing the dropdown visibility and selected option
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(status);
  const [taskData, setTaskData] = useRecoilState(currentTasks);

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

  const handleSetTaskData = () => {
    const updatedTasks = taskData.map((task) => {
      if (task.id === id) {
        return { ...task, status: "active" };
      }
      return task;
    });
    setTaskData(updatedTasks);
  };

  return (
    <div className="flex justify-center mt-4">
      {/* Card with Heading and Description */}
      <div
        className={`w-full max-w-md py-5 px-5  rounded-lg shadow-lg relative bg-gray-100 `}
      >
        <h2 className="text-xl font-bold mb-1">{title}</h2>
        <p className="text-base mb-2">{children}</p>
        <p>Duration:{` ${timeDuration}${timeDuration === 1 ? "hr" : "hrs"}`}</p>
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
