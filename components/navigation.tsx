"use client"
import React, { useState } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";


export default function Navigation() {
    const path = usePathname();

    const [darkMode, setDarkMode] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    // 다크 모드 토글
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (!darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    // 모바일 메뉴 토글
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="fixed top-0 left-0 z-50 flex items-center justify-between w-full h-16 px-8 bg-gray-800 dark:bg-gray-900">
            {/* 로고 */}
            <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold text-white hover:text-gray-300">
                    응애
                </Link>
            </div>

            {/* 햄버거 메뉴 버튼 (모바일용) */}
            <button
                className="block text-white md:hidden"
                onClick={toggleMenu}
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                </svg>
            </button>

            {/* 내비게이션 */}
            <nav
                className={`absolute md:relative top-16 md:top-auto left-0 w-full md:w-auto bg-gray-800 dark:bg-gray-900 md:flex md:items-center ${menuOpen ? 'block' : 'hidden'}`}
            >
                <ul className="flex flex-col md:flex-row md:space-x-4">
                    <li>
                        <Link
                            href="/about-us"
                            className={`block px-4 py-2 text-white hover:bg-gray-700 rounded ${path === '/about-us' ? 'bg-gray-700' : ''}`}
                        >
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/live"
                            className={`block px-4 py-2 text-white hover:bg-gray-700 rounded ${path === '/live' ? 'bg-gray-700' : ''}`}
                        >
                            라이브 테마관
                        </Link>
                    </li>
                    <li>
                        <button
                            onClick={toggleDarkMode}
                            className="block px-4 py-2 text-white rounded hover:bg-gray-700"
                        >
                            {darkMode ? '라이트 모드' : '다크 모드'}
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}