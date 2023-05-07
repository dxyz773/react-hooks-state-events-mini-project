import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// import Task from "./Task";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

// const CATEGORIES = ["All", "Code", "Food", "Money", "Misc"];

// const TASKS = [
//   {
//     text: "Buy rice",
//     category: "Food",
//   },
function App() {
  const [tasks, setTasks] = useState(TASKS);

  function filterTask(deleted, changed) {
    if (deleted) {
      const filtered = tasks.filter((task) => task.text !== deleted);
      setTasks(filtered);
    }
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} filterTask={filterTask} />
      <NewTaskForm />
      <TaskList tasks={tasks} filter={filterTask} />
    </div>
  );
}

export default App;
