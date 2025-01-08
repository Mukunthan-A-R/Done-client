import React, { useState } from "react";

const Worksheet = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control modal visibility
  const [worksheetName, setWorksheetName] = useState(""); // State to store worksheet name

  // Function to open the dialog box
  const openDialog = () => {
    setIsOpen(true);
  };

  // Function to close the dialog box
  const closeDialog = () => {
    setIsOpen(false);
  };

  // Handle input change
  const handleChange = (e) => {
    setWorksheetName(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setWorksheetName(""); // Clear the input after submission
    closeDialog(); // Close the dialog box after submission
  };

  return (
    <div className="flex justify-center items-center">
      <button
        onClick={openDialog}
        className="bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition-all focus:outline-none"
      >
        Add Worksheet
      </button>

      {/* Dialog Box (Modal) */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-96 shadow-lg transform transition-all duration-300 scale-95 hover:scale-100">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Enter Worksheet Name
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <input
                type="text"
                value={worksheetName}
                onChange={handleChange}
                placeholder="Type worksheet name"
                className="border border-gray-300 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white font-semibold rounded-md p-3 hover:bg-blue-700 transition-all focus:outline-none"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={closeDialog}
                  className="bg-red-500 text-white font-semibold rounded-md p-3 hover:bg-red-600 transition-all focus:outline-none"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Worksheet;
