import React from 'react'

const Footer = () => {
  return (
    <div>
       <footer className="main-footer">
      <div className="main-footer__bg"></div>

      <img src="/images/footer-s-1-1-rtl.png" className="main-footer__shape-1" alt="kidearn" width={160} height={160} />
      <img src="/images/footer-s-1-2-rtl.png" className="main-footer__shape-2" alt="kidearn" width={160} height={160} />
      <img src="/images/footer-s-1-3.png" className="main-footer__shape-3" alt="kidearn" width={160} height={160} />
      <img src="/images/footer-s-1-4.png" className="main-footer__shape-4" alt="kidearn" width={160} height={160} />

      <div className="main-footer__top">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-xl-4">
              <div className="footer-widget footer-widget--about">
                <a href="/">
                  <img src="/images/logo-light.png" width="160" height="50" alt="Kidearn HTML Template" className="footer-widget__logo" />
                </a>
                <ul className="list-unstyled footer-widget__info">
                  <li>
                    <i className="icon-location2 footer-widget__info__icon"></i>
                    <a href="#">6391 Elgin St. Celina, Delaware 10299</a>
                  </li>
                  <li>
                    <i className="icon-call footer-widget__info__icon"></i>
                    <a href="tel:3035550105">(303) 555-0105</a>
                  </li>
                  <li>
                    <i className="icon-email1 footer-widget__info__icon"></i>
                    <a href="mailto:kidearn@envato.com">kidearn@envato.com</a>
                  </li>
                </ul>
                <div className="footer-widget__social">
                  <a href="https://twitter.com" aria-label="Twitter">
                    <i className="fab fa-twitter" aria-hidden="true"></i>
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a href="https://facebook.com" aria-label="Facebook">
                    <i className="fab fa-facebook" aria-hidden="true"></i>
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a href="https://pinterest.com" aria-label="Pinterest">
                    <i className="fab fa-pinterest-p" aria-hidden="true"></i>
                    <span className="sr-only">Pinterest</span>
                  </a>
                  <a href="https://instagram.com" aria-label="Instagram">
                    <i className="fab fa-instagram" aria-hidden="true"></i>
                    <span className="sr-only">Instagram</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-2">
              <div className="footer-widget footer-widget--links">
                <h2 className="footer-widget__title">Links</h2>
                <ul className="list-unstyled footer-widget__links">
                  <li><a href="/about">Admissions</a></li>
                  <li><a href="/programs">Programs</a></li>
                  <li><a href="/programs-d-discipline">Outdoor Games</a></li>
                  <li><a href="/programs-d-preschool">Online Classes</a></li>
                  <li><a href="/contact">Appointment</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-xl-2">
              <div className="footer-widget footer-widget--links-two">
                <h2 className="footer-widget__title">Explore</h2>
                <ul className="list-unstyled footer-widget__links">
                  <li><a href="/about">About</a></li>
                  <li><a href="/blog-grid">Our News</a></li>
                  <li><a href="/contact">Contact</a></li>
                  <li><a href="/faq">Help</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="footer-widget footer-widget--gallery">
                <h2 className="footer-widget__title">Gallery</h2>
                <ul className="list-unstyled footer-widget__gallery">
                  <li>
                    <a className="img-popup" href="/assets/images/resources/footer-gallery-1.png">
                      <img src="/images/footer-gallery-1.png" alt="footer gallery" width={100} height={100} />
                    </a>
                  </li>
                  <li>
                    <a className="img-popup" href="/assets/images/resources/footer-gallery-2.png">
                      <img src="/images/footer-gallery-2.png" alt="footer gallery" width={100} height={100} />
                    </a>
                  </li>
                  <li>
                    <a className="img-popup" href="/assets/images/resources/footer-gallery-3.png">
                      <img src="/images/footer-gallery-3.png" alt="footer gallery" width={100} height={100} />
                    </a>
                  </li>
                  <li>
                    <a className="img-popup" href="/assets/images/resources/footer-gallery-4.png">
                      <img src="/images/footer-gallery-4.png" alt="footer gallery" width={100} height={100} />
                    </a>
                  </li>
                  <li>
                    <a className="img-popup" href="/assets/images/resources/footer-gallery-5.png">
                      <img src="/images/footer-gallery-5.png" alt="footer gallery" width={100} height={100} />
                    </a>
                  </li>
                  <li>
                    <a className="img-popup" href="/assets/images/resources/footer-gallery-6.png">
                      <img src="/images/footer-gallery-6.png" alt="footer gallery" width={100} height={100} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-footer__bottom">
        <div className="container">
          <div className="main-footer__bottom__inner">
            <p className="main-footer__copyright">
              © Copyright <span className="dynamic-year"></span> by Kidearn HTML Template.
            </p>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
