"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { EmailIcon } from "./EmailIcon";
import CallIcon2 from "./CallIcon2";

const OFFCANVAS_ID = "offcanvasWithBothOptions";

export default function OffcanvasNavbar() {
  const router = useRouter();

  const closeOffcanvas = async () => {
    // Bootstrap offcanvas instance close
    const el = document.getElementById(OFFCANVAS_ID);
    if (!el) return;

    // bootstrap global check (because in Next sometimes it loads late)
    const bs = window.bootstrap;
    if (!bs) return;

    const instance = bs.Offcanvas.getInstance(el) || new bs.Offcanvas(el);
    instance.hide();
  };

  const go = async (href) => {
    await closeOffcanvas();      // ✅ close first (remove overlay)
    router.push(href);           // ✅ then navigate
  };

  return (
    <>
      {/* Button to trigger the offcanvas */}
      <button
        style={{
          backgroundColor: "transparent",
          color: "black",
          border: "none",
          padding: "5px",
        }}
        className="btn hamburger-toggle"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target={`#${OFFCANVAS_ID}`}
        aria-controls={OFFCANVAS_ID}
        aria-label="Toggle navigation"
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
        id={OFFCANVAS_ID}
        aria-labelledby={`${OFFCANVAS_ID}Label`}
      >
        <div
          className="offcanvas-header"
          style={{
            display: "flex",
            background: "black",
            color: "white",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Link href="/" className="footer-widget__logo" onClick={(e) => {
            e.preventDefault();
            go("/");
          }}>
            {/* logo optional */}
          </Link>

          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            style={{ filter: "invert(1)" }}
          ></button>
        </div>

        <div
          className="offcanvas-body"
          style={{
            background: "black",
            color: "white",
            fontWeight: "bold",
            textAlign: "right",
          }}
        >
          {/* ✅ NAV LINKS (router.push fix) */}
          <ul
            className="togglemenuUL"
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
              alignItems: "start",
              textAlign: "right",
              padding: "5px",
              margin: "0",
              listStyle: "none",
            }}
          >
            <li><a className="nav-link" href="/" onClick={(e) => { e.preventDefault(); go("/"); }}>الصفحة الرئيسية</a></li>
            <li><a className="nav-link" href="/about" onClick={(e) => { e.preventDefault(); go("/about"); }}>من نحن</a></li>
            <li><a className="nav-link" href="/pricing" onClick={(e) => { e.preventDefault(); go("/pricing"); }}>الأسعار</a></li>
            <li><a className="nav-link" href="/event" onClick={(e) => { e.preventDefault(); go("/event"); }}>الفعاليات</a></li>
            <li><a className="nav-link" href="/jobForm" onClick={(e) => { e.preventDefault(); go("/jobForm"); }}>التوظيف</a></li>
            <li><a className="nav-link" href="/contact" onClick={(e) => { e.preventDefault(); go("/contact"); }}>اتصل بنا</a></li>
          </ul>

          {/* CONTACT INFO */}
          <div className="footer-widget footer-widget--about">
            <ul className="list-unstyled footer-widget__info">
              <li>
                <CallIcon2 className="footer-widget__info__icon" />
                <Link href="tel:+966583825116">٠٥٨٣٨٢٥١١٦</Link>
              </li>
              <li>
                <EmailIcon className="footer-widget__info__icon" />
                <Link href="mailto:info@baytummi.sa">info@baytummi.sa</Link>
              </li>
            </ul>

            {/* Social Icons (same as your code) */}
            <div className="footer-widget__social">
              <Link href="https://x.com/baytummi?s=11&t=BbD-NZe-07NQuIIabZQk1g" aria-label="X">
                <i className="bx bxl-twitter" aria-hidden="true"></i>
              </Link>
              <Link href="https://www.snapchat.com/add/baytummi" aria-label="Snapchat">
                <i className="bx bxl-snapchat" aria-hidden="true"></i>
              </Link>
              <Link href="https://www.tiktok.com/@baytummi" aria-label="TikTok" target="_blank">
                <i className="bx bxl-tiktok" aria-hidden="true"></i>
              </Link>
              <Link href="https://www.instagram.com/baytummi" aria-label="Instagram">
                <i className="bx bxl-instagram" aria-hidden="true"></i>
              </Link>
            </div>

            {/* Buttons */}
            <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <a
                href="/login"
                onClick={(e) => { e.preventDefault(); go("/login"); }}
                style={btnStyle}
              >
                <i className="bx bx-log-in-circle"></i>
                تسجيل الدخول
              </a>

              <a
                href="/signup"
                onClick={(e) => { e.preventDefault(); go("/signup"); }}
                style={btnStyle}
              >
                <i className="bx bx-user-plus"></i>
                قم بالتسجيل الآن
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const btnStyle = {
  width: "130px",
  backgroundColor: "#F25334",
  color: "white",
  fontSize: "14px",
  fontWeight: "500",
  padding: "7px 7px",
  borderRadius: "12px",
  height: "45px",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "5px",
  textDecoration: "none",
};
