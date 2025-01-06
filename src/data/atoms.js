import { atom } from "recoil";
import tasks from "./data";

const currentTasks = atom({
  key: "currentTaskState",
  default: tasks,
});

export default currentTasks;
