import React from "react";
import TaskSession from "../components/TaskSession";
import { useRecoilValue } from "recoil";
import { currentSheet } from "../data/atoms";
import Tools from "./Tools";

const WorkBook = () => {
  const sheet = useRecoilValue(currentSheet);
  return (
    <div className="flex ">
      <Tools></Tools>
      <TaskSession></TaskSession>
    </div>
  );
};

export default WorkBook;
