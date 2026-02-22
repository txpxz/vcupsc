import React, { useState } from 'react';

const Settings = () => {
    const [upscaleFactor, setUpscaleFactor] = useState('2x');
    const [language, setLanguage] = useState('en');

    const handleUpscaleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setUpscaleFactor(event.target.value);
    };

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setLanguage(event.target.value);
    };

    return (
        <div className="settings">
            <h2>Settings</h2>
            <div>
                <label htmlFor="upscale">Upscale Quantity:</label>
                <select id="upscale" value={upscaleFactor} onChange={handleUpscaleChange}>
                    <option value="2x">2x</option>
                    <option value="4x">4x</option>
                </select>
            </div>
            <div>
                <label htmlFor="language">Language:</label>
                <select id="language" value={language} onChange={handleLanguageChange}>
                    <option value="en">English</option>
                    <option value="ru">Русский</option>
                </select>
            </div>
        </div>
    );
};

export default Settings;