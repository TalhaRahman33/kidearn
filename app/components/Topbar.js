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
                <i className="fas fa-times" aria-hidden="true"></i>
                <span className="sr-only">X</span>
              </Link>
              <Link
                href="https://www.tiktok.com/@baytummi"
                aria-label="TikTok"
                target="_blank"
              >
                <i className="fab fa-tiktok" aria-hidden="true"></i>
                <span className="sr-only">TikTok</span>
              </Link>
              <Link href="https://www.snapchat.com/add/baytummi">
                <i className="fab fa-snapchat" aria-hidden="true"></i>
                <span className="sr-only">Pinterest</span>
              </Link>
              <Link href="https://www.instagram.com/baytummi">
                <i className="fab fa-instagram" aria-hidden="true"></i>
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
            {/* <p className="topbar-one__text">Mon to Sat: 8.00 am - 7.00 pm</p> */}
          </div>
          <ul className="list-unstyled topbar-one__info">
            <li className="topbar-one__info__item">
              <i className="fas fa-map-marker topbar-one__info__icon"></i>
              <Link href="https://maps.app.goo.gl/fhUFU1J1xG3L98uw7">
                {" "}
                شارع أبي بكر الصديق، النرجس{" "}
              </Link>
            </li>
            <li className="topbar-one__info__item">
              <i className="fas fa-envelope topbar-one__info__icon"></i>
              <Link href="mailto:kidearn@envato.com"> info@baytummi.com</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
