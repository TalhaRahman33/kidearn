import React from 'react'

const Header = () => {
  return (
    <div>
       <header className="main-header sticky-header sticky-header--normal">
        <div className="container-fluid">
          <div className="main-header__inner">
            <div className="main-header__logo">
              <a href="/">
                <img
                  src="images/logo-dark.png"
                  alt="Kidearn HTML"
                  width={160}
                />
              </a>
            </div>
            {/* /.main-header__logo */}
            <nav className="main-header__nav main-menu">
              <ul className="main-menu__list">
                <li className="dropdown megamenu">
                  <a href="/">Home</a>
                  <ul>
                    <li>
                      <section className="home-showcase">
                        <div className="container">
                          <div className="home-showcase__inner">
                            <div className="row">
                              <div className="col-md-6 col-lg-3">
                                <div className="demo-one__card">
                                  <div className="demo-one__image">
                                    <img
                                      src="images/home-showcase-1.jpg"
                                      alt=""
                                    />
                                    <div className="demo-one__btns">
                                      <a
                                        href="/"
                                        className="kidearn-btn demo-one__btn"
                                      >
                                        <span>Multi Page</span>
                                      </a>
                                      {/* /.thm-btn demo-one__btn */}
                                      <a
                                        href="index-one-page.html"
                                        className="kidearn-btn demo-one__btn"
                                      >
                                        <span>One Page</span>
                                      </a>
                                      {/* /.thm-btn demo-one__btn */}
                                    </div>
                                    {/* /.demo-one__btns */}
                                  </div>
                                  {/* /.demo-one__image */}
                                  <div className="demo-one__content">
                                    <h3 className="demo-one__title">
                                      <a href="/">Homepage 01</a>
                                    </h3>
                                    {/* /.demo-one__title */}
                                  </div>
                                  {/* /.demo-one__content */}
                                </div>
                                {/* /.demo-one__card */}
                              </div>
                              {/* /.col-md-6 col-lg-3 */}
                              <div className="col-md-6 col-lg-3">
                                <div className="demo-one__card">
                                  <div className="demo-one__image">
                                    <img
                                      src="images/home-showcase-2.jpg"
                                      alt=""
                                    />
                                    <div className="demo-one__btns">
                                      <a
                                        href="index-2.html"
                                        className="kidearn-btn demo-one__btn"
                                      >
                                        <span>Multi Page</span>
                                      </a>
                                      {/* /.thm-btn demo-one__btn */}
                                      <a
                                        href="index-2-one-page.html"
                                        className="kidearn-btn demo-one__btn"
                                      >
                                        <span>One Page</span>
                                      </a>
                                      {/* /.thm-btn demo-one__btn */}
                                    </div>
                                    {/* /.demo-one__btns */}
                                  </div>
                                  {/* /.demo-one__image */}
                                  <div className="demo-one__content">
                                    <h3 className="demo-one__title">
                                      <a href="index-2.html">Homepage 02</a>
                                    </h3>
                                    {/* /.demo-one__title */}
                                  </div>
                                  {/* /.demo-one__content */}
                                </div>
                                {/* /.demo-one__card */}
                              </div>
                              {/* /.col-md-6 col-lg-3 */}
                              <div className="col-md-6 col-lg-3">
                                <div className="demo-one__card">
                                  <div className="demo-one__image">
                                    <img
                                      src="images/home-showcase-3.jpg"
                                      alt=""
                                    />
                                    <div className="demo-one__btns">
                                      <a
                                        href="index-3.html"
                                        className="kidearn-btn demo-one__btn"
                                      >
                                        <span>Multi Page</span>
                                      </a>
                                      {/* /.thm-btn demo-one__btn */}
                                      <a
                                        href="index-3-one-page.html"
                                        className="kidearn-btn demo-one__btn"
                                      >
                                        <span>One Page</span>
                                      </a>
                                      {/* /.thm-btn demo-one__btn */}
                                    </div>
                                    {/* /.demo-one__btns */}
                                  </div>
                                  {/* /.demo-one__image */}
                                  <div className="demo-one__content">
                                    <h3 className="demo-one__title">
                                      <a href="index-3.html">Homepage 03</a>
                                    </h3>
                                    {/* /.demo-one__title */}
                                  </div>
                                  {/* /.demo-one__content */}
                                </div>
                                {/* /.demo-one__card */}
                              </div>
                              {/* /.col-md-6 col-lg-3 */}
                              <div className="col-md-6 col-lg-3">
                                <div className="demo-one__card">
                                  <div className="demo-one__image">
                                    <img
                                      src="images/home-showcase-4.jpg"
                                      alt=""
                                    />
                                    <div className="demo-one__btns">
                                      <a
                                        href="index-4.html"
                                        className="kidearn-btn demo-one__btn"
                                      >
                                        <span>Multi Page</span>
                                      </a>
                                      {/* /.thm-btn demo-one__btn */}
                                      <a
                                        href="index-4-one-page.html"
                                        className="kidearn-btn demo-one__btn"
                                      >
                                        <span>One Page</span>
                                      </a>
                                      {/* /.thm-btn demo-one__btn */}
                                    </div>
                                    {/* /.demo-one__btns */}
                                  </div>
                                  {/* /.demo-one__image */}
                                  <div className="demo-one__content">
                                    <h3 className="demo-one__title">
                                      <a href="index-dark.html">Homepage 04</a>
                                    </h3>
                                    {/* /.demo-one__title */}
                                  </div>
                                  {/* /.demo-one__content */}
                                </div>
                                {/* /.demo-one__card */}
                              </div>
                              {/* /.col-md-6 col-lg-3 */}
                            </div>
                            {/* /.row */}
                          </div>
                          {/* /.home-showcase__inner */}
                        </div>
                        {/* /.container */}
                      </section>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li className="dropdown">
                  <a href="#">Pages</a>
                  <ul>
                    <li>
                      <a href="team.html">Our teacher</a>
                    </li>
                    <li>
                      <a href="team-carousel.html">Teacher carousel</a>
                    </li>
                    <li>
                      <a href="team-details.html">Teacher details</a>
                    </li>
                    <li>
                      <a href="pricing.html">Pricing tables</a>
                    </li>
                    <li>
                      <a href="#">Gallery</a>
                      <ul>
                        <li>
                          <a href="gallery-filter.html">Gallery filter</a>
                        </li>
                        <li>
                          <a href="gallery-grid.html">Gallery grid</a>
                        </li>
                        <li>
                          <a href="gallery-carousel.html">Gallery carousel</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="faq.html">FAQs</a>
                    </li>
                    <li>
                      <a href="login.html">Login</a>
                    </li>
                    <li>
                      <a href="404.html">404 error</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#">Events</a>
                  <ul>
                    <li>
                      <a href="events-grid.html">Events grid</a>
                    </li>
                    <li>
                      <a href="events-carousel.html">Events carousel</a>
                    </li>
                    <li>
                      <a href="events-details.html">Events details</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#">Programs</a>
                  <ul>
                    <li>
                      <a href="programs-grid.html">Programs grid</a>
                    </li>
                    <li>
                      <a href="programs-carousel.html">Programs carousel</a>
                    </li>
                    <li>
                      <a href="programs-d-toddler.html">Toddler program</a>
                    </li>
                    <li>
                      <a href="programs-d-preschool.html">Preschool program</a>
                    </li>
                    <li>
                      <a href="programs-d-kindergarten.html">
                        Kindergarten program
                      </a>
                    </li>
                    <li>
                      <a href="programs-d-flex-care.html">Flex-care program</a>
                    </li>
                    <li>
                      {" "}
                      <a href="programs-d-art.html">Art program</a>
                    </li>
                    <li>
                      <a href="programs-d-discipline.html">
                        Discipline program
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#">Shop</a>
                  <ul className="sub-menu">
                    <li className="dropdown">
                      <a href="#">Products</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="products.html">No sidebar</a>
                        </li>
                        <li>
                          <a href="products-left.html">Left sidebar</a>
                        </li>
                        <li>
                          <a href="products-right.html">Right sidebar</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="products-carousel.html">Products carousel</a>
                    </li>
                    <li>
                      <a href="product-details.html">Product details</a>
                    </li>
                    <li>
                      <a href="cart.html">Cart</a>
                    </li>
                    <li>
                      <a href="checkout.html">Checkout</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#">News</a>
                  <ul className="sub-menu">
                    <li className="dropdown">
                      <a href="#">News grid</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="blog-grid.html">No sidebar</a>
                        </li>
                        <li>
                          <a href="blog-grid-left.html">Left sidebar</a>
                        </li>
                        <li>
                          <a href="blog-grid-right.html">Right sidebar</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">News list</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="blog-list.html">No sidebar</a>
                        </li>
                        <li>
                          <a href="blog-list-left.html">Left sidebar</a>
                        </li>
                        <li>
                          <a href="blog-list-right.html">Right sidebar</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="blog-carousel.html">News carousel</a>
                    </li>
                    <li className="dropdown">
                      <a href="#">News details</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="blog-details.html">No sidebar</a>
                        </li>
                        <li>
                          <a href="blog-details-left.html">Left sidebar</a>
                        </li>
                        <li>
                          <a href="blog-details-right.html">Right sidebar</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </nav>
            {/* /.main-header__nav */}
            <div className="main-header__right">
              <div className="mobile-nav__btn mobile-nav__toggler">
                <span />
                <span />
                <span />
              </div>
              {/* /.mobile-nav__toggler */}
              <a className="main-header__call" href="tel:303555-0105">
                <i className=" icon-call main-header__call__icon" />
                <span className=" main-header__call__content">
                  <span className="main-header__call__number">
                    (303) 555-0105
                  </span>
                  {/* /.main-header__call__number */}
                  <span className="main-header__call__text">
                    Call to Questions
                  </span>
                  {/* /.main-header__call__text */}
                </span>
                {/* /.main-header__call__content */}
              </a>
              <a href="/contact" className="kidearn-btn main-header__btn">
                <span>Book a Visit</span>
              </a>
              {/* /.thm-btn main-header__btn */}
            </div>
            {/* /.main-header__right */}
          </div>
          {/* /.main-header__inner */}
        </div>
        {/* /.container-fluid */}
      </header>
    </div>
  )
}

export default Header
