import React from 'react';
import './Hero.css'; // Assuming you will create a Hero.css for styling

const Hero = () => {
    return (
        <div className="hero">
            <img src="/path/to/profile-picture.jpg" alt="Profile" className="hero__profile-picture" />
            <h1 className="hero__title">Mengubah Ide Menjadi Kenyataan dengan IoT & Embedded Systems</h1>
            <p className="hero__description">
                Saya adalah seorang penggemar IoT dan Embedded Systems yang bersemangat untuk menciptakan solusi inovatif.
            </p>
            <div className="hero__buttons">
                <a href="#projects" className="hero__button">Lihat Proyek Saya</a>
                <a href="#contact" className="hero__button">Hubungi Saya</a>
            </div>
        </div>
    );
};

export default Hero;