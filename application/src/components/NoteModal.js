import React, { useState, useRef, useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { NOTE_COLORS, DEFAULT_NOTE_COLOR, MODAL_MODE } from '../constants';

const NoteModal = ({ isOpen, onClose, onSave, note = null, mode = MODAL_MODE.ADD }) => {
    const [noteTitle, setNoteTitle] = useState('');
    const [noteText, setNoteText] = useState('');
    const [selectedColor, setSelectedColor] = useState(DEFAULT_NOTE_COLOR);
    const titleInputRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            if (mode === MODAL_MODE.EDIT && note) {
                setNoteTitle(note.title || '');
                setNoteText(note.task || '');
                setSelectedColor(note.color || DEFAULT_NOTE_COLOR);
            } else {
                setNoteTitle('');
                setNoteText('');
                setSelectedColor(DEFAULT_NOTE_COLOR);
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
            if (mode === MODAL_MODE.EDIT && note) {
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
        if (mode === MODAL_MODE.ADD) {
            setNoteTitle('');
            setNoteText('');
            setSelectedColor(DEFAULT_NOTE_COLOR);
        }
        onClose();
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    if (!isOpen) return null;

    const modalTitle = mode === MODAL_MODE.EDIT ? 'Edit Note' : 'Add New Note';
    const submitButtonText = mode === MODAL_MODE.EDIT ? 'Save Changes' : 'Add Note';
    const isFormValid = noteTitle.trim() || noteText.trim();

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h3>{modalTitle}</h3>
                    <button
                        className="modal-close-btn"
                        onClick={handleClose}
                        aria-label="Close modal"
                        type="button"
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
                            className="modal-note-text"
                            rows={6}
                        />
                    </div>

                    <div className="color-selector">
                        {NOTE_COLORS.map((colorClass) => (
                            <button
                                key={colorClass}
                                type="button"
                                className={`color-option ${colorClass} ${selectedColor === colorClass ? 'selected' : ''
                                    }`}
                                onClick={() => setSelectedColor(colorClass)}
                                aria-label={`Select ${colorClass}`}
                            />
                        ))}
                    </div>

                    <div className="modal-actions">
                        <button
                            type="button"
                            className="modal-btn modal-btn-secondary"
                            onClick={handleClose}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="modal-btn modal-btn-primary"
                            disabled={!isFormValid}
                        >
                            {submitButtonText}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

NoteModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    note: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string,
        task: PropTypes.string,
        color: PropTypes.string,
        completed: PropTypes.bool.isRequired
    }),
    mode: PropTypes.oneOf([MODAL_MODE.ADD, MODAL_MODE.EDIT]).isRequired
};

export default memo(NoteModal);