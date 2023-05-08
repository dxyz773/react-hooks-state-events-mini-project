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
  const [selected, setSelected] = useState("All");

  function filterTask(deleted) {
    const filtered = [...tasks].filter((task) => task.text !== deleted);
    setTasks(filtered);
  }
  function filterCategory(category) {
    setSelected(category);
  }

  let filteredTasks = [...tasks].filter(
    (task) => task.category === selected || selected === "All"
  );
  function handleSubmit(obj) {
    setTasks([...tasks, obj]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        filter={filterCategory}
        selected={selected}
      />
      <NewTaskForm categories={CATEGORIES} onSubmit={handleSubmit} />
      <TaskList tasks={filteredTasks} filter={filterTask} />
    </div>
  );
}

export default App;
