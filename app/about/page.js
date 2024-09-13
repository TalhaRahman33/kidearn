import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Footer1 from '../components/Footer1';
import ExportedImage from 'next-image-export-optimizer';
import Link from 'next/link';
import TestimonialSection from '../components/TestimonialSection';
import Topbar from '../components/Topbar';


const Page = () => {
  return (
    <div className='custom-cursor'>

<div className="custom-cursor__cursor"></div>
<div className="custom-cursor__cursor-two"></div>

<div class="page-wrapper">

<Topbar />

      <Header />

      <section className="page-header">
        <div className="page-header__bg" />
        <div className="container">
          <h2 className="page-header__title">About us</h2>
          <ul className="kidearn-breadcrumb list-unstyled">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <span>About</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="about-four">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 wow fadeInLeft" data-wow-delay="300ms">
              <div className="about-four__image">
                <div className="about-four__image__shape1">
                  <ExportedImage
                    src="/images/about-4-shape-1.png"
                    alt="kidearn"
                    width={101}
                    height={110}
                    unoptimized={true}
                  />
                </div>
                <div
                  className="about-four__image__one kidearn-tilt"
                  data-tilt-options='{"glare": false, "maxglare": 0, "maxtilt": 3, "speed": 700, "scale": 1}'
                >
                  <ExportedImage
                    src="/images/about-4-1.jpg"
                    alt="kidearn"
                    width={553}
                    height={553}
                    unoptimized={true}
                  />
                  <div className="about-four__image__one-bottom"></div>
                </div>
                <div
                  className="about-four__image__two wow fadeInUp"
                  data-wow-delay="500ms"
                >
                  <ExportedImage
                    src="/images/about-4-2.jpg"
                    alt="kidearn"
                    width={264}
                    height={264}
                    unoptimized={true}
                  />
                </div>
                <div className="about-four__image__bg-shape">
                  <ExportedImage
                    src="/images/about-4-shape-2.png"
                    alt="kidearn"
                    width={673}
                    height={534}
                    unoptimized={true}
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-6 wow fadeInRight" data-wow-delay="200ms">
              <div className="about-four__content">
                <div className="sec-title text-left">
                  <h6 className="sec-title__tagline">About Us</h6>
                  <h3 className="sec-title__title">
                    Welcome to best kidearn for your child
                  </h3>
                </div>
                <p className="about-four__content__text">
                  Lorem Ipsum is simply dummy text of the printing and<br />{' '}
                  typesetting industry. Lorem Ipsum has been the industry's
                </p>
                <div
                  className="about-four__info"
                  style={{ '--accent-color': '#F25334' }}
                >
                  <div className="about-four__info__icon">
                    <span className="icon-trophy1"></span>
                  </div>
                  <h3 className="about-four__info__title">Award Wining Time</h3>
                  <p className="about-four__info__text">
                    Lorem Ipsum is simply dummy text of the printing and<br />{' '}
                    typesetting industry. Lorem Ipsum
                  </p>
                </div>
                <div
                  className="about-four__info"
                  style={{ '--accent-color': '#2390FF' }}
                >
                  <div className="about-four__info__icon">
                    <span className="icon-interest-rate"></span>
                  </div>
                  <h3 className="about-four__info__title">
                    Higest Success Rates
                  </h3>
                  <p className="about-four__info__text">
                    Lorem Ipsum is simply dummy text of the printing and<br />{' '}
                    typesetting industry. Lorem Ipsum
                  </p>
                </div>
                <Link href="/about" className="kidearn-btn">
                  <span>Learn More</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-one cta-one--about-page">
        <div className="container">
          <div className="cta-one__inner">
            <div
              className="cta-one__shape1 kidearn-splax"
              data-para-options='{"orientation": "right", "scale": 1.5, "delay": ".4", "transition": "cubic-bezier(0,0,0,1)", "overflow": true}'
            >
              <ExportedImage
                src="/images/cta-shape-1.png"
                alt="kidearn"
                width={296}
                height={360}
                unoptimized={true}
              />
            </div>
            <div
              className="cta-one__shape2 kidearn-splax"
              data-para-options='{"orientation": "down", "scale": 1.5, "delay": ".4", "transition": "cubic-bezier(0,0,0,1)", "overflow": true}'
            >
              <ExportedImage
                src="/images/cta-shape-2.png"
                alt="kidearn"
                width={82}
                height={90}
                unoptimized={true}
              />
            </div>
            <div className="row">
              <div
                className="col-lg-6 wow fadeInLeft"
                data-wow-delay="100ms"
              >
                <div className="cta-one__content">
                  <h3 className="cta-one__title">
                    How to enroll your child to a class?
                  </h3>
                  <Link href="/about" className="kidearn-btn">
                    <span>Visit Now</span>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="cta-one__one wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <ExportedImage
                    src="/images/cta-1.png"
                    alt="kidearn"
                    width={535}
                    height={492}
                    unoptimized={true}
                  />
                  <div className="cta-one__one__text">All in<br /> One</div>
                </div>
                <div className="cta-one__thumb">
                  <div className="cta-one__thumb__two">
                    <ExportedImage
                      src="/images/cta-2.png"
                      alt="kidearn"
                      width={535}
                      height={329}
                      unoptimized={true}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="funfact-one">
        <div
          className="funfact-one__shape1 kidearn-splax"
          data-para-options='{"orientation": "down", "scale": 1.9, "delay": ".3", "transition": "cubic-bezier(0,0,0,1)", "overflow": true}'
        >
          <ExportedImage
            src="/images/funfact-shape-1.png"
            alt="kidearn"
            width={154}
            height={105}
            unoptimized={true}
          />
        </div>
        <div
          className="funfact-one__shape2 kidearn-splax"
          data-para-options='{"orientation": "right", "scale": 1.9, "delay": ".4", "transition": "cubic-bezier(0,0,0,1)", "overflow": true}'
        >
          <ExportedImage
            src="/images/funfact-shape-2.png"
            alt="kidearn"
            width={79}
            height={65}
            unoptimized={true}
          />
        </div>
        <div
          className="funfact-one__shape3 kidearn-splax"
          data-para-options='{"orientation": "right", "scale": 1.9, "delay": ".3", "transition": "cubic-bezier(0,0,0,1)", "overflow": true}'
        >
          <ExportedImage
            src="/images/funfact-shape-3.png"
            alt="kidearn"
            width={80}
            height={81}
            unoptimized={true}
          />
        </div>
        <div
          className="funfact-one__shape4 kidearn-splax"
          data-para-options='{"orientation": "left", "scale": 1.9, "delay": ".4", "transition": "cubic-bezier(0,0,0,1)", "overflow": true}'
        >
          <ExportedImage
            src="/images/funfact-shape-4.png"
            alt="kidearn"
            width={82}
            height={85}
            unoptimized={true}
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0ms">
              <div className="funfact-one__item text-center">
                <div className="funfact-one__icon">
                  <span className="icon-student"></span>
                </div>
                <div className="funfact-one__count">
                  <span className="count-box">
                    <span className="count-text" data-stop="30.5" data-speed="1500">30.5</span>k
                  </span>
                </div>
                <p className="funfact-one__text">Students</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="200ms">
              <div className="funfact-one__item text-center">
                <div className="funfact-one__icon">
                  <span className="icon-diploma"></span>
                </div>
                <div className="funfact-one__count">
                  <span className="count-box">
                    <span className="count-text" data-stop="99.99" data-speed="1500">99.99</span>%
                  </span>
                </div>
                <p className="funfact-one__text">Success Rate</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="300ms">
              <div className="funfact-one__item text-center">
                <div className="funfact-one__icon">
                  <span className="icon-teacher"></span>
                </div>
                <div className="funfact-one__count">
                  <span className="count-box">
                    <span className="count-text" data-stop="50.2" data-speed="1500">50.2</span>k
                  </span>
                </div>
                <p className="funfact-one__text">Instructors</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="400ms">
              <div className="funfact-one__item text-center">
                <div className="funfact-one__icon">
                  <span className="icon-knowledge"></span>
                </div>
                <div className="funfact-one__count">
                  <span className="count-box">
                    <span className="count-text" data-stop="4.8" data-speed="1500">4.8</span>k
                  </span>
                </div>
                <p className="funfact-one__text">Total Courses</p>
              </div>
            </div>
          </div>
        </div>
      </section>


    <TestimonialSection />
 

      <Footer />
      <Footer1 />

</div>
    </div>
  );
};

export default Page;
