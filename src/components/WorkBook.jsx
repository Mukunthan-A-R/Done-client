import React from "react";
import TaskSession from "../components/TaskSession";
import { useRecoilValue } from "recoil";
import { currentSheet } from "../data/atoms";

const WorkBook = () => {
  const sheet = useRecoilValue(currentSheet);
  return <TaskSession></TaskSession>;
};

export default WorkBook;
