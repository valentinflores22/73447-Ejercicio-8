import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  // Agregar tarea
  const addTask = (text) => {
    if (text.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text,
    };

    setTasks([...tasks, newTask]);
  };

  // Eliminar tarea
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">📝 Lista de Tareas</h1>

      <TaskForm addTask={addTask} />

      <div className="text-center my-3">
        <p className="lead">Tareas actuales: <strong>{tasks.length}</strong></p>
      </div>

      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
