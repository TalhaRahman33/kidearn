"use client";

import React from "react";
import Link from "next/link";
const Topbar = () => {
  return (
    <div className="topbar-one">
      <div className="custom-cursor__cursor"></div>
      <div className="custom-cursor__cursor-two"></div>
      <div className="container-fluid">
        <div className="topbar-one__inner">
          <div className="topbar-one__left">
            <div className="topbar-one__social">
              <Link
                href="https://x.com/baytummi?s=11&t=BbD-NZe-07NQuIIabZQk1g"
                aria-label="X"
              >
                <i className="bx bx-x" aria-hidden="true"></i>
                <span className="sr-only">X</span>
              </Link>
              <Link
                href="https://www.tiktok.com/@baytummi"
                aria-label="TikTok"
                target="_blank"
              >
                <i className="bx bxl-tiktok" aria-hidden="true"></i>
                <span className="sr-only">TikTok</span>
              </Link>
              <Link href="https://www.snapchat.com/add/baytummi">
                <i className="bx bxl-snapchat" aria-hidden="true"></i>
                <span className="sr-only">Snapchat</span>
              </Link>
              <Link href="https://www.instagram.com/baytummi">
                <i className="bx bxl-instagram" aria-hidden="true"></i>
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <ul className="list-unstyled topbar-one__info">
            <li className="topbar-one__info__item">
              <i className="bx bxs-map topbar-one__info__icon"></i>
              <Link href="https://maps.app.goo.gl/fhUFU1J1xG3L98uw7">
                {" "}
                شارع أبي بكر الصديق، النرجس{" "}
              </Link>
            </li>
            <li className="topbar-one__info__item">
              <i className="bx bxs-envelope topbar-one__info__icon"></i>
              <Link href="mailto:info@baytummi.sa"> info@baytummi.sa</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
