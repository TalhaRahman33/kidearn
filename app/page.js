import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Footer1 from "./components/Footer1";
import Header from "./components/Header";

import ServiceOne from "./components/ServiceOne";
import Testimonials from "./components/Testimonials";
// import Testimonials from "./components/Testimonials";
import ExportedImage from "next-image-export-optimizer";

export default function Home() {
  return (
    <>
      <Header />

      <Banner />

      <ServiceOne />

      <section className="about-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 wow fadeInLeft" data-wow-delay="200ms">
              <div className="about-one__content">
                <div className="sec-title text-left">
                  <h6 className="sec-title__tagline">About Us</h6>
                  <h3 className="sec-title__title">
                    Our passion is childhood,
                    <br /> and we’re in kindergarten
                  </h3>
                </div>
                <p className="about-one__content__text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also
                </p>
                <a href="/about" className="kidearn-btn">
                  <span>Learn More</span>
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-one__image">
                <div
                  className="about-one__image__one kidearn-tilt"
                  data-tilt-options='{"glare": false, "maxGlare": 0, "maxTilt": 5, "speed": 700, "scale": 1}'
                >
                  <ExportedImage
                    unoptimized={true}
                    width={479}
                    height={482}
                    src="/images/about-1-1.jpg"
                    alt="kidearn"
                  />
                </div>
                <div
                  className="about-one__image__border wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  <ExportedImage
                    unoptimized={true}
                    width={489}
                    height={526}
                    src="/images/about-1-border.jpg"
                    alt="kidearn"
                  />
                </div>
                <div
                  className="about-one__image__leaf kidearn-splax"
                  data-para-options='{"orientation": "left", "scale": 1.5, "overflow": true}'
                >
                  <ExportedImage
                    unoptimized={true}
                    width={255}
                    height={239}
                    src="/images/about-1-leaf-rtl.png"
                    alt="kidearn"
                  />
                </div>
                <div
                  className="about-one__image__ball wow fadeInUp"
                  data-wow-delay="100ms"
                ></div>
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

      {/* <ProgramOne /> */}

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

      {/* <section className="team-one">
        <div
          className="team-one__bg kidearn-splax"
          data-para-options='{
      "orientation": "up",
      "scale": 1.5,
      "overflow": true
    }'
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1195 1252">
            <path d="M211.29 830.798C-198.76 707.556 65.7912 34.8903 361.688 40.6371C657.585 46.3839 708.035 114.612 848.844 103.059C989.653 91.5051 1158.39 -92.3898 1316.24 63.0933C1474.09 218.592 1356.45 408.609 1425.45 592.889C1478.72 735.167 1718.31 1057.1 1492.55 1209.42C1209.75 1400.22 1025.31 885.993 761.277 816.097C497.243 746.202 515.507 922.251 211.29 830.798Z"></path>
          </svg>
        </div>
        <div className="container">
          <div className="sec-title text-center">
            <h6 className="sec-title__tagline">Our Teacher</h6>
            <h3 className="sec-title__title">
              Meet our expert &amp; smart
              <br />
              superheroes!
            </h3>
          </div>
          <div
            className="team-one__carousel kidearn-owl__carousel kidearn-owl__carousel--basic-nav kidearn-owl__carousel--with-shadow owl-carousel owl-theme"
            data-owl-options='{
        "items": 1,
        "margin": 0,
        "loop": false,
        "smartspeed": 700,
        "nav": true,
        "navText": ["<span class=\"fa fa-angle-left\"></span>", "<span class=\"fa fa-angle-right\"></span>"],
        "dots": true,
        "autoplay": false,
        "responsive": {
          "0": {
            "items": 1
          },
          "576": {
            "items": 2,
            "margin": 30
          },
          "992": {
            "items": 3,
            "margin": 30
          }
        }
      }'
          >
            <div className="item">
              <div
                className="team-card wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="00ms"
                style={{ "--accent-color": "#26A6A1" }}
              >
                <div className="team-card__svg-top">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 207 157"
                    fill="currentColor"
                  >
                    <path d="M0.255249 1.69657C0.907365 0.855618 12.3312 0.403216 29.5368 0.426383C46.7158 0.513133 69.6055 1.28915 92.43 3.86789C115.129 6.52265 136.887 11.9096 152.332 18.8871C156.063 20.7291 160.018 22.2178 163.085 24.0834C166.027 26.0249 168.807 27.8183 171.326 29.4759C172.586 30.3047 173.783 31.1053 174.907 31.8548C175.906 32.6803 176.753 33.513 177.573 34.2768C179.212 35.8045 180.617 37.1329 181.716 38.2108C182.815 39.2886 184.157 40.5888 185.634 42.1007C187.067 43.6303 188.151 45.5893 189.621 47.6079C191.002 49.662 192.509 51.9048 194.115 54.2677C195.766 56.6128 196.54 59.4901 197.896 62.2698C199.074 65.1203 200.421 68.0095 201.537 71.0967C202.284 74.3024 203.059 77.5769 203.852 80.8974C205.752 87.4145 205.994 94.5861 206.495 101.496C207.754 129.351 201.165 155.955 198.932 156.465C195.811 157.22 197.496 131.837 192.769 105.828C191.373 99.4039 190.414 92.6477 187.897 86.6661C186.845 83.6072 185.802 80.5712 184.786 77.6041C183.331 74.8368 181.903 72.1384 180.52 69.5546C179.048 67.0063 178.105 64.3551 176.347 62.2643C174.679 60.1381 173.145 58.0913 171.694 56.2509C170.197 54.4283 169.113 52.6017 167.699 51.2504C166.276 49.8762 164.988 48.7137 163.971 47.7099C162.953 46.7061 161.692 45.48 160.232 44.014C159.485 43.3013 158.755 42.5021 157.872 41.71C156.864 40.994 155.794 40.2498 154.696 39.4367C152.464 37.8513 150.061 36.0947 147.461 34.2305C144.815 32.3841 141.282 30.9144 138.018 29.0738C124.431 22.0789 105.04 16.1286 84.1235 12.4784C63.162 8.84582 41.6318 6.79042 25.7309 5.21776C9.8033 3.70869 -0.387809 2.56047 0.255249 1.69657Z"></path>
                  </svg>
                </div>
                <div className="team-card__svg-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 217 98"
                    fill="currentColor"
                  >
                    <path d="M203.517 22.6552C120.489 128.266 3.54803 91.1587 2.29153 90.7596C0.667608 90.2287 -0.200435 88.4866 0.330195 86.8628C0.860825 85.2391 2.60286 84.3715 4.22678 84.9025C5.48328 85.3016 130.102 124.677 210.694 2.04102C211.597 0.592506 213.532 0.229286 214.961 1.15706C216.391 2.08483 216.774 3.99488 215.846 5.42433C211.856 11.5493 207.731 17.2946 203.517 22.6552Z"></path>
                  </svg>
                </div>
                <div
                  className="team-card__image kidearn-tilt"
                  data-tilt-options='{
              "glare": false,
              "maxGlare": 0,
              "maxTilt": 5,
              "speed": 700,
              "scale": 1
            }'
                >
                  <ExportedImage
                    unoptimized={true}
                    width={359}
                    height={386}
                    src="images/team-1-1.jpg"
                    alt="Jane cooper"
                  />
                </div>
                <div className="team-card__content">
                  <h3 className="team-card__title">
                    <a href="team-details.html">Jane cooper</a>
                  </h3>
                  <p className="team-card__designation">Art Teacher</p>
                  <div className="list-unstyled team-card__social__list">
                    <a className="fb" href="https://facebook.com/">
                      <i className="fab fa-facebook-square"></i>
                    </a>
                    <a className="tw" href="https://twitter.com/">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="ig" href="https://instagram.com/">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="team-card__svg-bottom">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 133 89"
                    fill="currentColor"
                  >
                    <path d="M0.505828 88.3414C-0.657907 87.8946 -1.18157 86.4976 -0.734784 85.3339C-0.287999 84.1702 1.10898 83.6465 2.27271 84.0933C3.53844 84.5664 90.7584 116.387 132.019 0.784668C132.5 -0.479067 133.897 -1.00899 135.06 -0.562209C136.224 -0.115423 136.748 1.28155 136.301 2.44528C94.3057 118.038 4.23607 87.2782 0.505828 88.3414Z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

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





      <section className="blog-three">
        <div
          className="blog-three__shape-right kidearn-splax"
          data-para-options={{
            orientation: "right",
            scale: 3.5,
            overflow: true,
          }}
        >
          <ExportedImage
            unoptimized={true}
            width={125}
            height={114}
            src="images/blog-3-shape-1.png"
            alt="kidearn"
          />
        </div>
        <div
          className="blog-three__shape-left kidearn-splax"
          data-para-options={{
            orientation: "left",
            scale: 3.5,
            overflow: true,
          }}
        >
          <ExportedImage
            unoptimized={true}
            width={100}
            height={144}
            src="images/blog-3-shape-2.png"
            alt="kidearn"
          />
        </div>
        <div className="container">
          <div className="sec-title text-center">
            <h6 className="sec-title__tagline">Latest Blog</h6>
            {/* /.sec-title__tagline */}
            <h3 className="sec-title__title">
              Checkout our latest news
              <br /> updates &amp; articles
            </h3>
            {/* /.sec-title__title */}
          </div>
          {/* /.sec-title */}
          <div
            className="blog-three__carousel kidearn-owl__carousel kidearn-owl__carousel--basic-nav owl-carousel owl-theme"
            data-owl-options={{
              items: 1,
              margin: 0,
              loop: false,
              smartspeed: 700,
              nav: true,
              navtext: [
                '<span class="fa fa-angle-left"></span>',
                '<span class="fa fa-angle-right"></span>',
              ],
              dots: true,
              autoplay: false,
              responsive: {
                0: { items: 1 },
                576: { items: 2, margin: 30 },
                992: { items: 3, margin: 30 },
              },
            }}
          >
            <div className="item">
              <div
                className="blog-card-three wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="00ms"
                style={{ "--accent-color": "#F25334" }}
              >
                <div className="blog-card-three__bg"></div>
                <div className="blog-card-three__image">
                  <ExportedImage
                    unoptimized={true}
                    width={291}
                    height={189}
                    src="images/blog-3-1.jpg"
                    alt="10 easy steps to more learn about play"
                  />
                  <div className="blog-card-three__image__layer-wrapper">
                    <div
                      className="blog-card-three__image__layer"
                      style={{ backgroundImage: "url(images/blog-3-1.jpg)" }}
                    ></div>
                    <div
                      className="blog-card-three__image__layer"
                      style={{ backgroundImage: "url(images/blog-3-1.jpg)" }}
                    ></div>
                    <div
                      className="blog-card-three__image__layer"
                      style={{ backgroundImage: "url(images/blog-3-1.jpg)" }}
                    ></div>
                    <div
                      className="blog-card-three__image__layer"
                      style={{ backgroundImage: "url(images/blog-3-1.jpg)" }}
                    ></div>
                  </div>
                  <a
                    href="blog-details-left.html"
                    className="blog-card-three__image__link"
                  >
                    <span className="sr-only">
                      10 easy steps to more learn about play
                    </span>
                  </a>
                </div>
                {/* /.blog-card-three__image */}
                <div className="blog-card-three__content">
                  <div className="blog-card-three__content__top">
                    <a
                      href="blog-list.html"
                      className="blog-card-three__category"
                    >
                      Kindergarten
                    </a>
                    <div className="blog-card-three__date">30 Mar, 2023</div>
                    {/* /.blog-card-three__date */}
                  </div>
                  {/* /.blog-card-three__content__top */}
                  <h3 className="blog-card-three__title">
                    <a href="blog-details-left.html">
                      10 easy steps to more learn about play
                    </a>
                  </h3>
                  {/* /.blog-card-three__title */}
                  <div className="blog-card-three__content__bottom">
                    <div className="blog-card-three__author">
                      <div className="blog-card-three__author__image">
                        <ExportedImage
                          unoptimized={true}
                          width={44}
                          height={45}
                          src="images/blog-3-author-1.png"
                          alt="Wade Warren"
                        />
                      </div>
                      {/* /.blog-card-three__author__image */}
                      <div className="blog-card-three__author__content">
                        <h4 className="blog-card-three__author__name">
                          Wade Warren
                        </h4>
                        {/* /.blog-card-three__author__name */}
                        <p className="blog-card-three__author__designation">
                          CEO
                        </p>
                        {/* /.blog-card-three__author__designation */}
                      </div>
                      {/* /.blog-card-three__author__content */}
                    </div>
                    {/* /.blog-card-three__author */}
                  </div>
                  {/* /.blog-card-three__content__bottom */}
                </div>
                {/* /.blog-card-three__content */}
              </div>
              {/* /.blog-card-three */}
            </div>
            {/* /.item */}

            <div className="item">
              <div
                className="blog-card-three wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="100ms"
                style={{ "--accent-color": "#2390FF" }}
              >
                <div className="blog-card-three__bg"></div>
                <div className="blog-card-three__image">
                  <ExportedImage
                    unoptimized={true}
                    width={291}
                    height={189}
                    src="images/blog-3-2.jpg"
                    alt="The complete kindearn design guideline 2023"
                  />
                  <div className="blog-card-three__image__layer-wrapper">
                    <div
                      className="blog-card-three__image__layer"
                      style={{ backgroundImage: "url(images/blog-3-2.jpg)" }}
                    ></div>
                    <div
                      className="blog-card-three__image__layer"
                      style={{ backgroundImage: "url(images/blog-3-2.jpg)" }}
                    ></div>
                    <div
                      className="blog-card-three__image__layer"
                      style={{ backgroundImage: "url(images/blog-3-2.jpg)" }}
                    ></div>
                    <div
                      className="blog-card-three__image__layer"
                      style={{ backgroundImage: "url(images/blog-3-2.jpg)" }}
                    ></div>
                  </div>
                  <a
                    href="blog-details-left.html"
                    className="blog-card-three__image__link"
                  >
                    <span className="sr-only">
                      The complete kindearn design guideline 2023
                    </span>
                  </a>
                </div>
                {/* /.blog-card-three__image */}
                <div className="blog-card-three__content">
                  <div className="blog-card-three__content__top">
                    <a
                      href="blog-list.html"
                      className="blog-card-three__category"
                    >
                      Painting
                    </a>
                    <div className="blog-card-three__date">26 Mar, 2023</div>
                    {/* /.blog-card-three__date */}
                  </div>
                  {/* /.blog-card-three__content__top */}
                  <h3 className="blog-card-three__title">
                    <a href="blog-details-left.html">
                      The complete kindearn design guideline 2023
                    </a>
                  </h3>
                  {/* /.blog-card-three__title */}
                  <div className="blog-card-three__content__bottom">
                    <div className="blog-card-three__author">
                      <div className="blog-card-three__author__image">
                        <ExportedImage
                          unoptimized={true}
                          width={44}
                          height={45}
                          src="images/blog-3-author-2.png"
                          alt="Darlene Robertson"
                        />
                      </div>
                      {/* /.blog-card-three__author__image */}
                      <div className="blog-card-three__author__content">
                        <h4 className="blog-card-three__author__name">
                          Darlene Robertson
                        </h4>
                        {/* /.blog-card-three__author__name */}
                        <p className="blog-card-three__author__designation">
                          Art Teacher
                        </p>
                        {/* /.blog-card-three__author__designation */}
                      </div>
                      {/* /.blog-card-three__author__content */}
                    </div>
                    {/* /.blog-card-three__author */}
                  </div>
                  {/* /.blog-card-three__content__bottom */}
                </div>
                {/* /.blog-card-three__content */}
              </div>
              {/* /.blog-card-three */}
            </div>
            {/* /.item */}
            <div className="item">
              <div
                className="blog-card-three wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="200ms"
                style={{ "--accent-color": "#75C137" }}
              >
                <div className="blog-card-three__bg"></div>
                <div className="blog-card-three__image">
                  <ExportedImage
                    unoptimized={true}
                    width={291}
                    height={189}
                    src="images/blog-3-3.jpg"
                    alt="Choose the best child care center for you!"
                  />
                  <div className="blog-card-three__image__layer-wrapper">
                    <div
                      className="blog-card-three__image__layer"
                      style={{ backgroundImage: "url(images/blog-3-3.jpg)" }}
                    ></div>
                    <div
                      className="blog-card-three__image__layer"
                      style={{ backgroundImage: "url(images/blog-3-3.jpg)" }}
                    ></div>
                    <div
                      className="blog-card-three__image__layer"
                      style={{ backgroundImage: "url(images/blog-3-3.jpg)" }}
                    ></div>
                    <div
                      className="blog-card-three__image__layer"
                      style={{ backgroundImage: "url(images/blog-3-3.jpg)" }}
                    ></div>
                  </div>
                  <a
                    href="blog-details-left.html"
                    className="blog-card-three__image__link"
                  >
                    <span className="sr-only">
                      Choose the best child care center for you!
                    </span>
                  </a>
                </div>
                {/* /.blog-card-three__image */}
                <div className="blog-card-three__content">
                  <div className="blog-card-three__content__top">
                    <a
                      href="blog-list.html"
                      className="blog-card-three__category"
                    >
                      Education
                    </a>
                    <div className="blog-card-three__date">23 Mar, 2023</div>
                    {/* /.blog-card-three__date */}
                  </div>
                  {/* /.blog-card-three__content__top */}
                  <h3 className="blog-card-three__title">
                    <a href="blog-details-left.html">
                      Choose the best child care center for you!
                    </a>
                  </h3>
                  {/* /.blog-card-three__title */}
                  <div className="blog-card-three__content__bottom">
                    <div className="blog-card-three__author">
                      <div className="blog-card-three__author__image">
                        <ExportedImage
                          unoptimized={true}
                          width={44}
                          height={45}
                          src="images/blog-3-author-3.png"
                          alt="Leslie Alexander"
                        />
                      </div>
                      {/* /.blog-card-three__author__image */}
                      <div className="blog-card-three__author__content">
                        <h4 className="blog-card-three__author__name">
                          Leslie Alexander
                        </h4>
                        {/* /.blog-card-three__author__name */}
                        <p className="blog-card-three__author__designation">
                          Educator
                        </p>
                        {/* /.blog-card-three__author__designation */}
                      </div>
                      {/* /.blog-card-three__author__content */}
                    </div>
                    {/* /.blog-card-three__author */}
                  </div>
                  {/* /.blog-card-three__content__bottom */}
                </div>
                {/* /.blog-card-three__content */}
              </div>
              {/* /.blog-card-three */}
            </div>
            {/* /.item */}
          </div>
          {/* /.blog-three__carousel */}
        </div>
        {/* /.container */}
      </section>


      <Footer />

      <Footer1 />
    </>
  );
}
