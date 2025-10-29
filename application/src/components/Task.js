import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash, faCheck, faPalette } from '@fortawesome/free-solid-svg-icons';

const colorClasses = [
    'note-color-1', 'note-color-2', 'note-color-3', 'note-color-4', 
    'note-color-5', 'note-color-6', 'note-color-7', 'note-color-8', 
    'note-color-9', 'note-color-10', 'note-color-11'
];

export const Task = ({ task, deleteTask, editTask, toggleComplete, updateTaskColor }) => {
    const [showColorPicker, setShowColorPicker] = useState(false);

    const handleColorChange = (colorClass) => {
        updateTaskColor(task.id, colorClass);
        setShowColorPicker(false);
    };

    return (
        <div className="note-item">
            <div 
                className={`note-card ${task.color || 'note-color-1'}`}
                style={{ 
                    minHeight: task.height || '120px'
                }}
            >
                <div className="note-content">
                    {task.title && (
                        <h3 className="note-title">
                            {task.title}
                        </h3>
                    )}
                    {task.task && (
                        <p 
                            className={`note-text ${task.completed ? "completed" : ""}`}
                        >
                            {task.task}
                        </p>
                    )}
                </div>
                
                <div className="note-actions">
                        <div className="color-picker-container" style={{ position: 'relative' }}>
                            <FontAwesomeIcon 
                                className="action-icon" 
                                icon={faPalette} 
                                onClick={() => setShowColorPicker(!showColorPicker)}
                                title="Change color"
                            />
                            {showColorPicker && (
                                <div className="color-picker-dropdown">
                                    {colorClasses.map((colorClass, index) => (
                                        <div
                                            key={index}
                                            className={`color-option-small ${colorClass}`}
                                            onClick={() => handleColorChange(colorClass)}
                                            title={`Color ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                        <FontAwesomeIcon 
                            className="action-icon complete" 
                            icon={faCheck} 
                            onClick={() => toggleComplete(task.id)}
                            title={task.completed ? "Mark as incomplete" : "Mark as complete"}
                        />
                        <FontAwesomeIcon 
                            className="action-icon edit" 
                            icon={faPen} 
                            onClick={() => editTask(task.id)}
                            title="Edit note"
                        />
                        <FontAwesomeIcon 
                            className="action-icon delete" 
                            icon={faTrash} 
                            onClick={() => deleteTask(task.id)}
                            title="Delete note"
                        />
                    </div>
            </div>
        </div>
    )
}