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
                height: '100px',
            }}
        >
            <div>
                <Link href="/">
                    <ExportedImage
                        unoptimized={true}
                        src="/images/logo-dark.png" 
                        alt="Kidearn HTML"
                        width={160}
                        height={56} 
                    />
                </Link>
            </div>

            <div
                className="navbar"
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
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
                    <Link href="/contact"
                        style={{
                            width: '140px',
                            height: '49px',
                            backgroundColor: '#F25334',
                            color: 'white',
                            fontSize: '14px',
                            fontWeight: 'bold',
                            padding: '10px 10px',
                            borderRadius: '12px',
                            height: '49px',
                            textAlign: 'center',
                        }}
                    >
                        اتصل بنا
                    </Link>
                </div>
            </div>
        </div>
    );
}

// "use client";

// import { CallIcon } from "./CallIcon";
// import HamburgerMenu from "./HamburgerMenu";
// import React, { useState } from 'react';
// import OffcanvasNavbar from "./OffCanvasNavbar";
// import Link from "next/link";
// import ExportedImage from "next-image-export-optimizer";



// export default function Header() {
//     const currentPath = '/';

//     const [activeLink, setActiveLink] = useState('Home'); // Default active link

//     const handleLinkClick = (linkName) => {
//         setActiveLink(linkName); // Set the clicked link as active
//     };
//     return (
//         <div
//             className="headerContainer"
//             style={{
//                 display: 'flex',
//                 flexDirection: 'row',
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//                 height: '100px',
//                 // padding: '0px 60px',
//             }}>

//             <div>
//             <Link href="/">
//                 <ExportedImage
//                 unoptimized={true}
//                   src="/images/logo-dark.png" 
//                   alt="Kidearn HTML"
//                   width={160}
//                   height={56} 
//                 />
//               </Link>
//             </div>

//             <div
//                 className="navbar"
//                 style={{
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                 }}>
//                 <ul
//                     className="Header-NavContainer"
//                     style={{
//                         display: 'flex',
//                         flexDirection: 'row',
//                         justifyContent: 'space-between',
//                         alignItems: 'center',
//                         gap: '30px',
//                         fontWeight: 'bold',
//                         marginBottom: '0px',
//                         fontSize: '16px',
//                         cursor: 'pointer',
//                     }}>
//                     <Link href="/" className={`header-Links ${currentPath === '/' ? 'active' : ''}`}>الصفحة الرئيسية</Link>
//                     <Link href="/about" className={`header-Links ${currentPath === '/about' ? 'active' : ''}`}>من نحن</Link>
//                     <Link href="/pricing" className={`header-Links ${currentPath === '/pricing' ? 'active' : ''}`}>الأسعار</Link>
//                     <Link href="/event" className={`header-Links ${currentPath === '/event' ? 'active' : ''}`}>الفعاليات</Link>
//                     <Link href="/jobForm" className={`header-Links ${currentPath === '/jobForm' ? 'active' : ''}`}>التوظيف</Link>
//                     {/* <Link href="/register" className={`header-Links ${currentPath === '/register' ? 'active' : ''}`}>Register</Link> */}
                   
//                     <Link href="/contact" className={`header-Links ${currentPath === '/contact' ? 'active' : ''}`}>اتصل بنا</Link>
//                 </ul>
//             </div>


//             <div
//                 style={{
//                     display: 'flex',
//                     flexDirection: 'row',
//                     justifyContent: 'center',
//                     gap: '30px',
//                     alignItems: 'center',
//                 }}>
//                 <div style={{
//                     display: 'flex',
//                     flexDirection: 'row',
//                     justifyContent: 'space-between',
//                     gap: '15px',
//                     alignItems: 'center',
//                     cursor: 'pointer',
//                 }}>
//                     <div className="ToggleButton"><OffcanvasNavbar /></div>


//                     {/* <span className="CallIcon"> <CallIcon /> </span> */}


//                     {/* <div
//                         className="headerContactInfo"
//                         style={{
//                             // display: 'flex',
//                             flexDirection: 'column',
//                             justifyContent: 'space-around',
//                             alignItems: 'center',
//                             gap: '0px',
//                             margin: '0px',
//                             padding: '0px',
//                         }}>
//                         <h5
//                             class="main-header__call__number"
//                             style={{
//                                 margin: '0',
//                                 padding: '0',
//                                 fontSize: '20px',
//                                 fontWeight: 'bold',
//                                 color: 'black',
//                             }}>(303) 555-0105</h5>
//                         <h6
//                             class="main-header__call__text"
//                             style={{
//                                 margin: '0',
//                                 padding: '0',
//                                 color: '#7E8185',
//                                 fontWeight: 'normal',
//                                 fontSize: '16px',
//                             }}>Call to Questions</h6>
//                     </div> */}
//                 </div>
//                 <div className="headerButton">
//                     <button
//                         style={{
//                             width: '140px',
//                             height: '49px',
//                             backgroundColor: '#F25334',
//                             color: 'white',
//                             fontSize: '14px',
//                             fontWeight: 'bold',
//                             padding: '10px 10px',
//                             borderRadius: '12px',
//                             height: '49px',
//                             textAlign: 'center',
//                         }}>اتصل بنا</button>
//                 </div>
//             </div>

//         </div>
//     );
// } 