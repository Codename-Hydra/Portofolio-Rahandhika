import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css'; // Assuming you will create a CSS file for styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h1>Your Name</h1> {/* Replace with your logo or name */}
            </div>
            <ul className="navbar-links">
                <li>
                    <Link to="hero" smooth={true} duration={500}>Beranda</Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500}>Tentang Saya</Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500}>Keahlian</Link>
                </li>
                <li>
                    <Link to="projects" smooth={true} duration={500}>Proyek</Link>
                </li>
                <li>
                    <Link to="experience" smooth={true} duration={500}>Pengalaman</Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500}>Kontak</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;