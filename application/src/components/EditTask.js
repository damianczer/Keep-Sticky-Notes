import React, { useState } from 'react'

export const EditTask = ({ editTask, task, updateTaskColor }) => {
    const [titleValue, setTitleValue] = useState(task.title || '');
    const [textValue, setTextValue] = useState(task.task || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (titleValue.trim() || textValue.trim()) {
            editTask(titleValue.trim(), textValue.trim(), task.id);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && e.ctrlKey) {
            handleSubmit(e);
        }
        if (e.key === 'Escape') {
            editTask(task.title, task.task, task.id);
        }
    };

    return (
        <div className="note-item">
            <div 
                className={`note-card edit-mode ${task.color || 'note-color-1'}`}
                style={{ 
                    minHeight: task.height || '120px'
                }}
            >
                <div className="note-content">
                    <input
                        type="text"
                        className="edit-title-input"
                        value={titleValue}
                        onChange={(e) => setTitleValue(e.target.value)}
                        onKeyDown={handleKeyPress}
                        placeholder="Note title"
                    />
                    <textarea
                        className="edit-textarea"
                        value={textValue}
                        onChange={(e) => setTextValue(e.target.value)}
                        onKeyDown={handleKeyPress}
                        placeholder="Take a note..."
                        autoFocus
                        onInput={(e) => {
                            e.target.style.height = 'auto';
                            e.target.style.height = e.target.scrollHeight + 'px';
                        }}
                    />
                </div>
                <div className="edit-actions">
                    <button type="button" className="save-btn-new" onClick={handleSubmit}>
                        Save
                    </button>
                    <button 
                        type="button" 
                        className="cancel-btn"
                        onClick={() => editTask(task.title, task.task, task.id)}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}