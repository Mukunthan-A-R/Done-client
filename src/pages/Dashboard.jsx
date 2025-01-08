import React from "react";
import TaskSession from "../components/TaskSession";
import LeftMenu from "../components/LeftMenu";

function Dashboard() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full sm:w-2/12 bg-[#243a76] ">
        <LeftMenu></LeftMenu>
      </div>
      <div className="w-full sm:w-10/12 p-4">
        <TaskSession></TaskSession>
      </div>
    </div>
  );
}

export default Dashboard;
