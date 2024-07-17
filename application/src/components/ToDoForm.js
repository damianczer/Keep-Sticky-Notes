import React, { useState } from 'react'

export const ToDoForm = ({ addTask }) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value) {
            addTask(value);
            setValue('');
        }
    };
    return (
        <form onSubmit={handleSubmit} className="ToDoForm">
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="ToDo-input" placeholder='New Task..' />
            <button type="submit" className='ToDo-btn'>Add Task</button>
        </form>
    )
}