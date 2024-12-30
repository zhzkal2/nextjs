"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from "../styles/navigation.module.css";

export default function Navigation() {

    const path = usePathname();

    console.log(path);

    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about-us">About Us</Link>
                </li>
            </ul>
        </nav>
    )
}