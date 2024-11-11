import React from "react";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
// import { faPhone } from "@fortawesome/free-solid-svg-icons";
import StickyContactButtons from "./StickyContactButtons";
import ScrollTopButton from "./ScrollTopButton";

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
              <div className="col-md-6 col-xl-3">
                <div className="footer-widget footer-widget--about">
                  {/* <Link href="/">
                    <ExportedImage
                      unoptimized={true}
                      src="/images/logo-dark.png"
                      width={160}
                      height={56}
                      alt="Kidearn HTML Template"
                      className="footer-widget__logo"
                    />
                  </Link> */}
                  <ul className="list-unstyled footer-widget__info">
                    <li>
                      <i className="icon-location2 footer-widget__info__icon"></i>
                      <Link href="https://maps.app.goo.gl/fhUFU1J1xG3L98uw7">
                      الرياض ، حي النرجس                      </Link>
                    </li>
                    <li>
                      <i className="icon-call footer-widget__info__icon"></i>
                      <Link href="tel:+٩٦٦٥٨٣٨٢٥١١٦">٠٥٨٣٨٢٥١١٦</Link>
                    </li>
                    <li>
                      <i className="icon-email1 footer-widget__info__icon"></i>
                      <Link href="mailto:info@baytummi.com">
                        info@baytummi.com
                      </Link>
                    </li>
                  </ul>
                  <div className="footer-widget__social">
                    {/* <Link
                      href="https
:
//x.com/baytummi?s=11&t=BbD-NZe-07NQuIIabZQk1g"
                      aria-label="Twitter"
                    >
                      <i className="fab fa-twitter" aria-hidden="true"></i>
                      <span className="sr-only">Twitter</span>
                    </Link> */}
                    <Link href="https://x.com/baytummi?s=11&t=BbD-NZe-07NQuIIabZQk1g" aria-label="X">
    <i className="fas fa-times" aria-hidden="true"></i>
    <span className="sr-only">X</span>
</Link>
                    <Link
                      href="https://www.snapchat.com/add/baytummi"
                      aria-label="Facebook"
                    >
                      <i className="fab fa-snapchat" aria-hidden="true"></i>
                      <span className="sr-only">Snapchat</span>
                    </Link>
                    <Link
                      href="https://www.tiktok.com/@baytummi"
                      aria-label="TikTok"
                      target="_blank"
                    >
                      <i className="fab fa-tiktok" aria-hidden="true"></i>
                      <span className="sr-only">TikTok</span>
                    </Link>
                    <Link
                      href="https://www.instagram.com/baytummi"
                      aria-label="Instagram"
                    >
                      <i className="fab fa-instagram" aria-hidden="true"></i>
                      <span className="sr-only">Instagram</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div className="footer-widget footer-widget--links">
                  <h2 className="footer-widget__title">الأنـــشطة</h2>
                  <ul className="list-unstyled footer-widget__links">
                    <li>
                      <Link href="#">اللعب التربوي والتعلم</Link>
                    </li>
                    <li>
                      <Link href="#">الفنون والحرف اليدوية</Link>
                    </li>
                    <li>
                      <Link href="#">الأنشطة البدنية والرياضة</Link>
                    </li>
                    <li>
                      <Link href="#">الأنشطة الاجتماعية والجماعية</Link>
                    </li>
                    <li>
                      <Link href="#">مسابقات علمية</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-xl-2">
                <div className="footer-widget footer-widget--links-two">
                  <h2 className="footer-widget__title">اســـتكشف</h2>
                  <ul className="list-unstyled footer-widget__links">
                    <li>
                      <Link href="/about">من نحن</Link>
                    </li>
                    <li>
                      <Link href="/event">الفعاليات</Link>
                    </li>
                    <li>
                      <Link href="/contact">اتصل بنا</Link>
                    </li>
                    <li>
                      <Link href="/pricing">الأسعار</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-xl-4">
                <div className="footer-widget footer-widget--gallery">
                  <h2 className="footer-widget__title"> مـــعرض الـــصور</h2>
                  <ul className="list-unstyled footer-widget__gallery">
                    <li>
                      <Link className="img-popup" href="/images/footer1.jpg">
                        <ExportedImage
                          unoptimized={true}
                          src="/images/footer1.jpg"
                          alt="footer gallery"
                          width={78}
                          height={77}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link className="img-popup" href="/images/footer2.jpg">
                        <ExportedImage
                          unoptimized={true}
                          src="/images/footer2.jpg"
                          alt="footer gallery"
                          width={77}
                          height={77}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link className="img-popup" href="/images/footer3.jpg">
                        <ExportedImage
                          unoptimized={true}
                          src="/images/footer3.jpg"
                          alt="footer gallery"
                          width={77}
                          height={77}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link className="img-popup" href="/images/footer4.jpg">
                        <ExportedImage
                          unoptimized={true}
                          src="/images/footer4.jpg"
                          alt="footer gallery"
                          width={78}
                          height={77}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link className="img-popup" href="/images/footer5.jpg">
                        <ExportedImage
                          unoptimized={true}
                          src="/images/footer5.jpg"
                          alt="footer gallery"
                          width={77}
                          height={77}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link className="img-popup" href="/images/footer6.jpg">
                        <ExportedImage
                          unoptimized={true}
                          src="/images/footer6.jpg"
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
                <Link href="https://www.selsla.net/" target="_blank" className="foot">
                  Developed By Selsla Technology
                  <ExportedImage
                    unoptimized={true}
                    src="/images/heart.png"
                    alt="Heart"
                    width={25}
                    height={20}
                    className="px-1"
                  />
                </Link>
                © Copyright <span className="dynamic-year"></span>
              </p>
            </div>
          </div>
        </div>
      </footer>
      
<ScrollTopButton />
    </div>
  );
};

export default Footer;
