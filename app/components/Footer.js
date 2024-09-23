import React from 'react';
import Link from 'next/link';
import ExportedImage from 'next-image-export-optimizer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import StickyContactButtons from './StickyContactButtons';


const Footer = () => {
  return (
    <div>
      <footer className="main-footer">
        <div className="main-footer__bg"></div>

        <ExportedImage 
          unoptimized={true}
          src="/images/footer-s-1-1-rtl.png" 
          className="main-footer__shape-1" 
          alt="kidearn" 
          width={323} 
          height={567} 
        />
        <ExportedImage 
          unoptimized={true}
          src="/images/footer-s-1-2-rtl.png" 
          className="main-footer__shape-2" 
          alt="kidearn" 
          width={189} 
          height={216} 
        />
        <ExportedImage 
          unoptimized={true}
          src="/images/footer-s-1-3.png" 
          className="main-footer__shape-3" 
          alt="kidearn" 
          width={125} 
          height={111} 
         
        />
        <ExportedImage 
          unoptimized={true}
          src="/images/footer-s-1-4.png" 
          className="main-footer__shape-4" 
          alt="kidearn" 
          width={82} 
          height={82} 
        />

        <div className="main-footer__top">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-xl-4">
                <div className="footer-widget footer-widget--about">
                  <Link href="/">
                    <ExportedImage 
                      unoptimized={true}
                      src="/images/logo-dark.png" 
                      width={160} 
                      height={56} 
                      alt="Kidearn HTML Template" 
                      className="footer-widget__logo" 
                    />
                  </Link>
                  <ul className="list-unstyled footer-widget__info">
                    <li>
                      <i className="icon-location2 footer-widget__info__icon"></i>
                      <Link href="#">6391 Elgin St. Celina, Delaware 10299</Link>
                    </li>
                    <li>
                      <i className="icon-call footer-widget__info__icon"></i>
                      <Link href="tel:3035550105">(303) 555-0105</Link>
                    </li>
                    <li>
                      <i className="icon-email1 footer-widget__info__icon"></i>
                      <Link href="mailto:kidearn@envato.com">kidearn@envato.com</Link>
                    </li>
                  </ul>
                  <div className="footer-widget__social">
                    <Link href="#" aria-label="Twitter">
                      <i className="fab fa-twitter" aria-hidden="true"></i>
                      <span className="sr-only">Twitter</span>
                    </Link>
                    <Link href="https://www.snapchat.com/add/baytummi" aria-label="Facebook">
                      <i className="fab fa-snapchat" aria-hidden="true"></i>
                      <span className="sr-only">Snapchat</span>
                    </Link>
                    <Link href="info@baytummi.com" aria-label="Pinterest">
                      <i className="fab fa-pinterest-p" aria-hidden="true"></i>
                      <span className="sr-only">Pinterest</span>
                    </Link>
                    <Link href="https://www.instagram.com/baytummi" aria-label="Instagram">
                      <i className="fab fa-instagram" aria-hidden="true"></i>
                      <span className="sr-only">Instagram</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-2">
                <div className="footer-widget footer-widget--links">
                  <h2 className="footer-widget__title">Links</h2>
                  <ul className="list-unstyled footer-widget__links">
                    <li><Link href="/about">Admissions</Link></li>
                    <li><Link href="/programs">Programs</Link></li>
                    <li><Link href="/programs-d-discipline">Outdoor Games</Link></li>
                    <li><Link href="/programs-d-preschool">Online Classes</Link></li>
                    <li><Link href="/contact">Appointment</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-xl-2">
                <div className="footer-widget footer-widget--links-two">
                  <h2 className="footer-widget__title">Explore</h2>
                  <ul className="list-unstyled footer-widget__links">
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/blog-grid">Our News</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                    <li><Link href="/faq">Help</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-xl-4">
                <div className="footer-widget footer-widget--gallery">
                  <h2 className="footer-widget__title">Gallery</h2>
                  <ul className="list-unstyled footer-widget__gallery">
                    <li>
                      <Link className="img-popup" href="/images/footer-gallery-1.png">
                        <ExportedImage 
                          unoptimized={true}
                          src="/images/footer-gallery-1.png" 
                          alt="footer gallery" 
                          width={78} 
                          height={77} 
                        />
                      </Link>
                    </li>
                    <li>
                      <Link className="img-popup" href="/images/footer-gallery-2.png">
                        <ExportedImage 
                          unoptimized={true}
                          src="/images/footer-gallery-2.png" 
                          alt="footer gallery" 
                          width={77} 
                          height={77} 
                        />
                      </Link>
                    </li>
                    <li>
                      <Link className="img-popup" href="/images/footer-gallery-3.png">
                        <ExportedImage 
                          unoptimized={true}
                          src="/images/footer-gallery-3.png" 
                          alt="footer gallery" 
                          width={77} 
                          height={77} 
                        />
                      </Link>
                    </li>
                    <li>
                      <Link className="img-popup" href="/images/footer-gallery-4.png">
                        <ExportedImage 
                          unoptimized={true}
                          src="/images/footer-gallery-4.png" 
                          alt="footer gallery" 
                          width={78} 
                          height={77} 
                        />
                      </Link>
                    </li>
                    <li>
                      <Link className="img-popup" href="/images/footer-gallery-5.png">
                        <ExportedImage 
                          unoptimized={true}
                          src="/images/footer-gallery-5.png" 
                          alt="footer gallery" 
                          width={77} 
                          height={77} 
                        />
                      </Link>
                    </li>
                    <li>
                      <Link className="img-popup" href="/images/footer-gallery-6.png">
                        <ExportedImage 
                          unoptimized={true}
                          src="/images/footer-gallery-6.png" 
                          alt="footer gallery" 
                          width={77} 
                          height={77} 
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>



      <StickyContactButtons />


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
  );
};

export default Footer;

