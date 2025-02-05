import React from 'react';
import Head from "next/head";

export default function Home() {
    return (
        <>
            <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center animate-fadeIn">
                {/* Navigation and other layout elements should be handled in layout.js */}
                <div className="flex-1 flex flex-col justify-center items-center">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">
                        Glad to have you here!
                    </h1>
                    <p className="text-xl text-gray-600 mb-4">
                        Dive into my journey, explore my projects, and discover my passion for innovation.
                    </p>
                    <div className="flex space-x-4 mt-6">
                        {/* Converted px to rem equivalents using Tailwind classes */}
                        <a
                            href="/projects"
                            className="bg-prism-green text-black text-lg py-2 px-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                        >
                            View My Projects
                        </a>
                        <a
                            href="/contact"
                            className="bg-transparent border-2 border-prism-green text-black text-lg py-2 px-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
