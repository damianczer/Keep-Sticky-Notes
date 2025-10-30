import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../hooks/useTheme';

export const Footer = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="social-links">
                    <a
                        href="https://github.com/damianczer"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link github"
                        aria-label="GitHub Profile"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/daczerw/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link linkedin"
                        aria-label="LinkedIn Profile"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
                <div className="copyright">
                    <p>Copyright © 2025 Damian Czerwiński - All Rights Reserved.</p>
                </div>
                <div className="theme-toggle">
                    <button
                        className="theme-btn"
                        onClick={toggleTheme}
                        title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                    >
                        <FontAwesomeIcon
                            icon={theme === 'dark' ? faSun : faMoon}
                            className="theme-icon"
                        />
                        <span className="theme-text">
                            {theme === 'dark' ? 'Light' : 'Dark'}
                        </span>
                    </button>
                </div>
            </div>
        </footer>
    );
};