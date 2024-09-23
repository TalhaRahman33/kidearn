"use client";

import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Importing the arrow up icon

const ScrollTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    // Function to update scroll progress and button visibility
    const handleScroll = () => {
        const scrollTop = window.pageYOffset;
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (scrollTop / windowHeight) * 100;

        setScrollProgress(scrolled);

        if (scrollTop > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <a
                href="#"
                className={`scrollTop ${isVisible ? 'visible' : ''}`}
                onClick={scrollToTop}
                aria-label="Scroll to top"
            >
                <svg className="scrollTop__circle" width="50" height="50" viewBox="0 0 36 36">
                    <path
                        className="scrollTop__circle-path"
                        strokeDasharray={`${scrollProgress}, 100`}
                        d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                </svg>
                <FaArrowUp className="scrollTop__icon" size={20} />
            </a>

            {/* Internal CSS */}
            <style jsx>{`
                .scrollTop {
                    position: fixed;
                    bottom: 20px;
                    left: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 50px;
                    height: 50px;
                    background-color: #ba141a;
                    color: white;
                    border-radius: 50%;
                    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
                    opacity: 0;
                    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
                    cursor: pointer;
                    z-index: 1000;
                }

                .scrollTop.visible {
                    opacity: 1;
                    transform: translateY(0);
                }

                .scrollTop__circle {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    fill: none;
                    stroke: white;
                    stroke-width: 2;
                }

                .scrollTop__circle-path {
                    transition: stroke-dasharray 0.3s ease;
                }

                .scrollTop__icon {
                    z-index: 1;
                }

                .scrollTop:hover {
                    background-color: #ff9300;
                }
            `}</style>
        </>
    );
};

export default ScrollTopButton;


// import Link from 'next/link';

// const ScrollTopButton = () => {
//   const scrollToTop = (e) => {
//     e.preventDefault();
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//     });
//   };

//   return (
//     <Link href="#" legacyBehavior>
//       <a className="scroll-top" onClick={scrollToTop}>
//         <svg
//           className="scroll-top__circle"
//           width="100%"
//           height="100%"
//           viewBox="-1 -1 102 102"
//         >
//           <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
//         </svg>
//       </a>
//     </Link>
//   );
// };

// export default ScrollTopButton;
