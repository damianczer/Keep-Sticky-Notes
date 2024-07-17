import React, { useState } from "react";
import { ToDo } from "./ToDo";
import { ToDoForm } from "./ToDoForm";
import { v4 as uuidv4 } from "uuid";
import { EditToDoForm } from "./EditToDoForm";

export const ToDoWrapper = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([
            ...tasks,
            { id: uuidv4(), task: task, completed: false, isEditing: false },
        ]);
    }

    const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

    const toggleComplete = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    }

    const editToDo = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, isEditing: !task.isEditing } : task
            )
        );
    }

    const editTask = (task, id) => {
        setTasks(
            tasks.map((toDo) =>
                toDo.id === id ? { ...toDo, task, isEditing: !toDo.isEditing } : toDo
            )
        );
    };

    return (
        <div className="ToDoWrapper">
            <h1>My current tasks:</h1>
            <ToDoForm addTask={addTask} />
            {tasks.map((task) =>
                task.isEditing ? (
                    <EditToDoForm editTask={editTask} task={task} />
                ) : (
                    <ToDo
                        key={task.id}
                        task={task}
                        deleteTask={deleteTask}
                        editTask={editToDo}
                        toggleComplete={toggleComplete}
                    />
                )
            )}
        </div>
    );
};