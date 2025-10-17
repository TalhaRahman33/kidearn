"use client";

import { CallIcon } from "./CallIcon";
import HamburgerMenu from "./HamburgerMenu";
import React, { useState } from 'react';
import OffcanvasNavbar from "./OffCanvasNavbar";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import { usePathname } from "next/navigation"; // Import usePathname

export default function Header() {
    const pathname = usePathname(); // Get the current pathname

    const isActive = (href) => pathname === href; // Check if the link is active

    return (
        <header className="headerContainer" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            width: '100%',
            zIndex: 1000,
            backgroundColor: '#fff',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
            <div className="header-inner"
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: '83px',
                    width: '100%',
                    maxWidth: '1440px',
                    margin: '0 auto',
                }}
            >
                <div className="header-logo">
                    <Link href="/" >
                        <ExportedImage
                            unoptimized={true}
                            src="/images/logo-dark.png"
                            alt="Kidearn HTML"
                            width={180}
                            height={56}
                            style={{ display: 'block' }}
                        />
                    </Link>
                </div>

                <nav
                    className="navbar"
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                        flex: '1 1 auto',
                        marginInline: '20px',
                        direction: 'rtl'
                    }}
                >
                    <ul
                        className="Header-NavContainer"
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '30px',
                            fontWeight: 'bold',
                            marginBottom: '0px',
                            fontSize: '15px',
                            listStyle: 'none',
                            padding: '0',
                        }}
                    >
                        <li><Link href="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>الصفحة الرئيسية</Link></li>
                        <li><Link href="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>من نحن</Link></li>
                        <li><Link href="/pricing" className={`nav-link ${isActive('/pricing') ? 'active' : ''}`}>الأسعار</Link></li>
                        <li><Link href="/event" className={`nav-link ${isActive('/event') ? 'active' : ''}`}>الفعاليات</Link></li>
                        <li><Link href="/jobForm" className={`nav-link ${isActive('/jobForm') ? 'active' : ''}`}>التوظيف</Link></li>
                        <li><Link href="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>اتصل بنا</Link></li>
                    </ul>
                </nav>

                <div className="header-actions"
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        gap: '15px',
                        alignItems: 'center',
                    }}
                >
                    <div className="ToggleButton"><OffcanvasNavbar /></div>
                    <div className="headerButton">
                        <Link href="/login">
                            <i className="bx bx-log-in-circle"></i>
                            تسجيل الدخول
                        </Link>
                    </div>
                    <div className="headerButton">
                        <Link href="/signup">
                            <i className="bx bx-user-plus"></i>
                            قم بالتسجيل الآن
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

