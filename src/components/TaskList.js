import React from "react";
import Task from "./Task";

function TaskList({ tasks, filter }) {
  const toDo = tasks.map((task) => (
    <Task key={task.text} task={task} filter={filter} value={task.text} />
  ));
  return <div className="tasks">{toDo}</div>;
}

export default TaskList;
