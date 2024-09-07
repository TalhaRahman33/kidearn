"use client";

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import ExportedImage from 'next-image-export-optimizer';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// Dynamically import the OwlCarousel component
const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });

const Testimonials = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensure that the component only runs on the client side
    if (typeof window !== 'undefined') {
      setIsClient(true);
    }
  }, []);

  const options = {
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    items: 1,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 1000,
    navText: [
      '<span className="icon-left-arrow">Prev</span>',
      '<span className="icon-right-arrow">Next</span>',
    ],
  };

  return (
    <section className="testimonial-one">
      <div
        className="testimonial-one__pen kidearn-splax"
        data-para-options='{"orientation": "left", "scale": 2.5, "overflow": true}'
      >
        <ExportedImage
          src="/images/pen-rtl.png"
          alt="kidearn"
          unoptimized={true}
          layout="responsive"
          width={320}
          height={265}
        />
      </div>
      <div className="container">
        <div className="testimonial-one__area">
          <div className="testimonial-one__bg"></div>
          <div
            className="testimonial-one__bg-shape kidearn-splax"
            style={{ backgroundImage: 'url(/images/testimonial-shape-1.png)' }}
            data-para-options='{"orientation": "down", "scale": 1.5, "delay": ".3", "transition": "cubic-bezier(0,0,0,1)", "overflow": true}'
          ></div>
          <div className="testimonial-one__star-left">
            <ExportedImage
              src="/images/star1.png"
              alt="kidearn"
              unoptimized={true}
              layout="responsive"
              width={39}
              height={38}
            />
          </div>
          <div className="testimonial-one__star-right">
            <ExportedImage
              src="/images/star2.png"
              alt="kidearn"
              unoptimized={true}
              layout="responsive"
              width={39}
              height={38}
            />
          </div>
          <div className="sec-title text-center">
            <h6 className="sec-title__tagline">Testimonial</h6>
            <h3 className="sec-title__title">
              Parents' words are the key
              <br /> to happy kids
            </h3>
          </div>
          {isClient && (
            <OwlCarousel
              className="testimonial-one__carousel owl-carousel"
              {...options}
            >
              <div className="item">
                <div className="testimonial-one__item">
                  <div className="testimonial-one__item__quote">
                    Flexible Classes refers to the process of acquiring knowledge
                    or skills through the use of digital technologies and the
                    internet.
                  </div>
                  <div className="testimonial-one__item__author">
                    <ExportedImage
                      src="/images/testi-author-1.png"
                      alt="kidearn"
                      unoptimized={true}
                      layout="responsive"
                      width={46}
                      height={46}
                    />
                    <h5 className="testimonial-one__item__author__name">
                      Savannah Nguyen
                    </h5>
                    <p className="testimonial-one__item__author__designation">
                      Martin’s Father
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-one__item">
                  <div className="testimonial-one__item__quote">
                    Flexible Classes refers to the process of acquiring knowledge
                    or skills through the use of digital technologies and the
                    internet.
                  </div>
                  <div className="testimonial-one__item__author">
                    <ExportedImage
                      src="/images/testi-author-2.png"
                      alt="kidearn"
                      unoptimized={true}
                      layout="responsive"
                      width={46}
                      height={46}
                    />
                    <h5 className="testimonial-one__item__author__name">
                      Sarah Taylor
                    </h5>
                    <p className="testimonial-one__item__author__designation">
                      Martin’s Mother
                    </p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
