import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const FloatingActionButton = ({ onClick }) => {
    return (
        <button
            className="floating-action-button"
            onClick={onClick}
            aria-label="Add new note"
            type="button"
        >
            <FontAwesomeIcon icon={faPlus} />
        </button>
    );
};

FloatingActionButton.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default memo(FloatingActionButton);