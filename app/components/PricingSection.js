
"use client";
import React from "react";
import Link from 'next/link';
 
const PricingSection = () => {
 
  // const handlePackageData = (packageData) => {
  //   // Construct query parameters using URLSearchParams
  //   return new URLSearchParams(packageData).toString();
  // };
 
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
          {/* <div className="text-center">
            <ul className="list-unstyled tab-buttons pricing-one__tab__list">
              <li data-tab="#monthly" className="tab-btn active-btn">
                <span>Monthly</span>
              </li>
              <li data-tab="#yearly" className="tab-btn">
                <span>Yearly</span>
              </li>
            </ul>
          </div> */}
          <div className="tabs-content">
            <div className="tab active-tab fadeInUp animated" id="monthly">
              <div className="row gutter-y-30">
                {/* Monthly Plans */}
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
                    <h3 className="pricing">
                    $400
 
                 
                    </h3>
                    <h3 className="pricing-one__card__price">
                      <Link href={{
                        pathname: '/register',
                        query: {
                          packageName: "Open Play",
                          price: " $400",
                          amount: 400,
                        }
                      }}>
                        <button className="custom-btn">
                          <span>اشترك</span>
                        </button>
                      </Link>
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
                    <h3 className="pricing">
                    $300
 
                 
                    </h3>
                    <h3 className="pricing-one__card__price">
                   
                      <Link href={{
                        pathname: '/register',
                        query: {
                          packageName: "Toddler Program",
                          price: " $300",
                          amount: 300,
                        }
                      }}>
                        <button className="custom-btn">
                          <span>اشترك</span>
                        </button>
                      </Link>
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
                    <h3 className="pricing">
                    $500
 
                 
                    </h3>
                    <h3 className="pricing-one__card__price">
                     
                      <Link href={{
                        pathname: '/register',
                        query: {
                          packageName: "Kindergarten Program",
                          price: " $500",
                          amount: 500,
                        }
                      }}>
                        <button className="custom-btn">
                          <span>اشترك</span>
                        </button>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
 
            {/* Yearly Plans */}
            {/* <div className="tab fadeInUp animated" id="yearly">
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
                      $400
                      <Link href={{
                        pathname: '/register',
                        query: {
                          packageName: "Open Play",
                          price: "8 - 1 Year",
                          amount: 400
                        }
                      }}>
                        <button className="custom-btn">
                          <span>اشترك</span>
                        </button>
                      </Link>
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
                      $300
                      <Link href={{
                        pathname: '/register',
                        query: {
                          packageName: "Toddler Program",
                          price: "9 - 3 Years",
                          amount: 300
                        }
                      }}>
                        <button className="custom-btn">
                          <span>اشترك</span>
                        </button>
                      </Link>
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
                      $200
                      <Link href={{
                        pathname: '/register',
                        query: {
                          packageName: "Kindergarten Program",
                          price: "3 - 7 Years",
                          amount:200
                        }
                      }}>
                        <button className="custom-btn">
                          <span>اشترك</span>
                        </button>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
 
export default PricingSection;

