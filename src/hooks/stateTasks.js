import { useState } from "react";
import dummy from "../dummy.json";

export function stateTasks() {
  const [tasks, setTasks] = useState(dummy);

  return {
    tasks,
    setTasks,
  };
}