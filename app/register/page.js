"use client"
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import Footer1 from '../components/Footer1';
import Link from 'next/link';
import RegisterForm from './RegisterForm';
import { generateMetadata } from "../components/Meta";
import Topbar from '../components/Topbar';

const Registerpage = () => {
  const [metadata, setMetadata] = useState({
    title:
      "مركز وقت الطفل لضيافة الأطفال | Child Time Center for Children's Hospitality",

    description:
      "تمكين الأطفال ليصبحوا مواطنين منتجين في كافة نواحي الحياة. | Empowering children to become productive citizens in all aspects of life.",
  });

  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        const fetchedMetadata = await generateMetadata();
        setMetadata(fetchedMetadata[5]);
      } catch (error) {
        console.error("Error fetching metadata:", error);
      }
    };

    fetchMetadata();

    return () => {
      // Cleanup function if needed
    };
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.title = metadata.title;

      const descriptionMeta = document.querySelector('meta[name="description"]');
      if (descriptionMeta) {
        descriptionMeta.setAttribute("content", metadata.description);
      }

      const keywordsMeta = document.querySelector('meta[name="keywords"]');
      if (keywordsMeta && metadata.keywords) {
        keywordsMeta.setAttribute("content", metadata.keywords);
      }
    }
  }, [metadata]);
  return (
    <div className='custom-cursor'>

      <div className="custom-cursor__cursor"></div>
      <div className="custom-cursor__cursor-two"></div>

      <div className="page-wrapper">
        <Topbar/>
        <Header />

        <section className="page-header" style={{position:"relative"}}>
          <div className="page-header__bg_register" />
          <div style={{
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: 'rgba(0, 0, 0, 0.5)',
        transition: 'opacity 0.5s ease',
        zIndex: 0,
      }} />
          <div className="container">
            <h2 className="page-header__title">تسجيل</h2>
            <ul className="kidearn-breadcrumb list-unstyled">
              <li>
                <Link href="/">الصفحة الرئيسية</Link>
              </li>
              <li>
                <span>تسجيل</span>
              </li>
            </ul>
          </div>
        </section>


        <RegisterForm />


        <Footer />
        {/* <Footer1 /> */}

      </div>
    </div>
  );
}

export default Registerpage;
