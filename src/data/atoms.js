import { atom } from "recoil";
import tasks from "./data";

const currentTasks = atom({
  key: "currentTaskState",
  default: tasks,
});

export const workBook = atom({
  key: "workBook",
  default: [],
});

export const workSheets = atom({
  key: "workSheets",
  default: [],
});

export const currentSheet = atom({
  key: "currentSheetState",
  deafult: [],
});

export default currentTasks;
