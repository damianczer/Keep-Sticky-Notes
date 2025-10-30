import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash, faCheck, faPalette } from '@fortawesome/free-solid-svg-icons';
import { NOTE_COLORS } from '../constants';

const Task = ({ task, deleteTask, editTask, toggleComplete, updateTaskColor }) => {
    const [showColorPicker, setShowColorPicker] = useState(false);

    const handleColorChange = (colorClass) => {
        updateTaskColor(task.id, colorClass);
        setShowColorPicker(false);
    };

    return (
        <div className="note-item">
            <div className={`note-card ${task.color}`}>
                <div className="note-content">
                    {task.title && (
                        <h3 className="note-title">
                            {task.title}
                        </h3>
                    )}
                    {task.task && (
                        <p className={`note-text ${task.completed ? 'completed' : ''}`}>
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
                                {NOTE_COLORS.map((colorClass) => (
                                    <div
                                        key={colorClass}
                                        className={`color-option-small ${colorClass}`}
                                        onClick={() => handleColorChange(colorClass)}
                                        title={colorClass}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                    <FontAwesomeIcon
                        className="action-icon complete"
                        icon={faCheck}
                        onClick={() => toggleComplete(task.id)}
                        title={task.completed ? 'Mark as incomplete' : 'Mark as complete'}
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
    );
};

Task.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string,
        task: PropTypes.string,
        completed: PropTypes.bool.isRequired,
        color: PropTypes.string.isRequired
    }).isRequired,
    deleteTask: PropTypes.func.isRequired,
    editTask: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    updateTaskColor: PropTypes.func.isRequired
};

export default memo(Task);