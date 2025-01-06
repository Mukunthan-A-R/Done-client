import React from "react";
import TaskSession from "../components/TaskSession";
import LeftMenu from "../components/LeftMenu";

function Dashboard() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Division - 30% width on medium screens and up, full width on mobile */}
      <div className="w-full sm:w-2/12 bg-[#243a76] ">
        <LeftMenu></LeftMenu>
      </div>

      {/* Right Division - 70% width on medium screens and up, full width on mobile */}
      <div className="w-full sm:w-10/12 p-4">
        {/* Content for the right side */}
        <TaskSession></TaskSession>
        {/* <h2 className="text-gray-800">Right Side (70%)</h2>
        <p className="text-gray-800">
          This is the right section, occupying 70% of the width.
        </p> */}
      </div>
    </div>
  );
}

export default Dashboard;
