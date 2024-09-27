"use client";

import React from "react";

const Topbar = () => {
  return (
    <div className="topbar-one">
      <div className="custom-cursor__cursor"></div>
      <div className="custom-cursor__cursor-two"></div>
      <div className="container-fluid">
        <div className="topbar-one__inner">
          <div className="topbar-one__left">
            <div className="topbar-one__social">
              <a href="https://twitter.com">
                <i className="fab fa-twitter" aria-hidden="true"></i>
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://facebook.com">
                <i className="fab fa-facebook" aria-hidden="true"></i>
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://www.snapchat.com/add/baytummi">
                <i className="fab fa-snapchat" aria-hidden="true"></i>
                <span className="sr-only">Pinterest</span>
              </a>
              <a href="https://www.instagram.com/baytummi">
                <i className="fab fa-instagram" aria-hidden="true"></i>
                <span className="sr-only">Instagram</span>
              </a>
            </div>
            {/* <p className="topbar-one__text">Mon to Sat: 8.00 am - 7.00 pm</p> */}
          </div>
          <ul className="list-unstyled topbar-one__info">
            <li className="topbar-one__info__item">
              <i className="fas fa-map-marker topbar-one__info__icon"></i>
              <a href="https://maps.app.goo.gl/fhUFU1J1xG3L98uw7">
                {" "}
                شارع أبي بكر الصديق، النرجس، الرياض ١٣٣٢٣، المملكة العربية
                السعودية
              </a>
            </li>
            <li className="topbar-one__info__item">
              <i className="fas fa-envelope topbar-one__info__icon"></i>
              <a href="mailto:kidearn@envato.com"> info@baytummi.com</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
