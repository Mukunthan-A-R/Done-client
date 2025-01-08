import { atom } from "recoil";
import tasks from "./data";

const currentTasks = atom({
  key: "currentTaskState",
  default: tasks,
});

export const workSheets = atom({
  key: "workSheets",
  default: [],
});

export default currentTasks;
