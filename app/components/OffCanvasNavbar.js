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
                        <Link href="/" className="header-Links">الصفحة الرئيسية</Link>
                        <Link href="/about" className="header-Links">من نحن</Link>
                        <Link href="/pricing" className="header-Links">الأسعار</Link>
                        <Link href="/event" className="header-Links">الفعاليات</Link>
                        <Link href="/jobForm" className="header-Links">التوظيف</Link>
                        {/* <Link href="/register" className="header-Links">Register</Link> */}
                   
                        <Link href="/contact" className="header-Links">اتصل بنا</Link>
                    </ul>
                    <div className="footer-widget footer-widget--about">
                        <ul className="list-unstyled footer-widget__info">
                            <li>
                                <CallIcon2 className="footer-widget__info__icon" />
                                {/* <i className="icon-call footer-widget__info__icon"></i> */}
                                <Link href="tel:+٩٦٦٥٨٣٨٢٥١١٦">٠٥٨٣٨٢٥١١٦</Link>
                            </li>
                            <li>
                                <EmailIcon className="footer-widget__info__icon" />
                                {/* <i className="icon-email1 footer-widget__info__icon"></i> */}
                                <Link href="mailto:info@baytummi.sa">info@baytummi.sa</Link>
                            </li>
                        </ul>
                        {/* <div className="footer-widget__social">
                            <Link href="https://www.snapchat.com/add/baytummi">
                                <i className="fab fa-snapchat" aria-hidden="true"></i>
                                <span className="sr-only">Snapchat</span>
                            </Link>
                            <Link href="#">
                                <i className="fab fa-facebook" aria-hidden="true"></i>
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="#">
                                <i className="fab fa-pinterest-p" aria-hidden="true"></i>
                                <span className="sr-only">Pinterest</span>
                            </Link>
                            <Link href="https://www.instagram.com/baytummi">
                                <i className="fab fa-instagram" aria-hidden="true"></i>
                                <span className="sr-only">Instagram</span>
                            </Link>
                        </div> */}
                         <div className="footer-widget__social">
                    {/* <Link
                      href="https
:
//x.com/baytummi?s=11&t=BbD-NZe-07NQuIIabZQk1g"
                      aria-label="Twitter"
                    >
                      <i className="fab fa-twitter" aria-hidden="true"></i>
                      <span className="sr-only">Twitter</span>
                    </Link> */}
                    <Link href="https://x.com/baytummi?s=11&t=BbD-NZe-07NQuIIabZQk1g" aria-label="X">
    <i className="fas fa-times" aria-hidden="true"></i>
    <span className="sr-only">X</span>
</Link>
                    <Link
                      href="https://www.snapchat.com/add/baytummi"
                      aria-label="Facebook"
                    >
                      <i className="fab fa-snapchat" aria-hidden="true"></i>
                      <span className="sr-only">Snapchat</span>
                    </Link>
                    <Link
                      href="https://www.tiktok.com/@baytummi"
                      aria-label="TikTok"
                      target="_blank"
                    >
                      <i className="fab fa-tiktok" aria-hidden="true"></i>
                      <span className="sr-only">TikTok</span>
                    </Link>
                    <Link
                      href="https://www.instagram.com/baytummi"
                      aria-label="Instagram"
                    >
                      <i className="fab fa-instagram" aria-hidden="true"></i>
                      <span className="sr-only">Instagram</span>
                    </Link>
                  </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default OffcanvasNavbar;
