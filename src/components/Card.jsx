import React, { useState } from "react";
import { useRecoilState } from "recoil";
import currentTasks from "../data/atoms";

const Card = ({ id, title, children, status = "pending" }) => {
  // State for managing the dropdown visibility and selected option
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(status);
  const [taskData, setTaskData] = useRecoilState(currentTasks);

  // Toggle the dropdown visibility
  const toggleDropdown = () => setDropdownVisible(!dropdownVisible);

  const currentTask = taskData.find((task) => task.id === id);

  const bgColor =
    selectedOption === "active"
      ? "bg-green-200"
      : selectedOption === "completed"
      ? "bg-green-700"
      : "bg-red-300";

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
    const updatedTasks = taskData.map((task) => {
      if (task.id !== id) {
        return task;
      }
      return 1;
    });
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
        className={`w-full max-w-md py-5 px-5  rounded-lg shadow-lg relative ${bgColor} `}
      >
        <h2 className="text-xl font-bold mb-1">{title}</h2>
        <p className="text-base mb-2">{children}</p>

        <div className="mt-6">
          {selectedOption && (
            <p className="bg-gray-100 p-3 rounded-md text-sm">
              Selected Option: {selectedOption}
            </p>
          )}
        </div>

        {/* Three dot button on the top-right */}
        <button
          onClick={toggleDropdown}
          className="absolute top-4 right-4 focus:outline-none"
        >
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
        </button>

        {/* Dropdown Menu */}
        {dropdownVisible && (
          <div className="absolute top-12 right-4 bg-white text-black rounded-lg shadow-lg w-40">
            <ul className="px-2 py-1">
              <li
                className={`cursor-pointer hover:bg-gray-200 px-2 py-1 rounded ${
                  selectedOption === "Option 1" ? "bg-gray-300" : ""
                }`}
                onClick={handleSetActive}
              >
                Active
              </li>
              <li
                className={`cursor-pointer hover:bg-gray-200 px-2 py-1 rounded ${
                  selectedOption === "Option 2" ? "bg-gray-300" : ""
                }`}
                onClick={handleSetCompleted}
              >
                Completed
              </li>
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
