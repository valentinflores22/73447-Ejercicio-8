import React, { useState } from "react";

function TaskForm({ addTask }) {
    const [taskText, setTaskText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(taskText);
        setTaskText("");
    };

    return (
        <form onSubmit={handleSubmit} className="d-flex gap-2 my-3">
            <input
                type="text"
                className="form-control bg-dark text-light"
                placeholder="Escribe una nueva tarea..."
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">Agregar</button>
        </form>
    );
}

export default TaskForm;
