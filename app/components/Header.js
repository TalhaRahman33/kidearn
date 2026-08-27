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
            zIndex: 999,
            backgroundColor: '#fff',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
            <style jsx>{`
                .headerButton-mobile {
                    display: flex !important;
                    visibility: visible !important;
                    opacity: 1 !important;
                    white-space: nowrap !important;
                    font-size: 12px !important;
                    padding: 6px 10px !important;
                    gap: 4px !important;
                }
                .header-actions-mobile-visible {
                    display: flex !important;
                    gap: 8px !important;
                }
                @media (max-width: 480px) {
                    .headerButton-mobile {
                        font-size: 11px !important;
                        padding: 5px 8px !important;
                    }
                }
                @media (max-width: 991px) {
                    .navbar-desktop-only {
                        display: none !important;
                    }
                    .header-actions-mobile-visible {
                        align-items: center !important;
                    }
                    .headerButton-mobile {
                        height: 36px !important;
                        line-height: 1 !important;
                        box-sizing: border-box !important;
                    }
                    .ToggleButton {
                        display: flex !important;
                        align-items: center !important;
                    }
                }
            `}</style>
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
                    className="navbar navbar-desktop-only"
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
                        <li style={{ whiteSpace: 'nowrap' }}><Link href="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>الصفحة الرئيسية</Link></li>
                        <li style={{ whiteSpace: 'nowrap' }}><Link href="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>من نحن</Link></li>
                        <li style={{ whiteSpace: 'nowrap' }}><Link href="/pricing" className={`nav-link ${isActive('/pricing') ? 'active' : ''}`}>الأسعار</Link></li>
                        <li style={{ whiteSpace: 'nowrap' }}><Link href="/event" className={`nav-link ${isActive('/event') ? 'active' : ''}`}>الفعاليات</Link></li>
                        <li style={{ whiteSpace: 'nowrap' }}><Link href="/jobForm" className={`nav-link ${isActive('/jobForm') ? 'active' : ''}`}>التوظيف</Link></li>
                        <li style={{ whiteSpace: 'nowrap' }}><Link href="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>اتصل بنا</Link></li>
                    </ul>
                </nav>

                <div className="header-actions header-actions-mobile-visible"
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        gap: '15px',
                        alignItems: 'center',
                    }}
                >
                    <div className="headerButton headerButton-mobile">
                        <Link href="/login">
                            <i className="bx bx-log-in-circle"></i>
                            تسجيل الدخول
                        </Link>
                    </div>
                    <div className="headerButton headerButton-mobile">
                        <Link href="/signup">
                            <i className="bx bx-user-plus"></i>
                            قم بالتسجيل الآن
                        </Link>
                    </div>
                    <div className="ToggleButton"><OffcanvasNavbar /></div>
                </div>
            </div>
        </header>
    );
}

