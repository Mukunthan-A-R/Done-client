import React from "react";
import Tools from "./Tools";
import ProjectHolder from "./ProjectHolder";

const LeftMenu = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="p-4">
        <ProjectHolder></ProjectHolder>
        <h2 className="text-white">Left Side (20%)</h2>
        <p className="text-white">
          This is the left section, with a blue background.
        </p>
      </div>
      <Tools></Tools>
    </div>
  );
};

export default LeftMenu;
