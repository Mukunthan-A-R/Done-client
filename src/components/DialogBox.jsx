import React, { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { useRecoilState, useRecoilValue } from "recoil";
import currentTasks, { currentSheet, workBook } from "../data/atoms";

const DialogBox = () => {
  const [taskData, setTaskData] = useRecoilState(currentTasks);
  const [workBookData, setWorkBookData] = useRecoilState(workBook);
  const setCurrentSheetVal = useRecoilValue(currentSheet);

  // State for managing dialog visibility
  const [isOpen, setIsOpen] = useState(false);

  // State for the task title and description input values
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  // Function to open the dialog
  const openDialog = () => {
    setIsOpen(true);
  };

  // Function to close the dialog
  const closeDialog = () => {
    setIsOpen(false);
  };

  // Handle task submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submission

    // You can add your logic here to handle the submitted data
    setTaskData([
      ...taskData,
      {
        title: taskTitle,
        description: taskDescription,
        id: taskData.length + 1,
        status: "pending",
      },
    ]);

    handleWorkBookData(setCurrentSheetVal, {
      title: taskTitle,
      description: taskDescription,
      id: taskData.length + 1,
      status: "pending",
    });

    // Reset form after submission (optional)
    setTaskTitle("");
    setTaskDescription("");

    // Close the dialog
    closeDialog();
  };

  function handleWorkBookData(sheetData, taskData) {
    const data = workBookData.find((val) => sheetData[1] === val.id);
    setWorkBookData(
      workBookData.map((val) =>
        val.id === data.id ? copytask(data, taskData) : val
      )
    );

    function copytask(data, taskData) {
      return { ...data, tasks: [...data.tasks, taskData] };
    }
  }

  return (
    <div className="flex justify-center items-center">
      {/* Button to open the dialog */}
      <button onClick={openDialog}>
        <IoAddCircleOutline size={25} />
      </button>

      {/* Dialog Box */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10 flex justify-center items-center">
          {/* Dialog content */}
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Add Task</h2>
            {/* Form for task input */}
            <form onSubmit={handleSubmit}>
              {/* Task Title Input */}
              <div className="mb-4">
                <label
                  htmlFor="taskTitle"
                  className="block text-sm font-medium text-gray-700"
                >
                  Task Title
                </label>
                <input
                  id="taskTitle"
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={taskTitle}
                  onChange={(e) => setTaskTitle(e.target.value)}
                  required
                />
              </div>

              {/* Task Description Input */}
              <div className="mb-4">
                <label
                  htmlFor="taskDescription"
                  className="block text-sm font-medium text-gray-700"
                >
                  Task Description
                </label>
                <textarea
                  id="taskDescription"
                  rows="4"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={taskDescription}
                  onChange={(e) => setTaskDescription(e.target.value)}
                  required
                />
              </div>

              {/* Submit and Close Buttons */}
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={closeDialog}
                  className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 focus:outline-none"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DialogBox;
