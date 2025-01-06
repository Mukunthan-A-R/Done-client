import React, { useState } from "react";
import Pending from "./Pending";
import Active from "./Active";
import Completed from "./Completed";
import { useRecoilState } from "recoil";
import currentTasks from "../data/atoms";

function TaskSession() {
  const [taskData, setTaskData] = useRecoilState(currentTasks);
  return (
    <div className="h-screen flex flex-col md:flex-row">
      {/* Outer Container for 3 Sections */}
      <div className="flex flex-col md:flex-row w-full h-full">
        {/* First Container */}
        <Pending tasks={taskData}></Pending>

        {/* Second Container */}
        <Active tasks={taskData}></Active>

        {/* Third Container */}
        <Completed tasks={taskData}></Completed>
      </div>
    </div>
  );
}

export default TaskSession;
