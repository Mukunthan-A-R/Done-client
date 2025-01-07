import React, { useState } from "react";
import { IoStatsChartOutline } from "react-icons/io5";
import Dashboard from "./Dashboard";

const EmptyDialog = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
        {/* Empty dialog content goes here */}
        <Dashboard></Dashboard>
        <div className="flex justify-end space-x-4">
          {/* Close button */}
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
