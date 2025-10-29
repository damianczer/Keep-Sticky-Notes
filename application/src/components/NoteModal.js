import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const colorClasses = [
    'note-color-1', 'note-color-2', 'note-color-3', 'note-color-4', 
    'note-color-5', 'note-color-6', 'note-color-7', 'note-color-8', 
    'note-color-9', 'note-color-10', 'note-color-11'
];

function NoteModal({ 
    isOpen, 
    onClose, 
    onSave, 
    note = null,
    mode = 'add'
}) {
    const [noteTitle, setNoteTitle] = useState('');
    const [noteText, setNoteText] = useState('');
    const [selectedColor, setSelectedColor] = useState('note-color-1');
    const titleInputRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            if (mode === 'edit' && note) {
                setNoteTitle(note.title || '');
                setNoteText(note.task || '');
                setSelectedColor(note.color || 'note-color-1');
            } else {
                setNoteTitle('');
                setNoteText('');
                setSelectedColor('note-color-1');
            }
        }
    }, [isOpen, mode, note?.id]);

    useEffect(() => {
        if (isOpen && titleInputRef.current) {
            titleInputRef.current.focus();
        }
    }, [isOpen]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (noteTitle.trim() || noteText.trim()) {
            if (mode === 'edit' && note) {
                onSave({
                    id: note.id,
                    title: noteTitle.trim(),
                    task: noteText.trim(),
                    color: selectedColor,
                    completed: note.completed
                });
            } else {
                onSave(noteTitle.trim(), noteText.trim(), selectedColor);
            }
            handleClose();
        }
    };

    const handleClose = () => {
        if (mode === 'add') {
            setNoteTitle('');
            setNoteText('');
            setSelectedColor('note-color-1');
        }
        onClose();
    };

    if (!isOpen) return null;

    const modalTitle = mode === 'edit' ? 'Edit Note' : 'Add New Note';
    const submitButtonText = mode === 'edit' ? 'Save Changes' : 'Add Note';

    return (
        <div className="modal-overlay" onClick={handleClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h3>{modalTitle}</h3>
                    <button 
                        className="modal-close-btn"
                        onClick={handleClose}
                        aria-label="Close modal"
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>
                
                <form onSubmit={handleSubmit} className="modal-form">
                    <div className="note-input-container">
                        <input
                            type="text"
                            ref={titleInputRef}
                            value={noteTitle}
                            onChange={(e) => setNoteTitle(e.target.value)}
                            placeholder="Note title"
                            className="modal-note-title"
                        />
                        <textarea
                            value={noteText}
                            onChange={(e) => setNoteText(e.target.value)}
                            placeholder="Take a note..."
                            className="modal-note-input"
                            rows={4}
                        />
                    </div>

                    <div className="modal-form-actions">
                        <div className="color-selector">
                            <span className="color-label">Color:</span>
                            {colorClasses.map((colorClass, index) => (
                                <button
                                    key={colorClass}
                                    type="button"
                                    className={`color-option ${colorClass} ${selectedColor === colorClass ? 'selected' : ''}`}
                                    onClick={() => setSelectedColor(colorClass)}
                                    aria-label={`Select color ${index + 1}`}
                                />
                            ))}
                        </div>

                        <div className="modal-buttons">
                            <button 
                                type="button" 
                                className="modal-cancel-btn"
                                onClick={handleClose}
                            >
                                Cancel
                            </button>
                            <button 
                                type="submit" 
                                className="modal-add-btn"
                                disabled={!noteTitle.trim() && !noteText.trim()}
                            >
                                {submitButtonText}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NoteModal;