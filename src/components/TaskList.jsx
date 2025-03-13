import React from "react";

function TaskList({ tasks, deleteTask }) {
    return (
        <ul className="list-group">
            {tasks.length === 0 ? (
                <li className="list-group-item text-center text-muted">
                    No hay tareas aún 😔
                </li>
            ) : (
                tasks.map((task) => (
                    <li
                        key={task.id}
                        className="list-group-item d-flex justify-content-between align-items-center"
                    >
                        <span>{task.text}</span>
                        <button
                            className="btn btn-danger btn-sm"
                            onClick={() => deleteTask(task.id)}
                        >
                            🗑 Eliminar
                        </button>
                    </li>
                ))
            )}
        </ul>
    );
}

export default TaskList;
