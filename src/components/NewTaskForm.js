import { useState } from "react";

function NewTaskForm({ categories, onSubmit }) {
  const template = { text: "", category: "Code" };
  const [newTask, setNewTask] = useState(template);

  const filtered = categories.filter((category) => category !== "All");

  const options = filtered.map((category) => (
    <option key={category}>{category}</option>
  ));

  function captureNewTask(e) {
    const name = e.target.name;
    const value = e.target.value;
    const task = { ...newTask, [name]: value };

    setNewTask(task);
  }

  function helper(e, obj) {
    e.preventDefault();
    onSubmit(obj);
    setNewTask(template);
  }
  return (
    <form className="new-task-form" onSubmit={(e) => helper(e, newTask)}>
      <label>
        Details
        <input
          type="text"
          value={newTask.text}
          onChange={(e) => captureNewTask(e)}
          name="text"
        />
      </label>
      <label>
        Category
        <select name="category" onChange={(e) => captureNewTask(e)}>
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
