import { useState } from 'react';

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [showTerms, setShowTerms] = useState(false);
    const [showPrivacy, setShowPrivacy] = useState(false);

    return (
        <>
            <footer className="footer">
                <div className="footer-content">
                    <div className="copyright">
                        <p>Copyright © {currentYear} Keep Sticky Notes - All Rights Reserved.</p>
                        <p>Created by <a href="https://www.damianczerwinski.pl" target="_blank" rel="noopener noreferrer" className="author-link">Damian Czerwiński</a></p>
                    </div>
                    <div className="footer-links">
                        <button onClick={() => setShowTerms(true)} className="footer-link">Terms of Service</button>
                        <button onClick={() => setShowPrivacy(true)} className="footer-link">Privacy Policy</button>
                    </div>
                </div>
            </footer>

            {showTerms && (
                <div className="modal-overlay" onClick={() => setShowTerms(false)} role="dialog" aria-labelledby="terms-title" aria-modal="true">
                    <div className="modal-content legal-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3 id="terms-title">Terms of Service</h3>
                            <button
                                className="modal-close-btn"
                                onClick={() => setShowTerms(false)}
                                aria-label="Close terms of service"
                            >
                                ✕
                            </button>
                        </div>
                        <div className="modal-form legal-content">
                            <h4>1. Acceptance of Terms</h4>
                            <p>By accessing and using Keep Sticky Notes, you accept and agree to be bound by the terms and provision of this agreement.</p>

                            <h4>2. Use License</h4>
                            <p>Permission is granted to use Keep Sticky Notes for personal, non-commercial purposes. This is the grant of a license, not a transfer of title.</p>

                            <h4>3. Data Storage</h4>
                            <p>Keep Sticky Notes stores all data locally in your browser using sessionStorage. No data is transmitted to external servers. Your notes are stored only on your device and are not backed up externally.</p>

                            <h4>4. Privacy</h4>
                            <p>We do not collect, store, or transmit any personal information. All notes and settings remain on your local device. Please refer to our Privacy Policy for more details.</p>

                            <h4>5. Disclaimer</h4>
                            <p>Keep Sticky Notes is provided "as is" without warranty of any kind, express or implied. We do not guarantee that the application will be error-free or uninterrupted.</p>

                            <h4>6. Limitations</h4>
                            <p>In no event shall Keep Sticky Notes or its developers be liable for any damages arising out of the use or inability to use the application.</p>

                            <h4>7. Changes to Terms</h4>
                            <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the application.</p>

                            <h4>8. Contact</h4>
                            <p>For questions about these Terms of Service, please contact: <a href="mailto:kontakt@damianczerwinski.pl" className="author-link">kontakt@damianczerwinski.pl</a></p>
                        </div>
                    </div>
                </div>
            )}

            {showPrivacy && (
                <div className="modal-overlay" onClick={() => setShowPrivacy(false)} role="dialog" aria-labelledby="privacy-title" aria-modal="true">
                    <div className="modal-content legal-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3 id="privacy-title">Privacy Policy</h3>
                            <button
                                className="modal-close-btn"
                                onClick={() => setShowPrivacy(false)}
                                aria-label="Close privacy policy"
                            >
                                ✕
                            </button>
                        </div>
                        <div className="modal-form legal-content">
                            <h4>1. Information We Collect</h4>
                            <p>Keep Sticky Notes does NOT collect any personal information. We do not use cookies, tracking scripts, or analytics services. The application operates entirely within your browser.</p>

                            <h4>2. Local Data Storage</h4>
                            <p>All notes and application settings are stored locally in your browser's sessionStorage. This data:</p>
                            <ul>
                                <li>Remains on your device only</li>
                                <li>Is not transmitted to any server</li>
                                <li>Is cleared when you close the browser tab</li>
                                <li>Is not accessible to any third parties</li>
                            </ul>

                            <h4>3. Third-Party Services</h4>
                            <p>Keep Sticky Notes uses Font Awesome for icons, which may load fonts from their CDN. We use Google Fonts for typography. These services may have their own privacy policies.</p>

                            <h4>4. Data Security</h4>
                            <p>Since all data is stored locally on your device, the security of your notes depends on your device's security. We recommend using password protection and keeping your device secure.</p>

                            <h4>5. Your Rights</h4>
                            <p>You have complete control over your data:</p>
                            <ul>
                                <li>Delete individual notes at any time</li>
                                <li>Clear all data by closing the browser tab</li>
                                <li>No account registration required</li>
                                <li>No data retention policies (data exists only while tab is open)</li>
                            </ul>

                            <h4>6. Children's Privacy</h4>
                            <p>Keep Sticky Notes does not collect any information from anyone, including children under 13.</p>

                            <h4>7. Changes to Privacy Policy</h4>
                            <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.</p>

                            <h4>8. Contact Us</h4>
                            <p>If you have questions about this Privacy Policy, please contact: <a href="mailto:kontakt@damianczerwinski.pl" className="author-link">kontakt@damianczerwinski.pl</a></p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};