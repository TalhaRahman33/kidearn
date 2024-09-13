import React from "react";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";


const Header = () => {
  return (
    <div>

      <header className="main-header sticky-header sticky-header--normal">
        <div className="container-fluid">
          <div className="main-header__inner">
            <div className="main-header__logo">
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

            <nav className="main-header__nav main-menu">
              <ul className="main-menu__list">
                <li className="dropdown megamenu">
                  <Link href="/">الصفحة الرئيسية</Link>
                </li>

                <li>
                  <Link href="/about">من نحن</Link>
                </li>

                <li className="dropdown">
                  <Link href="/register">الأسعار</Link>
                </li>

                <li className="dropdown">
                  <Link href="/event">الفعاليات</Link>
                </li>

                <li className="dropdown">
                  <Link href="/jobForm">التوظيف</Link>
                </li>

                <li>
                  <Link href="/contact">اتصل بنا</Link>
                </li>
              </ul>
            </nav>

            <div className="main-header__right">
              <div className="mobile-nav__btn mobile-nav__toggler">
                <span />
                <span />
                <span />
              </div>

              <a className="main-header__call" href="tel:3035550105">
                <i className="icon-call main-header__call__icon" />
                <span className="main-header__call__content">
                  <span className="main-header__call__number">
                    (303) 555-0105
                  </span>
                  <span className="main-header__call__text">
                    Call to Questions
                  </span>
                </span>
              </a>

              <Link href="/contact" className="kidearn-btn main-header__btn">
                <span>Book a Visit</span>
              </Link>
              
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
