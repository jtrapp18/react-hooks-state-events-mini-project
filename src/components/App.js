import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [selCategory, setSelCategory] = useState("All");
  const [tasks, setTasks] = useState(TASKS);

  const onTaskFormSubmit = (newTask) => {
    setTasks((prevTasks)=>[...prevTasks, newTask])
  } 

  const filteredTasks = selCategory==="All" ? tasks : tasks.filter(task=>task.category.toLowerCase()===selCategory.toLowerCase())

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES}
        selCategory={selCategory}
        setSelCategory={setSelCategory}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList tasks={filteredTasks}/>
    </div>
  );
}

export default App;
