import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { EmailIcon } from './EmailIcon';
import CallIcon2 from './CallIcon2';
import { LocationIcon } from './LocationIcon';

const OffcanvasNavbar = () => {
    return (
        <>
            {/* Button to trigger the offcanvas */}
            <button
                style={{
                    backgroundColor: 'white',
                    color: 'black',
                    border: 'none',
                }}
                className="btn btn-primary"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBothOptions"
                aria-controls="offcanvasWithBothOptions"
            >
                {/* Hamburger menu icon */}
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="hamburger-icon"
                >
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
            </button>

            {/* Offcanvas component */}
            <div
                className="offcanvas offcanvas-end"
                data-bs-scroll="true"
                tabIndex="-1"
                id="offcanvasWithBothOptions"
                aria-labelledby="offcanvasWithBothOptionsLabel"
            >
                <div className="offcanvas-header" style={{
                    display: 'flex',
                    background: 'black',
                    color: 'white',
                    justifyContent: 'space-between',
                    gap: '180px',
                    alignItems: 'flex-start',
                }}>
                    <Link href="/" className="footer-widget__logo">
                        {/* <Image src="/images/logo-light.png" width={160} height={50} alt="Kidearn HTML Template" /> */}
                    </Link>
                    {/* <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
                        Backdrop with scrolling
                    </h5> */}
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                        style={{
                            filter: 'invert(1)',  /* This makes the black icon white */
                        }}
                    ></button>
                </div>
                <div className="offcanvas-body"
                    style={{
                        background: 'black',
                        color: 'white',
                        fontWeight: 'bold',
                        textAlign: 'right',
                    }}>
                    <ul
                        className='togglemenuUL'
                        style={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'end',
                            alignItems: 'start',
                            textAlign: 'right',
                            padding: '5px',
                        }}>
                        <Link href="/" className="header-Links">Home</Link>
                        <Link href="/about" className="header-Links">About</Link>
                        <Link href="/pricing" className="header-Links">Prices</Link>
                        <Link href="/event" className="header-Links">Events</Link>
                        <Link href="/jobForm" className="header-Links">Employement</Link>
                        <Link href="/register" className="header-Links">Register</Link>
                   
                        <Link href="/contact" className="header-Links">Contact</Link>
                    </ul>
                    <div className="footer-widget footer-widget--about">
                        <ul className="list-unstyled footer-widget__info">
                            <li>
                                <CallIcon2 className="footer-widget__info__icon" />
                                {/* <i className="icon-call footer-widget__info__icon"></i> */}
                                <a href="tel:3035550105">(303) 555-0105</a>
                            </li>
                            <li>
                                <EmailIcon className="footer-widget__info__icon" />
                                {/* <i className="icon-email1 footer-widget__info__icon"></i> */}
                                <a href="mailto:kidearn@envato.com">kidearn@envato.com</a>
                            </li>
                        </ul>
                        <div className="footer-widget__social">
                            <a href="https://twitter.com">
                                <i className="fab fa-twitter" aria-hidden="true"></i>
                                <span className="sr-only">Twitter</span>
                            </a>
                            <a href="https://facebook.com">
                                <i className="fab fa-facebook" aria-hidden="true"></i>
                                <span className="sr-only">Facebook</span>
                            </a>
                            <a href="https://pinterest.com">
                                <i className="fab fa-pinterest-p" aria-hidden="true"></i>
                                <span className="sr-only">Pinterest</span>
                            </a>
                            <a href="https://instagram.com">
                                <i className="fab fa-instagram" aria-hidden="true"></i>
                                <span className="sr-only">Instagram</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default OffcanvasNavbar;
