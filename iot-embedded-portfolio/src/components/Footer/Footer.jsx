import React from 'react';
import './Footer.css'; // Assuming you will create a CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <p>© 2025 [Your Name]. All rights reserved.</p>
            <div className="social-links">
                <a href="[Your LinkedIn URL]" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="[Your GitHub URL]" target="_blank" rel="noopener noreferrer">GitHub</a>
                {/* Add more social links as needed */}
            </div>
        </footer>
    );
};

export default Footer;