import React from 'react'

const Footer1 = () => {
  return (
    <div>
        {/* /.mobile-nav__wrapper */}
        <div className="mobile-nav__wrapper">
        <div className="mobile-nav__overlay mobile-nav__toggler" />
        {/* /.mobile-nav__overlay */}
        <div className="mobile-nav__content">
          <span className="mobile-nav__close mobile-nav__toggler">
            <i className="fa fa-times" />
          </span>
          <div className="logo-box">
            <a href="index.html" aria-label="logo image">
              <img src="images/logo-light.png" width={155} alt="" />
            </a>
          </div>
          {/* /.logo-box */}
          <div className="mobile-nav__container" />
          {/* /.mobile-nav__container */}
          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope" />
              <a href="mailto:needhelp@kidearn.com">needhelp@kidearn.com</a>
            </li>
            <li>
              <i className="fa fa-phone-alt" />
              <a href="tel:666-888-0000">666 888 0000</a>
            </li>
          </ul>
          {/* /.mobile-nav__contact */}
          <div className="mobile-nav__social">
            <a href="https://twitter.com">
              <i className="fab fa-twitter" aria-hidden="true" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="https://facebook.com">
              <i className="fab fa-facebook" aria-hidden="true" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="https://pinterest.com">
              <i className="fab fa-pinterest-p" aria-hidden="true" />
              <span className="sr-only">Pinterest</span>
            </a>
            <a href="https://instagram.com">
              <i className="fab fa-instagram" aria-hidden="true" />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
          {/* /.mobile-nav__social */}
        </div>
        {/* /.mobile-nav__content */}
      </div>
      {/* /.search-popup */}
      <div className="search-popup">
        <div className="search-popup__overlay search-toggler" />
        {/* /.search-popup__overlay */}
        <div className="search-popup__content">
          <form
            role="search"
            method="get"
            className="search-popup__form"
            action="#"
          >
            <input type="text" id="search" placeholder="Search Here..." />
            <button
              type="submit"
              aria-label="search submit"
              className="kidearn-btn kidearn-btn--base"
            >
              <span>
                <i className="icon-search" />
              </span>
            </button>
          </form>
        </div>
        {/* /.search-popup__content */}
      </div>
      <a href="#" className="scroll-top">
        <svg
          className="scroll-top__circle"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </a>
    </div>
  )
}

export default Footer1
