"use client";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const PricingSection = () => {
  return (
    <section className="pricing-one">
      <div className="container">
        <div className="sec-title text-center">
          <h6 className="sec-title__tagline">الباقات</h6>
          <h3 className="sec-title__title">اختر خطة تناسب احتياجاتك</h3>
        </div>
        <div className="tabs-box">
          <div className="tabs-content">
            <div className="tab active-tab fadeInUp animated" id="monthly">
              <Swiper
                spaceBetween={30}
                slidesPerView={3}
                autoplay={{
                  delay: 3000, // Auto scroll every 3 seconds
                  disableOnInteraction: false, // Continue autoplay after user interaction
                }}
                modules={[Autoplay]}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
              >
                {/* Existing Cards */}
                <SwiperSlide>
                  <div
                    className="pricing-one__card"
                    style={{ "--accent-color": "#F25334" }}
                  >
                    <h4 className="pricing-one__card__tagline">Open Play</h4>
                    <h4 className="pricing-one__card__month">8 - 1 Year</h4>
                    <div className="pricing-one__card__icon">
                      <i className="icon-crawling-baby-silhouette"></i>
                    </div>
                    <ul className="list-unstyled pricing-one__card__list">
                      <li>
                        <i className="fa fa-check-circle"></i> Open Play
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i> Parent
                        Supervision
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i> Unlimited
                        Playtime
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i> Adult Entry is
                        Free
                      </li>
                    </ul>
                    <h3 className="pricing">$400</h3>
                    <h3 className="pricing-one__card__price">
                      <Link
                        href={{
                          pathname: "/register",
                          query: {
                            packageName: "Open Play",
                            price: " $400",
                            amount: 400,
                          },
                        }}
                      >
                        <button className="custom-btn">
                          <span>اشترك</span>
                        </button>
                      </Link>
                    </h3>
                  </div>
                </SwiperSlide>

                {/* Additional Cards */}
                <SwiperSlide>
                  <div
                    className="pricing-one__card"
                    style={{ "--accent-color": "#2390FF" }}
                  >
                    <h4 className="pricing-one__card__tagline">
                      Toddler Program
                    </h4>
                    <h4 className="pricing-one__card__month">9 - 3 Years</h4>
                    <div className="pricing-one__card__icon">
                      <i className="icon-fun"></i>
                    </div>
                    <ul className="list-unstyled pricing-one__card__list">
                      <li>
                        <i className="fa fa-check-circle"></i> Open Play
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i> Parent
                        Supervision
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i> Unlimited
                        Playtime
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i> Adult Entry is
                        Free
                      </li>
                    </ul>
                    <h3 className="pricing">$300</h3>
                    <h3 className="pricing-one__card__price">
                      <Link
                        href={{
                          pathname: "/register",
                          query: {
                            packageName: "Toddler Program",
                            price: " $300",
                            amount: 300,
                          },
                        }}
                      >
                        <button className="custom-btn">
                          <span>اشترك</span>
                        </button>
                      </Link>
                    </h3>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div
                    className="pricing-one__card"
                    style={{ "--accent-color": "#75C137" }}
                  >
                    <h4 className="pricing-one__card__tagline">
                      Kindergarten Program
                    </h4>
                    <h4 className="pricing-one__card__month">3 - 7 Years</h4>
                    <div className="pricing-one__card__icon">
                      <i className="icon-playtime"></i>
                    </div>
                    <ul className="list-unstyled pricing-one__card__list">
                      <li>
                        <i className="fa fa-check-circle"></i> Open Play
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i> Parent
                        Supervision
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i> Unlimited
                        Playtime
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i> Adult Entry is
                        Free
                      </li>
                    </ul>
                    <h3 className="pricing">$500</h3>
                    <h3 className="pricing-one__card__price">
                      <Link
                        href={{
                          pathname: "/register",
                          query: {
                            packageName: "Kindergarten Program",
                            price: " $500",
                            amount: 500,
                          },
                        }}
                      >
                        <button className="custom-btn">
                          <span>اشترك</span>
                        </button>
                      </Link>
                    </h3>
                  </div>
                </SwiperSlide>


                <SwiperSlide>
                  <div
                    className="pricing-one__card"
                    style={{ "--accent-color": "#F25334" }}
                  >
                    <h4 className="pricing-one__card__tagline">Open Play</h4>
                    <h4 className="pricing-one__card__month">8 - 1 Year</h4>
                    <div className="pricing-one__card__icon">
                      <i className="icon-crawling-baby-silhouette"></i>
                    </div>
                    <ul className="list-unstyled pricing-one__card__list">
                      <li>
                        <i className="fa fa-check-circle"></i> Open Play
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i> Parent
                        Supervision
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i> Unlimited
                        Playtime
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i> Adult Entry is
                        Free
                      </li>
                    </ul>
                    <h3 className="pricing">$400</h3>
                    <h3 className="pricing-one__card__price">
                      <Link
                        href={{
                          pathname: "/register",
                          query: {
                            packageName: "Open Play",
                            price: " $400",
                            amount: 400,
                          },
                        }}
                      >
                        <button className="custom-btn">
                          <span>اشترك</span>
                        </button>
                      </Link>
                    </h3>
                  </div>
                </SwiperSlide>

                {/* Additional Cards */}
                <SwiperSlide>
                  <div
                    className="pricing-one__card"
                    style={{ "--accent-color": "#2390FF" }}
                  >
                    <h4 className="pricing-one__card__tagline">
                      Toddler Program
                    </h4>
                    <h4 className="pricing-one__card__month">9 - 3 Years</h4>
                    <div className="pricing-one__card__icon">
                      <i className="icon-fun"></i>
                    </div>
                    <ul className="list-unstyled pricing-one__card__list">
                      <li>
                        <i className="fa fa-check-circle"></i> Open Play
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i> Parent
                        Supervision
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i> Unlimited
                        Playtime
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i> Adult Entry is
                        Free
                      </li>
                    </ul>
                    <h3 className="pricing">$300</h3>
                    <h3 className="pricing-one__card__price">
                      <Link
                        href={{
                          pathname: "/register",
                          query: {
                            packageName: "Toddler Program",
                            price: " $300",
                            amount: 300,
                          },
                        }}
                      >
                        <button className="custom-btn">
                          <span>اشترك</span>
                        </button>
                      </Link>
                    </h3>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div
                    className="pricing-one__card"
                    style={{ "--accent-color": "#75C137" }}
                  >
                    <h4 className="pricing-one__card__tagline">
                      Kindergarten Program
                    </h4>
                    <h4 className="pricing-one__card__month">3 - 7 Years</h4>
                    <div className="pricing-one__card__icon">
                      <i className="icon-playtime"></i>
                    </div>
                    <ul className="list-unstyled pricing-one__card__list">
                      <li>
                        <i className="fa fa-check-circle"></i> Open Play
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i> Parent
                        Supervision
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i> Unlimited
                        Playtime
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i> Adult Entry is
                        Free
                      </li>
                    </ul>
                    <h3 className="pricing">$500</h3>
                    <h3 className="pricing-one__card__price">
                      <Link
                        href={{
                          pathname: "/register",
                          query: {
                            packageName: "Kindergarten Program",
                            price: " $500",
                            amount: 500,
                          },
                        }}
                      >
                        <button className="custom-btn">
                          <span>اشترك</span>
                        </button>
                      </Link>
                    </h3>
                  </div>
                </SwiperSlide>

          

              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
