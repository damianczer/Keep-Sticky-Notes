import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../hooks/useTheme';

export const TopBar = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="top-bar">
            <div className="top-bar-content">
                <h1 className="app-title">Keep Sticky Notes</h1>
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
    );
};