"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import Link from 'next/link';
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import Script from 'next/script';


import './globals.css';
import { FaBars, FaTimes, FaHome, FaUser, FaBriefcase, FaTools, FaGraduationCap, FaProjectDiagram, FaBook, FaEnvelope } from 'react-icons/fa';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Google Analytics script
    useEffect(() => {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'G-BG3BXNMPBG');
    }, []);

    return (
        <html lang="en">
        <Head>
            <title>Dai Le&apos;s Home</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="Landing" content="My Website" />
            <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        </Head>

        {/* Google Tag Manager Script (must be outside <Head>) */}
        <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-BG3BXNMPBG"
        />
        <Script id="gtag-init" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-BG3BXNMPBG');
        `}
        </Script>
        <body className="m-0 p-0 flex-grow min-h-screen bg-gray-100">

        {/* Sidebar */}
        <nav className={`bg-white h-screen w-64 fixed top-0 left-0 shadow-lg z-50 flex-col items-center py-4 space-y-6 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out sm:translate-x-0 sm:flex justify-center`}>

            {/* Navigation Links */}
            {[
                { name: "Welcome", path: "/", icon: FaHome },
                { name: "About Me", path: "/about", icon: FaUser },
                { name: "My Experience", path: "/experience", icon: FaBriefcase },
                { name: "My Skill Sets", path: "/skills", icon: FaTools },
                { name: "My Education", path: "/education", icon: FaGraduationCap },
                { name: "My Projects", path: "/projects", icon: FaProjectDiagram },
                { name: "My Publications", path: "/publications", icon: FaBook },
                { name: "Contact Me", path: "/contact", icon: FaEnvelope }
            ].map((tab) => {
                const Icon = tab.icon;
                return (
                    <Link key={tab.name} href={tab.path}>
                        <button className="w-56 text-base sm:text-lg text-gray-800 font-semibold py-3 px-4 rounded-md bg-transparent transition duration-300 ease-in-out hover:bg-gray-200 flex items-center space-x-3 justify-start">
                            <Icon className="text-2xl sm:text-3xl" />
                            <span>{tab.name}</span>
                        </button>
                    </Link>
                );
            })}
        </nav>

        {/* Main Content with Left Padding for Sidebar */}
        <main className="ml-0 sm:ml-64 flex-grow p-4 sm:p-4 bg-gray-100 min-h-screen transition-all duration-300 ease-in-out">
            {children}
            <Analytics/>
        </main>

        </body>
        </html>
    );
}
