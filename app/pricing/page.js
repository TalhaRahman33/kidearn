import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Footer1 from '../components/Footer1'
import Link from 'next/link'

const page = () => {
  return (
    <div className='custom-cursor'>

    <div className="custom-cursor__cursor"></div>
    <div className="custom-cursor__cursor-two"></div>
    
        <div className="page-wrapper">

      <Header />


      <section className="page-header">
            <div className="page-header__bg"></div>
            {/* /.page-header__bg */}
            <div className="container">
                <h2 className="page-header__title">Pricing</h2>
                <ul className="kidearn-breadcrumb list-unstyled">
                    <li><Link href="/">Home</Link></li>
                    <li><span>Pricing</span></li>
                </ul>
                {/* /.kidearn-breadcrumb list-unstyled */}
            </div>
            {/* /.container */}
        </section>



        <section className="pricing-one">
            <div className="container">
                <div className="sec-title text-center">
                    <h6 className="sec-title__tagline">Our Pricings</h6>
                    <h3 className="sec-title__title">
                        Select a plan according to <br /> your requirements
                    </h3>
                </div>
                {/* /.sec-title */}
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
                        {/* /.list-unstyled tab-buttons */}
                    </div>
                    {/* /.text-center */}
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
                                        {/* /.pricing-one__card__icon */}
                                        <ul className="list-unstyled pricing-one__card__list">
                                            <li>
                                                <i className="fa fa-check-circle"></i>
                                                Open Play
                                            </li>
                                            <li>
                                                <i className="fa fa-check-circle"></i>
                                                Parent Supervision
                                            </li>
                                            <li>
                                                <i className="fa fa-check-circle"></i>
                                                Unlimited Playtime
                                            </li>
                                            <li>
                                                <i className="fa fa-check-circle"></i>
                                                Adult Entry is Free
                                            </li>
                                        </ul>
                                        {/* /.list-unstyled pricing-one__card__list */}
                                        <h3 className="pricing-one__card__price">Free</h3>
                                    </div>
                                    {/* /.pricing-one__card */}
                                </div>
                                {/* /.col-md-12 col-lg-4 */}
                                <div className="col-md-12 col-lg-4">
                                    <div className="pricing-one__card" style={{ '--accent-color': '#2390FF' }}>
                                        <h4 className="pricing-one__card__tagline">Toddler Program</h4>
                                        <h4 className="pricing-one__card__month">9 - 3 Years</h4>
                                        <div className="pricing-one__card__icon">
                                            <i className="icon-fun"></i>
                                        </div>
                                        {/* /.pricing-one__card__icon */}
                                        <ul className="list-unstyled pricing-one__card__list">
                                            <li>
                                                <i className="fa fa-check-circle"></i>
                                                Open Play
                                            </li>
                                            <li>
                                                <i className="fa fa-check-circle"></i>
                                                Parent Supervision
                                            </li>
                                            <li>
                                                <i className="fa fa-check-circle"></i>
                                                Unlimited Playtime
                                            </li>
                                            <li>
                                                <i className="fa fa-check-circle"></i>
                                                Adult Entry is Free
                                            </li>
                                        </ul>
                                        {/* /.list-unstyled pricing-one__card__list */}
                                        <h3 className="pricing-one__card__price">$20</h3>
                                    </div>
                                    {/* /.pricing-one__card */}
                                </div>
                                {/* /.col-md-12 col-lg-4 */}
                                <div className="col-md-12 col-lg-4">
                                    <div className="pricing-one__card" style={{ '--accent-color': '#75C137' }}>
                                        <h4 className="pricing-one__card__tagline">Kindergarten Program</h4>
                                        <h4 className="pricing-one__card__month">3 - 7 Years</h4>
                                        <div className="pricing-one__card__icon">
                                            <i className="icon-playtime"></i>
                                        </div>
                                        {/* /.pricing-one__card__icon */}
                                        <ul className="list-unstyled pricing-one__card__list">
                                            <li>
                                                <i className="fa fa-check-circle"></i>
                                                Open Play
                                            </li>
                                            <li>
                                                <i className="fa fa-check-circle"></i>
                                                Parent Supervision
                                            </li>
                                            <li>
                                                <i className="fa fa-check-circle"></i>
                                                Unlimited Playtime
                                            </li>
                                            <li>
                                                <i className="fa fa-check-circle"></i>
                                                Adult Entry is Free
                                            </li>
                                        </ul>
                                        {/* /.list-unstyled pricing-one__card__list */}
                                        <h3 className="pricing-one__card__price">$30</h3>
                                    </div>
                                    {/* /.pricing-one__card */}
                                </div>
                                {/* /.col-md-12 col-lg-4 */}
                            </div>
                            {/* /.row */}
                        </div>
                        {/* /.tab */}
                        <div className="tab fadeInUp animated" id="yearly">
                            <div className="row gutter-y-30">
                                <div className="col-md-12 col-lg-4">
                                    <div className="pricing-one__card" style={{ '--accent-color': '#F25334' }}>
                                        <h4 className="pricing-one__card__tagline">Open Play</h4>
                                        <h4 className="pricing-one__card__month">8 - 1 Year</h4>
                                        <div className="pricing-one__card__icon">
                                            <i className="icon-crawling-baby-silhouette"></i>
                                        </div>
                                        {/* /.pricing-one__card__icon */}
                                        <ul className="list-unstyled pricing-one__card__list">
                                            <li>
                                                <i className="fa fa-check-circle"></i>
                                                Open Play
                                            </li>
                                            <li>
                                                <i className="fa fa-check-circle"></i>
                                                Parent Supervision
                                            </li>
                                            <li>
                                                <i className="fa fa-check-circle"></i>
                                                Unlimited Playtime
                                            </li>
                                            <li>
                                                <i className="fa fa-check-circle"></i>
                                                Adult Entry is Free
                                            </li>
                                        </ul>
                                        {/* /.list-unstyled pricing-one__card__list */}
                                        <h3 className="pricing-one__card__price">Free</h3>
                                    </div>
                                    {/* /.pricing-one__card */}
                                </div>
                                {/* /.col-md-12 col-lg-4 */}
                                <div className="col-md-12 col-lg-4">
                                    <div className="pricing-one__card" style={{ '--accent-color': '#2390FF' }}>
                                        <h4 className="pricing-one__card__tagline">Toddler Program</h4>
                                        <h4 className="pricing-one__card__month">9 - 3 Years</h4>
                                        <div className="pricing-one__card__icon">
                                            <i className="icon-fun"></i>
                                        </div>
                                        {/* /.pricing-one__card__icon */}
                                        <ul className="list-unstyled pricing-one__card__list">
                                            <li>
                                                <i className="fa fa-check-circle"></i>
                                                Open Play
                                            </li>
                                            <li>
                                                <i className="fa fa-check-circle"></i>
                                                Parent Supervision
                                            </li>
                                            <li>
                                                <i className="fa fa-check-circle"></i>
                                                Unlimited Playtime
                                            </li>
                                            <li>
                                                <i className="fa fa-check-circle"></i>
                                                Adult Entry is Free
                                            </li>
                                        </ul>
                                        {/* /.list-unstyled pricing-one__card__list */}
                                        <h3 className="pricing-one__card__price">$99</h3>
                                    </div>
                                    {/* /.pricing-one__card */}
                                </div>
                                {/* /.col-md-12 col-lg-4 */}
                                <div className="col-md-12 col-lg-4">
                                    <div className="pricing-one__card" style={{ '--accent-color': '#75C137' }}>
                                        <h4 className="pricing-one__card__tagline">Kindergarten Program</h4>
                                        <h4 className="pricing-one__card__month">3 - 7 Years</h4>
                                        <div className="pricing-one__card__icon">
                                            <i className="icon-playtime"></i>
                                        </div>
                                        {/* /.pricing-one__card__icon */}
                                        <ul className="list-unstyled pricing-one__card__list">
                                            <li>
                                                <i className="fa fa-check-circle"></i>
                                                Open Play
                                            </li>
                                            <li>
                                                <i className="fa fa-check-circle"></i>
                                                Parent Supervision
                                            </li>
                                            <li>
                                                <i className="fa fa-check-circle"></i>
                                                Unlimited Playtime
                                            </li>
                                            <li>
                                                <i className="fa fa-check-circle"></i>
                                                Adult Entry is Free
                                            </li>
                                        </ul>
                                        {/* /.list-unstyled pricing-one__card__list */}
                                        <h3 className="pricing-one__card__price">$199</h3>
                                    </div>
                                    {/* /.pricing-one__card */}
                                </div>
                                {/* /.col-md-12 col-lg-4 */}
                            </div>
                            {/* /.row */}
                        </div>
                        {/* /.tab */}
                    </div>
                    {/* /.tabs-content */}
                </div>
                {/* /.tabs-box */}
            </div>
            {/* /.container */}
        </section>





      <Footer />
      <Footer1 />

      </div>
    </div>
  )
}

export default page
