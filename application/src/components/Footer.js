export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="copyright">
                    <p>Copyright © {currentYear} Keep Sticky Notes - All Rights Reserved.</p>
                    <p>Created by <a href="https://www.damianczerwinski.pl" target="_blank" rel="noopener noreferrer" className="author-link">Damian Czerwiński</a></p>
                </div>
                <div className="footer-links">
                    <a href="/terms-of-service" className="footer-link">Terms of Service</a>
                    <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
};