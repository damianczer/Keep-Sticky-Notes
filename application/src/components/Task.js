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
        <article className="note-item">
            <div className={`note-card ${task.color}`}>
                <div className="note-content">
                    {task.title ? (
                        <h2 className="note-title">
                            {task.title}
                        </h2>
                    ) : (
                        <h2 className="note-title visually-hidden">Untitled Note</h2>
                    )}
                    {task.task && (
                        <p className={`note-text ${task.completed ? 'completed' : ''}`}>
                            {task.task}
                        </p>
                    )}
                </div>

                <div className="note-actions">
                    <div className="color-picker-container" style={{ position: 'relative' }}>
                        <button
                            className="icon-btn"
                            onClick={() => setShowColorPicker(!showColorPicker)}
                            aria-expanded={showColorPicker}
                            aria-haspopup="true"
                            aria-label="Change color"
                            type="button"
                        >
                            <FontAwesomeIcon className="action-icon" icon={faPalette} />
                        </button>
                        {showColorPicker && (
                            <div className="color-picker-dropdown">
                                {NOTE_COLORS.map((colorClass) => (
                                    <button
                                        key={colorClass}
                                        type="button"
                                        className={`color-option-small ${colorClass}`}
                                        onClick={() => handleColorChange(colorClass)}
                                        aria-label={`Select ${colorClass} color`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                    <button
                        className="icon-btn"
                        onClick={() => toggleComplete(task.id)}
                        aria-pressed={task.completed}
                        aria-label={task.completed ? 'Mark as incomplete' : 'Mark as complete'}
                        type="button"
                    >
                        <FontAwesomeIcon className="action-icon complete" icon={faCheck} />
                    </button>
                    <button
                        className="icon-btn"
                        onClick={() => editTask(task.id)}
                        aria-label="Edit note"
                        type="button"
                    >
                        <FontAwesomeIcon className="action-icon edit" icon={faPen} />
                    </button>
                    <button
                        className="icon-btn"
                        onClick={() => deleteTask(task.id)}
                        aria-label="Delete note"
                        type="button"
                    >
                        <FontAwesomeIcon className="action-icon delete" icon={faTrash} />
                    </button>
                </div>
            </div>
        </article>
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