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
          <h6 className="sec-title__tagline">الـــباقـــات</h6>
          <h3 className="sec-title__title"> اخـــتر خـــطة تـــناســـب احـــتياجـــات طـــفلك  </h3>
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
                    <h4 className="pricing-one__card__tagline">ساعة واحدة</h4>
                    <h4 className="pricing-one__card__month">من ٧:٠٠ ص إلى ٥:٠٠ م</h4>

                    <div className="pricing-one__card__icon">
                      <i className="icon-crawling-baby-silhouette"></i>
                    </div>
                    <ul className="list-unstyled pricing-one__card__list">
                      <li>
                        <i className="fa fa-check-circle"></i> رعاية شاملة
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i> أنشطة وفعاليات
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i>برامج تعليمية
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i> تنمية مهارات
                      </li>
                    </ul>
                    <h3 className="pricing">٧٠ ر.س</h3>
                    <h3 className="pricing-one__card__price">
                      <Link
                        href={{
                          pathname: "/register",
                          query: {
                            packageName: "ساعة واحدة",
                            price: "٧٠ ر.س",
                            amount: 70,
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
                    <h4 className="pricing-one__card__tagline">يوم واحد</h4>
                    <h4 className="pricing-one__card__month">من ٧:٠٠ ص إلى ٥:٠٠ م</h4>

                    <div className="pricing-one__card__icon">
                      <i className="icon-fun"></i>
                    </div>
                    <ul className="list-unstyled pricing-one__card__list">
                      <li>
                        <i className="fa fa-check-circle"></i> رعاية شاملة
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i> أنشطة وفعاليات
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i>برامج تعليمية
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i> تنمية مهارات
                      </li>
                    </ul>
                    <h3 className="pricing">٢٠٠ ر.س</h3>
                    <h3 className="pricing-one__card__price">
                      <Link
                        href={{
                          pathname: "/register",
                          query: {
                            packageName: "يوم واحد",
                            price: " ٢٠٠ ر.س",
                            amount: 200,
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
                    <h4 className="pricing-one__card__tagline">خطة أسبوعية</h4>
                   
                    <h4 className="pricing-one__card__month">من ٧:٠٠ ص إلى ٥:٠٠ م</h4>

                    <div className="pricing-one__card__icon">
                      <i className="icon-playtime"></i>
                    </div>
                    <ul className="list-unstyled pricing-one__card__list">
                      <li>
                        <i className="fa fa-check-circle"></i> رعاية شاملة
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i> أنشطة وفعاليات
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i>برامج تعليمية
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i> تنمية مهارات
                      </li>
                    </ul>
                    <h3 className="pricing">٨٥٠ ر.س</h3>
                    <h3 className="pricing-one__card__price">
                      <Link
                        href={{
                          pathname: "/register",
                          query: {
                            packageName: "خطة أسبوعية",
                            price: "٨٥٠ ر.س",
                            amount: 850,
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
                    <h4 className="pricing-one__card__tagline">شهر واحد</h4>
                   
                    <h4 className="pricing-one__card__month">من ٧:٠٠ ص إلى ٥:٠٠ م</h4>

                    <div className="pricing-one__card__icon">
                      <i className="icon-crawling-baby-silhouette"></i>
                    </div>
                    <ul className="list-unstyled pricing-one__card__list">
                      <li>
                        <i className="fa fa-check-circle"></i> رعاية شاملة
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i> أنشطة وفعاليات
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i>برامج تعليمية
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i> تنمية مهارات
                      </li>
                    </ul>
                    <h3 className="pricing"> ٣٢٥٠ ر.س</h3>
                    <h3 className="pricing-one__card__price">
                      <Link
                        href={{
                          pathname: "/register",
                          query: {
                            packageName: "شهر واحد",
                            price: " ٣٢٥٠ ر.س",
                            amount: 3250,
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
                    <h4 className="pricing-one__card__tagline">أربعة أشهر</h4>
                  
                    <h4 className="pricing-one__card__month">من ٧:٠٠ ص إلى ٥:٠٠ م</h4>

                    <div className="pricing-one__card__icon">
                      <i className="icon-fun"></i>
                    </div>
                    <ul className="list-unstyled pricing-one__card__list">
                      <li>
                        <i className="fa fa-check-circle"></i> رعاية شاملة
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i> أنشطة وفعاليات
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i>برامج تعليمية
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i> تنمية مهارات
                      </li>
                    </ul>
                    <h3 className="pricing">١٢٤٢٧ ر.س</h3>
                    <h3 className="pricing-one__card__price">
                      <Link
                        href={{
                          pathname: "/register",
                          query: {
                            packageName: "أربعة أشهر",
                            price: "١٢٤٢٧ ر.س",
                            amount: 12427,
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
                    <h4 className="pricing-one__card__tagline">ستة أشهر</h4>
                    <h4 className="pricing-one__card__month">من ٧:٠٠ ص إلى ٥:٠٠ م</h4>

                    <div className="pricing-one__card__icon">
                      <i className="icon-playtime"></i>
                    </div>
                    <ul className="list-unstyled pricing-one__card__list">
                      <li>
                        <i className="fa fa-check-circle"></i> رعاية شاملة
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i> أنشطة وفعاليات
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i>برامج تعليمية
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i> تنمية مهارات
                      </li>
                    </ul>
                    <h3 className="pricing">١٨٤٢٧ ر.س</h3>
                    <h3 className="pricing-one__card__price">
                      <Link
                        href={{
                          pathname: "/register",
                          query: {
                            packageName: "ستة أشهر",
                            price: "١٨٤٢٧ ر.س",
                            amount: 18427,
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
                    <h4 className="pricing-one__card__tagline"> رعاية بعد المدرسة</h4>
                    <h4 className="pricing-one__card__month">من ١:٠٠ م إلى ٥:٠٠ م</h4>
                    <div className="pricing-one__card__icon">
                      <i className="icon-crawling-baby-silhouette"></i>
                    </div>
                    <ul className="list-unstyled pricing-one__card__list">
                      <li>
                        <i className="fa fa-check-circle"></i> رعاية شاملة
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i> أنشطة وفعاليات
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i>برامج تعليمية
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i> تنمية مهارات
                      </li>
                    </ul>
                    <h3 className="pricing">١٥٠٠ ر.س</h3>
                    <h3 className="pricing-one__card__price">
                      <Link
                        href={{
                          pathname: "/register",
                          query: {
                            packageName: "رعاية بعد المدرسة",
                            price: "١٥٠٠ ر.س",
                            amount:1500,
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
                    <h4 className="pricing-one__card__tagline">دوام جزئي مسائي</h4>
                    <h4 className="pricing-one__card__month">من ٥:٠٠ م إلى ٩:٠٠</h4>
                    <div className="pricing-one__card__icon">
                      <i className="icon-fun"></i>
                    </div>
                    <ul className="list-unstyled pricing-one__card__list">
                      <li>
                        <i className="fa fa-check-circle"></i> رعاية شاملة
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i> أنشطة وفعاليات
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i>برامج تعليمية
                      </li>
                      <li>
                        <i className="fa fa-check-circle"></i> تنمية مهارات
                      </li>
                    </ul>
                    <h3 className="pricing">٥٠٠ ر.س</h3>
                    <h3 className="pricing-one__card__price">
                      <Link
                        href={{
                          pathname: "/register",
                          query: {
                            packageName: "دوام جزئي مسائي",
                            price: "٥٠٠ ر.س",
                            amount:500,
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
