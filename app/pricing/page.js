import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Footer1 from '../components/Footer1'
import Link from 'next/link'
import PricingSection from '../components/PricingSection'
import Topbar from '../components/Topbar';
const page = () => {
  return (
    <div className='custom-cursor'>

    <div className="custom-cursor__cursor"></div>
    <div className="custom-cursor__cursor-two"></div>
    
        <div className="page-wrapper">
        <Topbar />
      <Header />


      <section className="page-header">
            <div className="page-header__bg"></div>
            {/* /.page-header__bg */}
            <div className="container">
                <h2 className="page-header__title">الأسعار</h2>
                <ul className="kidearn-breadcrumb list-unstyled">
                    <li><Link href="/">الصفحة الرئيسية</Link></li>
                    <li><span>الأسعار</span></li>
                </ul>
                {/* /.kidearn-breadcrumb list-unstyled */}
            </div>
            {/* /.container */}
        </section>


    <PricingSection />





      <Footer />
      <Footer1 />

      </div>
    </div>
  )
}

export default page
