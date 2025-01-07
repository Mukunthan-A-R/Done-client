import React from "react";
import Tools from "./Tools";
import SliderDown from "./SliderDown";

const LeftMenu = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="p-4">
        <h2 className="text-white">Left Side (20%)</h2>
        <p className="text-white">
          This is the left section, with a blue background.
        </p>
        <SliderDown></SliderDown>
      </div>
      <Tools></Tools>
    </div>
  );
};

export default LeftMenu;
