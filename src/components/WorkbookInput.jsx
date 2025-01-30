import React, { useState } from "react";

const WorkbookInput = () => {
  const [workbookName, setWorkbookName] = useState(""); // State to store input value
  const [submittedName, setSubmittedName] = useState(""); // State to store submitted value

  const handleChange = (e) => {
    setWorkbookName(e.target.value); // Update the workbook name state as the user types
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submit action
    setSubmittedName(workbookName); // Save the entered name
    // console.log(workbookName);

    setWorkbookName(""); // Reset input field after submission
  };

  return (
    <div className="w-full max-w-lg mx-auto mt-10 p-4">
      {/* <form onSubmit={handleSubmit} className="flex flex-col space-y-4"> */}
      <label htmlFor="workbookName" className="text-lg font-semibold">
        Enter Workbook Name:
      </label>
      <input
        type="text"
        id="workbookName"
        name="workbookName"
        value={workbookName}
        onChange={handleChange}
        className="border border-gray-300 rounded-md p-2"
        placeholder="Type workbook name"
      />
      <button
        onClick={handleSubmit}
        type="submit"
        className="bg-blue-500 text-white font-semibold rounded-md p-2 hover:bg-blue-600 transition-all"
      >
        Submit
      </button>
      {/* </form> */}

      {submittedName && (
        <div className="mt-4 p-4 bg-gray-100 border border-gray-300 rounded-md">
          <h3 className="text-xl font-bold">Submitted Workbook Name:</h3>
          <p>{submittedName}</p>
        </div>
      )}
    </div>
  );
};

export default WorkbookInput;
