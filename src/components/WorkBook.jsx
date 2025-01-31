import React from "react";
import TaskSession from "../components/TaskSession";
import { useRecoilState, useRecoilValue } from "recoil";
import { currentSheet, workBook } from "../data/atoms";
import Tools from "./Tools";

const WorkBook = () => {
  const sheet = useRecoilValue(currentSheet);
  const [taskData, setTaskData] = useRecoilState(workBook);
  // console.log(taskData);
  // console.log(taskData.filter((val) => val.id === sheet[1]));
  const data = taskData.find((val) => val.id === sheet[1]);
  // console.log(taskData);
  console.log(data);

  return (
    <div className="flex ">
      <Tools></Tools>
      <TaskSession taskData={data.tasks}></TaskSession>
    </div>
  );
};

export default WorkBook;
