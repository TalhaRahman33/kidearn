"use client";

import React from 'react';
import Slider from 'react-slick';
import ExportedImage from 'next-image-export-optimizer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Define a loader for images if needed
const myLoader = ({ src }) => {
  return `/images/${src}`;
};

const TestimonialSection = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <section className="testimonial-one testimonial-one--home-two testimonial-one--about-page">
      <div className="testimonial-one__left-shape kidearn-splax">
        <ExportedImage
          loader={myLoader}
          src="/images/testimonial-shape-2.png"
          alt="kidearn"
          width={400}
          height={400}
          unoptimized={true}
        />
      </div>
      <div className="testimonial-one__right-shape kidearn-splax">
        <ExportedImage
          loader={myLoader}
          src="/images/testimonial-shape-3.png"
          alt="kidearn"
          width={400}
          height={400}
          unoptimized={true}
        />
      </div>
      <div className="container">
        <div className="testimonial-one__area">
          <div className="testimonial-one__bg"></div>
          <div
            className="testimonial-one__bg-shape kidearn-splax"
            style={{ backgroundImage: 'url(/images/testimonial-shape-4.png)' }}
          ></div>
          <div className="sec-title text-center">
            <h6 className="sec-title__tagline">Testimonial</h6>
            <h3 className="sec-title__title">
              Parents' words are the
              <br /> key to happy kids
            </h3>
          </div>
          <Slider {...settings}>
            <div>
              <div className="testimonial-one__item">
                <div className="testimonial-one__item__quote">
                  Flexible Classes refers to the process of acquiring knowledge or skills through the use of digital technologies and the internet.
                </div>
                <div className="testimonial-one__item__author">
                  <ExportedImage
                    loader={myLoader}
                    src="/images/testi-author-1.png"
                    alt="kidearn"
                    width={100}
                    height={100}
                    unoptimized={true}
                  />
                  <h5 className="testimonial-one__item__author__name">Savannah Nguyen</h5>
                  <p className="testimonial-one__item__author__designation">Martin’s Father</p>
                </div>
              </div>
            </div>
            <div>
              <div className="testimonial-one__item">
                <div className="testimonial-one__item__quote">
                  Flexible Classes refers to the process of acquiring knowledge or skills through the use of digital technologies and the internet.
                </div>
                <div className="testimonial-one__item__author">
                  <ExportedImage
                    loader={myLoader}
                    src="/images/testi-author-2.png"
                    alt="kidearn"
                    width={100}
                    height={100}
                    unoptimized={true}
                  />
                  <h5 className="testimonial-one__item__author__name">Sarah Taylor</h5>
                  <p className="testimonial-one__item__author__designation">Martin’s Mother</p>
                </div>
              </div>
            </div>
            {/* Add more slides as needed */}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
