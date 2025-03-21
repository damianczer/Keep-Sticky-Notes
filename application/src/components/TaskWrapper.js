import React, { useState, useEffect } from 'react'
import { TaskForm } from './TaskForm'
import { v4 as uuidv4 } from 'uuid';
import { Task } from './Task';
import { EditTask } from './EditTask';

uuidv4();

export const TaskWrapper = () => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const savedTasks = JSON.parse(sessionStorage.getItem('tasks')) || [];
        setTasks(savedTasks);
    }, []);

    useEffect(() => {
        sessionStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = task => {
        const newTasks = [...tasks, { id: uuidv4(), task: task, completed: false, isEditing: false }];
        setTasks(newTasks);
    }

    const toggleComplete = id => {
        const newTasks = tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task);
        setTasks(newTasks);
    }

    const deleteTask = id => {
        const newTasks = tasks.filter(task => task.id !== id);
        setTasks(newTasks);
    }

    const editTodo = id => {
        setTasks(tasks.map(task => task.id === id ? { ...task, isEditing: !task.isEditing } : task))
    }

    const editTask = (taskID, id) => {
        const newTasks = tasks.map(task => task.id === id ? { ...task, taskID, isEditing: !task.isEditing } : task);
        setTasks(newTasks);
    }

    return (
        <div className='ToDoWrapper'>
            <h1>To Do</h1>
            <TaskForm addTask={addTask} />
            {tasks.map((task, index) => (
                task.isEditing ? (
                    <EditTask editTask={editTask} task={task} />
                ) : (
                    <Task task={task} key={index} toggleComplete={toggleComplete} deleteTask={deleteTask} editTask={editTodo} />
                )

            ))}

        </div>
    )
}
