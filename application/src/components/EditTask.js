import React, { useState } from 'react'

export const EditTask= ({ editTask, task }) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();
        editTask(value, task.id);
    };
    return (
        <form onSubmit={handleSubmit} className="ToDoForm">
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="ToDo-input" placeholder='Edit Task..' />
            <button type="submit" className='ToDo-btn'>Save</button>
        </form>
    )
}