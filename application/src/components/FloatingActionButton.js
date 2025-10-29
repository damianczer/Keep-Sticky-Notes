import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function FloatingActionButton({ onClick }) {
    return (
        <button 
            className="floating-action-button"
            onClick={onClick}
            aria-label="Add new note"
        >
            <FontAwesomeIcon icon={faPlus} />
        </button>
    );
}

export default FloatingActionButton;