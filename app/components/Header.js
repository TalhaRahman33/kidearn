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
        <div
            className="headerContainer"
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '83px',
            }}
        >
            <div>
                <Link href="/" >
                    <ExportedImage
                        unoptimized={true}
                        src="/images/logo-dark.png" 
                        alt="Kidearn HTML"
                        width={180}
                        height={56} 
                    />
                </Link>
            </div>

            <div
                className="navbar"
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '83px'
                }}
            >
                <ul
                    className="Header-NavContainer"
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '30px',
                        fontWeight: 'bold',
                        marginBottom: '0px',
                        fontSize: '16px',
                        cursor: 'pointer',
                    }}
                >
                    <Link href="/" className={`header-Links ${isActive('/') ? 'active' : ''}`}>الصفحة الرئيسية</Link>
                    <Link href="/about" className={`header-Links ${isActive('/about') ? 'active' : ''}`}>من نحن</Link>
                    <Link href="/pricing" className={`header-Links ${isActive('/pricing') ? 'active' : ''}`}>الأسعار</Link>
                    <Link href="/event" className={`header-Links ${isActive('/event') ? 'active' : ''}`}>الفعاليات</Link>
                    <Link href="/jobForm" className={`header-Links ${isActive('/jobForm') ? 'active' : ''}`}>التوظيف</Link>
                    <Link href="/contact" className={`header-Links ${isActive('/contact') ? 'active' : ''}`}>اتصل بنا</Link>
                </ul>
            </div>

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    gap: '30px',
                    alignItems: 'center',
                }}
            >
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    gap: '15px',
                    alignItems: 'center',
                    cursor: 'pointer',
                }}>
                    <div className="ToggleButton"><OffcanvasNavbar /></div>
                </div>
                <div className="headerButton">
                    <Link href="/login"
                        style={{
                            width: '130px',
                            
                            backgroundColor: '#F25334',
                            color: 'white',
                            fontSize: '14px',
                            fontWeight: '500',
                            padding: '7px 7px',
                            borderRadius: '12px',
                            height: '45px',
                            textAlign: 'center',
                        }}
                    >
                              تسجيل الدخول
                    </Link>
                </div>
                <div className="headerButton">
                    <Link href="/signup"
                        style={{
                            width: '130px',
                            
                            backgroundColor: '#F25334',
                            color: 'white',
                            fontSize: '14px',
                            fontWeight: '500',
                            padding: '7px 7px',
                            borderRadius: '12px',
                            height: '45px',
                            textAlign: 'center',
                        }}
                    >
                        قم بالتسجيل الآن
                    </Link>
                </div>
            </div>
        </div>
    );
}

