"use client";

import React from "react";
import { FaWhatsapp, FaPhone } from "react-icons/fa"; // Importing icons from react-icons

const StickyContactButtons = () => {
    return (
        <>
            <div className="sticky-buttons">
                {/* Phone Button */}
                <a href="tel:+٩٦٦٥٨٣٨٢٥١١٦" className="sticky-button phone">
                    <FaPhone size={30} />
                </a>

                {/* WhatsApp Button */}
                <a href="https://wa.me/+٩٦٦٥٨٣٨٢٥١١٦" target="_blank" rel="noopener noreferrer" className="sticky-button whatsapp">
                    <FaWhatsapp size={40} />
                </a>
            </div>

            {/* Internal CSS */}
            <style jsx>
                {`
                .sticky-buttons {
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                    z-index: 1000; /* Ensures the buttons are always on top */
                }

                .sticky-button {
                    width: 60px;
                    height: 60px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 50%;
                    background-color: #25D366; /* WhatsApp green color */
                    color: white;
                    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    cursor: pointer;
                    text-decoration: none;
                }

                .sticky-button.phone {
                    background-color: #007BFF; /* Phone blue color */
                }

                .sticky-button:hover {
                    transform: translateY(-5px);
                    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
                }

                .sticky-button svg {
                    width: 30px;
                    height: 30px;
                }
            `}
            </style>
        </>
    );
};

export default StickyContactButtons;
