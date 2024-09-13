"use client";

import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Footer1 from "./components/Footer1";
import Header from "./components/Header";
import { ParallaxProvider } from "react-scroll-parallax";
import Topbar from "./components/Topbar";
import ExportedImage from "next-image-export-optimizer";
import Testimonials from "./components/Testimonials";
import PricingSection from "./components/PricingSection";

export default function Home() {
  return (
    <ParallaxProvider>
      <div className="custom-cursor">
        <div className="page-wrapper">
          
          <Topbar />
          <Header />

          <Banner />

          <section className="service-one">
            <div
                className="service-one__bg kidearn-splax"
                data-para-options='{"orientation": "up", "scale": 1.5, "overflow": true}'
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300.000000 369.000000">
                    <g transform="translate(0.000000,369.000000) scale(0.050000,-0.050000)">
                        <path
                            d="M4517 7359 c-701 -82 -1096 -398 -1368 -1099 -248 -640 -417 -846 -879 -1075 -164 -81 -249 -115 -700 -276 -702 -251 -1101 -573 -1365 -1099 -550 -1096 117 -2640 1265 -2927 367 -91 998 -110 1674 -51 453 40 1043 45 1296 10 427 -59 1099 -221 1411 -341 l149 -58 0 3264 0 3263 -95 63 c-395 264 -902 383 -1388 326z"
                        />
                    </g>
                </svg>
            </div>
            <div
                className="service-one__shape kidearn-splax"
                style={{ backgroundImage: 'url(images/about-bg-shape-1.png)' }}
                data-para-options='{"orientation": "left", "scale": 1.5, "overflow": true}'
            ></div>
            <div className="container">
                <div className="row gutter-y-30">
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                        <div className="service-one__item" style={{ '--accent-color': '#75C137' }}>
                            <div className="service-one__item__image-wrapper">
                                <div
                                    className="service-one__item__image kidearn-tilt"
                                    data-tilt-options='{"glare": false, "maxglare": 0, "maxtilt": 7, "speed": 700, "scale": 1}'
                                >
                                    <img src="images/service-1-1.jpg" alt="kidearn" />
                                </div>
                                <div className="service-one__item__ball"></div>
                            </div>
                            <h4 className="service-one__item__title">Home-like environment</h4>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                        <div className="service-one__item service-one__item--order" style={{ '--accent-color': '#26A6A1' }}>
                            <div className="service-one__item__image-wrapper">
                                <div
                                    className="service-one__item__image kidearn-tilt"
                                    data-tilt-options='{"glare": false, "maxglare": 0, "maxtilt": 7, "speed": 700, "scale": 1}'
                                >
                                    <img src="images/service-1-2.jpg" alt="kidearn" />
                                </div>
                                <div className="service-one__item__ball"></div>
                            </div>
                            <h4 className="service-one__item__title">Safety and security</h4>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                        <div className="service-one__item" style={{ '--accent-color': '#F25334' }}>
                            <div className="service-one__item__image-wrapper">
                                <div
                                    className="service-one__item__image kidearn-tilt"
                                    data-tilt-options='{"glare": false, "maxglare": 0, "maxtilt": 7, "speed": 700, "scale": 1}'
                                >
                                    <img src="images/service-1-3.jpg" alt="kidearn" />
                                </div>
                                <div className="service-one__item__ball"></div>
                            </div>
                            <h4 className="service-one__item__title">Quality educators</h4>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                        <div className="service-one__item service-one__item--order" style={{ '--accent-color': '#FFAA23' }}>
                            <div className="service-one__item__image-wrapper">
                                <div
                                    className="service-one__item__image kidearn-tilt"
                                    data-tilt-options='{"glare": false, "maxglare": 0, "maxtilt": 7, "speed": 700, "scale": 1}'
                                >
                                    <img src="images/service-1-4.jpg" alt="kidearn" />
                                </div>
                                <div className="service-one__item__ball"></div>
                            </div>
                            <h4 className="service-one__item__title">Play to learn</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section className="about-one">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 wow fadeInLeft" data-wow-delay="200ms">
                        <div className="about-one__content">
                            <div className="sec-title text-left">
                                <h6 className="sec-title__tagline">About Us</h6>
                                <h3 className="sec-title__title">
                                    Our passion is childhood,<br /> and we’re in kindergarten
                                </h3>
                            </div>
                            <p className="about-one__content__text">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                scrambled it to make a type specimen book. It has survived not only five centuries, but also
                            </p>
                            <a href="about.html" className="kidearn-btn">
                                <span>Learn More</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-one__image">
                            <div
                                className="about-one__image__one kidearn-tilt"
                                data-tilt-options='{"glare": false, "maxglare": 0, "maxtilt": 5, "speed": 700, "scale": 1}'
                            >
                                <img src="images/about-1-1.jpg" alt="kidearn" />
                            </div>
                            <div className="about-one__image__border wow fadeInUp" data-wow-delay="200ms">
                                <img src="images/about-1-border.jpg" alt="kidearn" />
                            </div>
                            <div
                                className="about-one__image__leaf kidearn-splax"
                                data-para-options='{"orientation": "left", "scale": 1.5, "overflow": true}'
                            >
                                <img src="images/about-1-leaf-rtl.png" alt="kidearn" />
                            </div>
                            <div className="about-one__image__ball wow fadeInUp" data-wow-delay="100ms"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <Testimonials />


        <section className="video-one">
        <div className="video-one__bg"></div>
        <div
          className="video-one__bg-shape1 kidearn-splax"
          data-para-options='{"orientation": "down", "scale": 1.9, "delay": ".6", "transition": "cubic-bezier(0,0,0,1)", "overflow": true}'
        >
          <ExportedImage
            src="/images/video-shape-1.png"
            alt="kidearn"
            unoptimized={true}
            width={133}
            height={89}
          />
        </div>
        <div
          className="video-one__bg-shape2 kidearn-splax"
          data-para-options='{"orientation": "up", "scale": 1.7, "delay": ".6", "transition": "cubic-bezier(0,0,0,1)", "overflow": true}'
        >
          <ExportedImage
            src="/images/video-shape-2.png"
            alt="kidearn"
            unoptimized={true}
            width={113}
            height={93}
          />
        </div>
        <div
          className="video-one__bg-shape3 kidearn-splax"
          data-para-options='{"orientation": "right", "scale": 1.8, "delay": ".6", "transition": "cubic-bezier(0,0,0,1)", "overflow": true}'
        >
          <ExportedImage
            src="/images/video-shape-3.png"
            alt="kidearn"
            unoptimized={true}
            width={101}
            height={98}
          />
        </div>
        <div
          className="video-one__bg-shape4 kidearn-splax"
          data-para-options='{"orientation": "right", "scale": 1.6, "delay": ".6", "transition": "cubic-bezier(0,0,0,1)", "overflow": true}'
        >
          <ExportedImage
            src="/images/video-shape-4.png"
            alt="kidearn"
            unoptimized={true}
            width={133}
            height={134}
          />
        </div>
        <div
          className="video-one__bg-shape5 kidearn-splax"
          data-para-options='{"orientation": "left", "scale": 1.6, "delay": ".6", "transition": "cubic-bezier(0,0,0,1)", "overflow": true}'
        >
          <ExportedImage
            src="/images/video-shape-5.png"
            alt="kidearn"
            unoptimized={true}
            width={106}
            height={109}
          />
        </div>
        <div
          className="video-one__bg-shape6 kidearn-splax"
          data-para-options='{"orientation": "right", "scale": 1.7, "delay": ".6", "transition": "cubic-bezier(0,0,0,1)", "overflow": true}'
        >
          <ExportedImage
            src="/images/video-shape-6.png"
            alt="kidearn"
            unoptimized={true}
            width={147}
            height={103}
          />
        </div>
        <div
          className="video-one__bg-shape7 kidearn-splax"
          data-para-options='{"orientation": "left", "scale": 1.3, "delay": ".6", "transition": "cubic-bezier(0,0,0,1)", "overflow": true}'
        >
          <ExportedImage
            src="/images/video-shape-7.png"
            alt="kidearn"
            unoptimized={true}
            width={154}
            height={221}
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 d-flex align-items-center">
              <div className="video-one__content">
                <h3 className="video-one__content__title">
                  Let’s discover the best campus through a video tour
                </h3>
                <a href="/contact" className="kidearn-btn">
                  <span>Visit Now</span>
                </a>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="video-one__btn-shape">
                <div className="video-one__btn">
                  <ExportedImage
                    src="/images/video-bg-1.jpg"
                    alt="kidearn"
                    unoptimized={true}
                    width={555}
                    height={597}
                  />
                  <a
                    href="https://www.youtube.com/watch?v=0MuL8fd3pb8"
                    className="video-popup"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-play"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      
      <section className="program-one">
        <div
          className="program-one__bg kidearn-splax"
          data-para-options='{ "orientation": "up", "scale": 2.5, "overflow": true }'
        >
          <ExportedImage
            src="/images/program-bg-shape.png"
            alt="kidearn"
            width={1326}
            height={525}
            unoptimized={true}
          />
        </div>
        <div className="container">
          <div className="sec-title text-center">
            <h6 className="sec-title__tagline">Our Programs</h6>
            <h3 className="sec-title__title">
              We meet kids at their level
              <br />
              regardless of their age
            </h3>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div
                className="program-one__item wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="00ms"
                style={{ "--accent-color": "#F25334" }}
              >
                <div className="program-one__item__shape">
                  <svg
                    className="program-one__item__shape-one"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 43"
                  >
                    <path d="M11.0817 6.98831C-9.7901 23.3302 2.35379 52.1177 18.5511 39.5735C34.7647 27.0458 39.1287 -14.9434 11.0817 6.98831Z"></path>
                  </svg>
                  <svg
                    className="program-one__item__shape-two"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 15 21"
                  >
                    <path d="M5.28824 3.20713C-4.67276 11.0063 1.12287 24.745 8.85298 18.7583C16.5909 12.7795 18.6736 -7.25972 5.28824 3.20713Z"></path>
                  </svg>
                </div>
                <div className="program-one__item__bg"></div>
                <div className="program-one__item__image">
                  <ExportedImage
                    src="/images/program-1-1.jpg"
                    alt="Toddler"
                    width={217}
                    height={136}
                    unoptimized={true}
                  />
                </div>
                <div className="program-one__item__content">
                  <h3 className="program-one__item__title">
                    <a href="programs-d-toddler.html">Toddler</a>
                  </h3>
                  <div className="program-one__item__age">(1.5-3 years)</div>
                  <p className="program-one__item__text">
                    Lorem ipsum dolor sit amet consectetur. Convallis
                  </p>
                  <a
                    className="program-one__item__rm"
                    href="programs-d-toddler.html"
                  >
                    <span className="icon-right-arrow"></span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="program-one__item program-one__item--order wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="100ms"
                style={{ "--accent-color": "#75C137" }}
              >
                <div className="program-one__item__shape">
                  <svg
                    className="program-one__item__shape-one"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 43"
                  >
                    <path d="M11.0817 6.98831C-9.7901 23.3302 2.35379 52.1177 18.5511 39.5735C34.7647 27.0458 39.1287 -14.9434 11.0817 6.98831Z"></path>
                  </svg>
                  <svg
                    className="program-one__item__shape-two"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 15 21"
                  >
                    <path d="M5.28824 3.20713C-4.67276 11.0063 1.12287 24.745 8.85298 18.7583C16.5909 12.7795 18.6736 -7.25972 5.28824 3.20713Z"></path>
                  </svg>
                </div>
                <div className="program-one__item__bg"></div>
                <div className="program-one__item__image">
                  <ExportedImage
                    src="/images/program-1-2.jpg"
                    alt="Preschool"
                    width={217}
                    height={136}
                    unoptimized={true}
                  />
                </div>
                <div className="program-one__item__content">
                  <h3 className="program-one__item__title">
                    <a href="programs-d-preschool.html">Preschool</a>
                  </h3>
                  <div className="program-one__item__age">(2-3 years)</div>
                  <p className="program-one__item__text">
                    Lorem ipsum dolor sit amet consectetur. Convallis
                  </p>
                  <a
                    className="program-one__item__rm"
                    href="programs-d-preschool.html"
                  >
                    <span className="icon-right-arrow"></span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="program-one__item wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="200ms"
                style={{ "--accent-color": "#2390FF" }}
              >
                <div className="program-one__item__shape">
                  <svg
                    className="program-one__item__shape-one"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 43"
                  >
                    <path d="M11.0817 6.98831C-9.7901 23.3302 2.35379 52.1177 18.5511 39.5735C34.7647 27.0458 39.1287 -14.9434 11.0817 6.98831Z"></path>
                  </svg>
                  <svg
                    className="program-one__item__shape-two"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 15 21"
                  >
                    <path d="M5.28824 3.20713C-4.67276 11.0063 1.12287 24.745 8.85298 18.7583C16.5909 12.7795 18.6736 -7.25972 5.28824 3.20713Z"></path>
                  </svg>
                </div>
                <div className="program-one__item__bg"></div>
                <div className="program-one__item__image">
                  <ExportedImage
                    src="/images/program-1-3.jpg"
                    alt="Kindergarten"
                    width={217}
                    height={136}
                    unoptimized={true}
                  />
                </div>
                <div className="program-one__item__content">
                  <h3 className="program-one__item__title">
                    <a href="programs-d-kindergarten.html">Kindergarten</a>
                  </h3>
                  <div className="program-one__item__age">(4-5 years)</div>
                  <p className="program-one__item__text">
                    Lorem ipsum dolor sit amet consectetur. Convallis
                  </p>
                  <a
                    className="program-one__item__rm"
                    href="programs-d-kindergarten.html"
                  >
                    <span className="icon-right-arrow"></span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="program-one__item program-one__item--order wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="300ms"
                style={{ "--accent-color": "#FFAA23" }}
              >
                <div className="program-one__item__shape">
                  <svg
                    className="program-one__item__shape-one"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 43"
                  >
                    <path d="M11.0817 6.98831C-9.7901 23.3302 2.35379 52.1177 18.5511 39.5735C34.7647 27.0458 39.1287 -14.9434 11.0817 6.98831Z"></path>
                  </svg>
                  <svg
                    className="program-one__item__shape-two"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 15 21"
                  >
                    <path d="M5.28824 3.20713C-4.67276 11.0063 1.12287 24.745 8.85298 18.7583C16.5909 12.7795 18.6736 -7.25972 5.28824 3.20713Z"></path>
                  </svg>
                </div>
                <div className="program-one__item__bg"></div>
                <div className="program-one__item__image">
                  <ExportedImage
                    src="/images/program-1-4.jpg"
                    alt="After School"
                    width={217}
                    height={136}
                    unoptimized={true}
                  />
                </div>
                <div className="program-one__item__content">
                  <h3 className="program-one__item__title">
                    <a href="programs-d-after-school.html">After School</a>
                  </h3>
                  <div className="program-one__item__age">(5-12 years)</div>
                  <p className="program-one__item__text">
                    Lorem ipsum dolor sit amet consectetur. Convallis
                  </p>
                  <a
                    className="program-one__item__rm"
                    href="programs-d-after-school.html"
                  >
                    <span className="icon-right-arrow"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="mail-one">
        <div
          className="mail-one__bg-shape"
          style={{ backgroundImage: "url(images/mail-shape-1-rtl.png)" }}
        ></div>
        <div
          className="mail-one__border-shape kidearn-splax"
          style={{ backgroundImage: "url(images/mail-shape-2.png)" }}
          data-para-options={{
            orientation: "down",
            scale: 1.2,
            delay: ".6",
            transition: "cubic-bezier(0,0,0,1)",
            overflow: true,
          }}
        ></div>
        <div className="container">
          <div className="mail-one__area">
            <div className="mail-one__bg"></div>
            <div className="mail-one__content">
              <h3 className="mail-one__title">
                Subscribe to our newsletter
                <br /> for daily updates
              </h3>
              <form
                action="#"
                data-url="MAILCHIMP_FORM_URL"
                className="mail-one__form mc-form"
              >
                <input type="text" name="EMAIL" placeholder="Email Address" />
                <button type="submit" className="kidearn-btn">
                  <span>Subscribe</span>
                </button>
              </form>
              {/* /. mc-form */}
              <div className="mc-form__response"></div>
              {/* /.mc-form__response */}
            </div>
            <div
              className="mail-one__shape kidearn-splax"
              data-para-options={{
                orientation: "up",
                scale: 1.5,
                delay: ".6",
                transition: "cubic-bezier(0,0,0,1)",
                overflow: true,
              }}
            >
              <ExportedImage
                unoptimized={true}
                width={957}
                height={329}
                src="images/mail-shape-3.png"
                alt="kidearn"
              />
            </div>
          </div>
        </div>
        {/* /.container */}
      </section>



<PricingSection />


          <Footer />
          <Footer1 />
        </div>
      </div>
    </ParallaxProvider>
  );
}
