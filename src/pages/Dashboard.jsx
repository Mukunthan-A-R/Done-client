import React from "react";
import LeftMenu from "../components/LeftMenu";
import WorkBook from "../components/WorkBook";

function Dashboard() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full sm:w-2/12 bg-[#243a76] ">
        <LeftMenu></LeftMenu>
      </div>
      <div className="w-full sm:w-10/12 p-4">
        <WorkBook></WorkBook>
      </div>
    </div>
  );
}

export default Dashboard;
