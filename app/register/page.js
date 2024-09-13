"use client"
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Footer1 from '../components/Footer1';
import Link from 'next/link';
import RegisterForm from './RegisterForm';


const Registerpage = () => {
  return (
    <div className='custom-cursor'>

<div className="custom-cursor__cursor"></div>
<div className="custom-cursor__cursor-two"></div>

    <div className="page-wrapper">
      <Header />

      <section className="page-header">
          <div className="page-header__bg" />
          <div className="container">
            <h2 className="page-header__title">registration</h2>
            <ul className="kidearn-breadcrumb list-unstyled">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <span>registration</span>
              </li>
            </ul>
          </div>
        </section>

    
    <RegisterForm />
   





      <Footer />
      <Footer1 />

      </div>
    </div>
  );
}

export default Registerpage;
