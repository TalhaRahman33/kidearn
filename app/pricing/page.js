import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Footer1 from '../components/Footer1'
import Link from 'next/link'
import PricingSection from '../components/PricingSection'

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


    <PricingSection />





      <Footer />
      <Footer1 />

      </div>
    </div>
  )
}

export default page
