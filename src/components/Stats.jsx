import React, { useEffect, useState } from "react";
import { IoStatsChartOutline } from "react-icons/io5";
import Dashboard from "./Dashboard";
import { useRecoilState } from "recoil";
import currentTasks from "../data/atoms";

const EmptyDialog = ({ isOpen, onClose }) => {
  const [taskData, setTaskData] = useRecoilState(currentTasks);

  // State for task counts
  const [taskCount, setTaskCount] = useState({
    pending: 0,
    active: 0,
    completed: 0,
  });

  // UseEffect to calculate task counts when taskData changes
  useEffect(() => {
    const newTaskCount = { pending: 0, active: 0, completed: 0 };

    // Iterate over taskData and update the count
    taskData.forEach((task) => {
      if (task.status === "pending") {
        newTaskCount.pending += 1;
      } else if (task.status === "active") {
        newTaskCount.active += 1;
      } else if (task.status === "completed") {
        newTaskCount.completed += 1;
      }
    });

    // Update task count state after calculations
    setTaskCount(newTaskCount);
  }, [taskData]); // Re-run when taskData changes

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-auto w-full">
        <div className="flex ">
          <div>
            <h3 className="font-bold">Stats</h3>
          </div>
          <Dashboard>{taskCount}</Dashboard>
        </div>
        <div className="flex justify-end space-x-4 pt-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const Stats = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div>
      <button onClick={() => setIsDialogOpen(true)}>
        <IoStatsChartOutline size={25} />
      </button>

      <EmptyDialog isOpen={isDialogOpen} onClose={handleCloseDialog} />
    </div>
  );
};

export default Stats;
