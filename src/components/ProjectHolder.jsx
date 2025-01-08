import React from "react";
import Accordion from "./Accordion";
import Worksheet from "./Worksheet";

const ProjectHolder = () => {
  return (
    <div className="text-white font-medium font-lg">
      <Accordion></Accordion>
      <Worksheet></Worksheet>
    </div>
  );
};

export default ProjectHolder;
