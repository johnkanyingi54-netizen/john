
import React from 'react';

const PixelArtIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" fill="rgba(192, 132, 252, 0.2)"/>
        <rect x="3" y="3" width="4" height="4" fill="currentColor"/>
        <rect x="8" y="3" width="4" height="4" fill="currentColor"/>
        <rect x="13" y="3" width="4" height="4" fill="currentColor"/>
        <rect x="18" y="3" width="4" height="4" fill="currentColor"/>
        <rect x="3" y="8" width="4" height="4" fill="currentColor"/>
        <rect x="3" y="13" width="4" height="4" fill="currentColor"/>
        <rect x="3" y="18" width="4" height="4" fill="currentColor"/>
        <rect x="8" y="18" width="4" height="4" fill="currentColor"/>
        <rect x="13" y="18" width="4" height="4" fill="currentColor"/>
        <rect x="18" y="18" width="4" height="4" fill="currentColor"/>
        <rect x="18" y="8" width="4" height="4" fill="currentColor"/>
        <rect x="18" y="13" width="4" height="4" fill="currentColor"/>
    </svg>
);


export const Header: React.FC = () => {
    return (
        <header className="flex flex-col sm:flex-row items-center justify-center text-center gap-4">
            <PixelArtIcon />
            <div>
                <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                    Pixel Art Generator
                </h1>
                <p className="text-gray-400 mt-1">Create stunning pixel art with the power of Imagen</p>
            </div>
        </header>
    );
};
