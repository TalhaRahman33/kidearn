// src/components/PricingSection.js
"use client";
import React from "react";
import { useRouter } from 'next/navigation';

const PricingSection = () => {
  const router = useRouter();

  const handleRegisterClick = (packageData) => {
    // Construct the query string manually if needed
    const queryString = new URLSearchParams(packageData).toString();

    router.push(`/register?${queryString}`);
  };

  return (
    <section className="pricing-one">
      <div className="container">
        <div className="sec-title text-center">
          <h6 className="sec-title__tagline">Our Pricings</h6>
          <h3 className="sec-title__title">
            Select a plan according to <br /> your requirements
          </h3>
        </div>
        <div className="tabs-box">
          <div className="text-center">
            <ul className="list-unstyled tab-buttons pricing-one__tab__list">
              <li data-tab="#monthly" className="tab-btn active-btn">
                <span>Monthly</span>
              </li>
              <li data-tab="#yearly" className="tab-btn">
                <span>Yearly</span>
              </li>
            </ul>
          </div>
          <div className="tabs-content">
            <div className="tab active-tab fadeInUp animated" id="monthly">
              <div className="row gutter-y-30">
                <div className="col-md-12 col-lg-4">
                  <div className="pricing-one__card" style={{ '--accent-color': '#F25334' }}>
                    <h4 className="pricing-one__card__tagline">Open Play</h4>
                    <h4 className="pricing-one__card__month">8 - 1 Year</h4>
                    <div className="pricing-one__card__icon">
                      <i className="icon-crawling-baby-silhouette"></i>
                    </div>
                    <ul className="list-unstyled pricing-one__card__list">
                      <li><i className="fa fa-check-circle"></i> Open Play</li>
                      <li><i className="fa fa-check-circle"></i> Parent Supervision</li>
                      <li><i className="fa fa-check-circle"></i> Unlimited Playtime</li>
                      <li><i className="fa fa-check-circle"></i> Adult Entry is Free</li>
                    </ul>
                    <h3 className="pricing-one__card__price">
                      $20
                      <button
                        className="custom-btn"
                        onClick={() => handleRegisterClick({
                          packageName: "Open Play",
                          packageType: "8 - 1 Year",
                          price: "$20"
                        })}
                      >
                        <span>اشترك</span>
                      </button>
                    </h3>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4">
                  <div className="pricing-one__card" style={{ '--accent-color': '#2390FF' }}>
                    <h4 className="pricing-one__card__tagline">Toddler Program</h4>
                    <h4 className="pricing-one__card__month">9 - 3 Years</h4>
                    <div className="pricing-one__card__icon">
                      <i className="icon-fun"></i>
                    </div>
                    <ul className="list-unstyled pricing-one__card__list">
                      <li><i className="fa fa-check-circle"></i> Open Play</li>
                      <li><i className="fa fa-check-circle"></i> Parent Supervision</li>
                      <li><i className="fa fa-check-circle"></i> Unlimited Playtime</li>
                      <li><i className="fa fa-check-circle"></i> Adult Entry is Free</li>
                    </ul>
                    <h3 className="pricing-one__card__price">
                      $20
                      <button
                        className="custom-btn"
                        onClick={() => handleRegisterClick({
                          packageName: "Toddler Program",
                          packageType: "9 - 3 Years",
                          price: "$20"
                        })}
                      >
                        <span>اشترك</span>
                      </button>
                    </h3>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4">
                  <div className="pricing-one__card" style={{ '--accent-color': '#75C137' }}>
                    <h4 className="pricing-one__card__tagline">Kindergarten Program</h4>
                    <h4 className="pricing-one__card__month">3 - 7 Years</h4>
                    <div className="pricing-one__card__icon">
                      <i className="icon-playtime"></i>
                    </div>
                    <ul className="list-unstyled pricing-one__card__list">
                      <li><i className="fa fa-check-circle"></i> Open Play</li>
                      <li><i className="fa fa-check-circle"></i> Parent Supervision</li>
                      <li><i className="fa fa-check-circle"></i> Unlimited Playtime</li>
                      <li><i className="fa fa-check-circle"></i> Adult Entry is Free</li>
                    </ul>
                    <h3 className="pricing-one__card__price">
                      $20
                      <button
                        className="custom-btn"
                        onClick={() => handleRegisterClick({
                          packageName: "Kindergarten Program",
                          packageType: "3 - 7 Years",
                          price: "$20"
                        })}
                      >
                        <span>اشترك</span>
                      </button>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab fadeInUp animated" id="yearly">
              <div className="row gutter-y-30">
                <div className="col-md-12 col-lg-4">
                  <div className="pricing-one__card" style={{ '--accent-color': '#F25334' }}>
                    <h4 className="pricing-one__card__tagline">Open Play</h4>
                    <h4 className="pricing-one__card__month">8 - 1 Year</h4>
                    <div className="pricing-one__card__icon">
                      <i className="icon-crawling-baby-silhouette"></i>
                    </div>
                    <ul className="list-unstyled pricing-one__card__list">
                      <li><i className="fa fa-check-circle"></i> Open Play</li>
                      <li><i className="fa fa-check-circle"></i> Parent Supervision</li>
                      <li><i className="fa fa-check-circle"></i> Unlimited Playtime</li>
                      <li><i className="fa fa-check-circle"></i> Adult Entry is Free</li>
                    </ul>
                    <h3 className="pricing-one__card__price">
                      $20
                      <button
                        className="custom-btn"
                        onClick={() => handleRegisterClick({
                          packageName: "Open Play",
                          packageType: "8 - 1 Year",
                          price: "$20"
                        })}
                      >
                        <span>اشترك</span>
                      </button>
                    </h3>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4">
                  <div className="pricing-one__card" style={{ '--accent-color': '#2390FF' }}>
                    <h4 className="pricing-one__card__tagline">Toddler Program</h4>
                    <h4 className="pricing-one__card__month">9 - 3 Years</h4>
                    <div className="pricing-one__card__icon">
                      <i className="icon-fun"></i>
                    </div>
                    <ul className="list-unstyled pricing-one__card__list">
                      <li><i className="fa fa-check-circle"></i> Open Play</li>
                      <li><i className="fa fa-check-circle"></i> Parent Supervision</li>
                      <li><i className="fa fa-check-circle"></i> Unlimited Playtime</li>
                      <li><i className="fa fa-check-circle"></i> Adult Entry is Free</li>
                    </ul>
                    <h3 className="pricing-one__card__price">
                      $20
                      <button
                        className="custom-btn"
                        onClick={() => handleRegisterClick({
                          packageName: "Toddler Program",
                          packageType: "9 - 3 Years",
                          price: "$20"
                        })}
                      >
                        <span>اشترك</span>
                      </button>
                    </h3>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4">
                  <div className="pricing-one__card" style={{ '--accent-color': '#75C137' }}>
                    <h4 className="pricing-one__card__tagline">Kindergarten Program</h4>
                    <h4 className="pricing-one__card__month">3 - 7 Years</h4>
                    <div className="pricing-one__card__icon">
                      <i className="icon-playtime"></i>
                    </div>
                    <ul className="list-unstyled pricing-one__card__list">
                      <li><i className="fa fa-check-circle"></i> Open Play</li>
                      <li><i className="fa fa-check-circle"></i> Parent Supervision</li>
                      <li><i className="fa fa-check-circle"></i> Unlimited Playtime</li>
                      <li><i className="fa fa-check-circle"></i> Adult Entry is Free</li>
                    </ul>
                    <h3 className="pricing-one__card__price">
                      $20
                      <button
                        className="custom-btn"
                        onClick={() => handleRegisterClick({
                          packageName: "Kindergarten Program",
                          packageType: "3 - 7 Years",
                          price: "$20"
                        })}
                      >
                        <span>اشترك</span>
                      </button>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
