import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash, faCheckSquare } from '@fortawesome/free-solid-svg-icons'

export const Task = ({ task, deleteTask, editTask, toggleComplete }) => {
    return (
        <div className="ToDo">
            <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
            <div>
                <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={() => editTask(task.id)} />
                <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteTask(task.id)} />
                <FontAwesomeIcon className="done-icon" icon={faCheckSquare} onClick={() => toggleComplete(task.id)} />
            </div>
        </div>
    )
}