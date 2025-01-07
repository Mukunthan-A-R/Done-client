import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useRecoilState } from "recoil";
import currentTasks from "../data/atoms";

const DeleteConfirmationDialog = ({ isOpen, onClose, onDelete }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Delete All Data
        </h3>
        <p className="text-gray-600 mb-6">
          Are you sure you want to permanently delete all the data? This action
          cannot be undone.
        </p>

        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Cancel
          </button>

          <button
            onClick={onDelete}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

const DeleteAll = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [taskData, setTaskData] = useRecoilState(currentTasks);

  const handleDelete = () => {
    // Handle delete logic here
    setTaskData([]);
    setIsDialogOpen(false);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div>
      <button onClick={() => setIsDialogOpen(true)}>
        <AiOutlineDelete size={25} />
      </button>

      <DeleteConfirmationDialog
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default DeleteAll;
