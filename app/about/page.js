"use client";
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Footer1 from '../components/Footer1';
import ExportedImage from 'next-image-export-optimizer';
import Link from 'next/link';
import TestimonialSection from '../components/TestimonialSection';
import Topbar from '../components/Topbar';
import ClientCarousel from '../components/about/ClientCarousel';
import { generateMetadata } from "../components/Meta";


const Page = () => {
  
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
        setMetadata(fetchedMetadata[0]);
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

      <div class="page-wrapper">

        <Topbar />

        <Header />

        <section className="page-header">
          <div className="page-header__bg_about" />
          <div className="container">
            <h2 className="page-header__title"> من نحن</h2>
            <ul className="kidearn-breadcrumb list-unstyled">
              <li>
                <Link href="/">الصفحة الرئيسية</Link>
              </li>
              <li>
                <span>من نحن</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="about-four">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 wow fadeInLeft" data-wow-delay="300ms">
                <div className="about-four__image">
                  <div className="about-four__image__shape1">
                    <ExportedImage
                      src="/images/about-4-shape-1.png"
                      alt="kidearn"
                      width={101}
                      height={110}
                      unoptimized={true}
                    />
                  </div>
                  <div
                    className="about-four__image__one kidearn-tilt"
                    data-tilt-options='{"glare": false, "maxglare": 0, "maxtilt": 3, "speed": 700, "scale": 1}'
                  >
                    <ExportedImage
                      src="/images/about-4-1.jpg"
                      alt="kidearn"
                      width={553}
                      height={553}
                      unoptimized={true}
                    />
                    <div className="about-four__image__one-bottom"></div>
                  </div>
                  <div
                    className="about-four__image__two wow fadeInUp"
                    data-wow-delay="500ms"
                  >
                    <ExportedImage
                      src="/images/about-4-2.jpg"
                      alt="kidearn"
                      width={264}
                      height={264}
                      unoptimized={true}
                    />
                  </div>
                  <div className="about-four__image__bg-shape">
                    <ExportedImage
                      src="/images/about-4-shape-2.png"
                      alt="kidearn"
                      width={673}
                      height={534}
                      unoptimized={true}
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 wow fadeInRight" data-wow-delay="200ms">
                <div className="about-four__content">
                  <div className="sec-title text-right">
                    <h6 className="sec-title__tagline"> من نحن</h6>
                    <h3 className="sec-title__title">بيت أمي
                    </h3>
                  </div>
                  <p className="about-four__content__text">
                    لأن الأم هي الحضن الرحيم والأمان والاطمئنان وهي الاحرص على أطفالها ولا يفوقها حرص الا امها، وقالوا قديما لا أعز من الولد إلا ولد الولد.
                  </p>
                  <div
                    className="about-four__info"
                    style={{ '--accent-color': '#F25334' }}
                  >
                    <div className="about-four__info__icon">
                      <span className="icon-trophy1"></span>
                    </div>
                    {/* <h3 className="about-four__info__title">وقت الفوز بالجوائز</h3> */}
                    <p className="about-four__info__text">
                      ولأننا ندرك أن الاحتياجات برغم تغيرها إلى أن المبدأ ذاته مستمر و لأننا ندرك أهمية العناية بالطفل في أوقات إنشغال أمه فقد حرصنا على استثمار ذلك الوقت في "بيت أمي" والذي هو كبيت الأم من الحرص على العناية بالطفل من حيث الصحة واستثمار الوقت باللعب والتعليم.
                    </p>
                  </div>
                  <div
                    className="about-four__info"
                    style={{ '--accent-color': '#2390FF' }}
                  >
                    <div className="about-four__info__icon">
                      <span className="icon-interest-rate"></span>
                    </div>
                    {/* <h3 className="about-four__info__title">
                  أعلى معدلات النجاح
                  </h3> */}
                    <p className="about-four__info__text">
                      حيث سيجد الطفل الكوادر السعوديه من الامهات المتخصصات في رعاية الاطفال وحضانتهم واخصائيات رياض الاطفال لتقديم البرامج التعليميه لكل الاعمار.
                    </p>
                  </div>
                  {/* <Link href="#" className="kidearn-btn">
                <span>المزيد</span>
                </Link> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-one cta-one--about-page">
          <div className="container">
            <div className="cta-one__inner">
              <div
                className="cta-one__shape1 kidearn-splax"
                data-para-options='{"orientation": "right", "scale": 1.5, "delay": ".4", "transition": "cubic-bezier(0,0,0,1)", "overflow": true}'
              >
                <ExportedImage
                  src="/images/cta-shape-1.png"
                  alt="kidearn"
                  width={296}
                  height={360}
                  unoptimized={true}
                />
              </div>
              <div
                className="cta-one__shape2 kidearn-splax"
                data-para-options='{"orientation": "down", "scale": 1.5, "delay": ".4", "transition": "cubic-bezier(0,0,0,1)", "overflow": true}'
              >
                <ExportedImage
                  src="/images/cta-shape-2.png"
                  alt="kidearn"
                  width={82}
                  height={90}
                  unoptimized={true}
                />
              </div>
              <div className="row">
                <div
                  className="col-lg-6 wow fadeInLeft"
                  data-wow-delay="100ms"
                >
                  <div className="cta-one__content">
                    <h3 className="cta-one__title">
                      تابعنا على صفحتنا في الانستقرام واطلع على ماهو جديد
                    </h3>
                    <Link href="https://www.instagram.com/baytummi" className="kidearn-btn ">
                      <span>تابعنا الآن</span>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="cta-one__one wow fadeInUp"
                    data-wow-delay="300ms"
                  >
                    <ExportedImage
                      src="/images/cta-1.png"
                      alt="kidearn"
                      width={535}
                      height={492}
                      unoptimized={true}
                    />
                    <div className="cta-one__one__text">الكل في <br /> واحد</div>
                  </div>
                  <div className="cta-one__thumb">
                    <div className="cta-one__thumb__two">
                      <ExportedImage
                        src="/images/cta-2.png"
                        alt="kidearn"
                        width={535}
                        height={329}
                        unoptimized={true}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="funfact-one">
          <div
            className="funfact-one__shape1 kidearn-splax"
            data-para-options='{"orientation": "down", "scale": 1.9, "delay": ".3", "transition": "cubic-bezier(0,0,0,1)", "overflow": true}'
          >
            <ExportedImage
              src="/images/funfact-shape-1.png"
              alt="kidearn"
              width={154}
              height={105}
              unoptimized={true}
            />
          </div>
          <div
            className="funfact-one__shape2 kidearn-splax"
            data-para-options='{"orientation": "right", "scale": 1.9, "delay": ".4", "transition": "cubic-bezier(0,0,0,1)", "overflow": true}'
          >
            <ExportedImage
              src="/images/funfact-shape-2.png"
              alt="kidearn"
              width={79}
              height={65}
              unoptimized={true}
            />
          </div>
          <div
            className="funfact-one__shape3 kidearn-splax"
            data-para-options='{"orientation": "right", "scale": 1.9, "delay": ".3", "transition": "cubic-bezier(0,0,0,1)", "overflow": true}'
          >
            <ExportedImage
              src="/images/funfact-shape-3.png"
              alt="kidearn"
              width={80}
              height={81}
              unoptimized={true}
            />
          </div>
          <div
            className="funfact-one__shape4 kidearn-splax"
            data-para-options='{"orientation": "left", "scale": 1.9, "delay": ".4", "transition": "cubic-bezier(0,0,0,1)", "overflow": true}'
          >
            <ExportedImage
              src="/images/funfact-shape-4.png"
              alt="kidearn"
              width={82}
              height={85}
              unoptimized={true}
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0ms">
                <div className="funfact-one__item text-center">
                  <div className="funfact-one__icon">
                    <span className="icon-student"></span>
                  </div>
                  <div className="funfact-one__count">
                    <span className="count-box">
                      <span className="count-text" >نعمل طوال العام</span>
                    </span>
                  </div>
                  {/* <p className="funfact-one__text">Students</p> */}
                </div>
              </div>
              <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                <div className="funfact-one__item text-center">
                  <div className="funfact-one__icon">
                    <span className="icon-diploma"></span>
                  </div>
                  <div className="funfact-one__count">
                    <span className="count-box">
                      <span className="count-text" >ساعات مرنة</span>
                    </span>
                  </div>
                  {/* <p className="funfact-one__text">Success Rate</p> */}
                </div>
              </div>
              <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                <div className="funfact-one__item text-center">
                  <div className="funfact-one__icon">
                    <span className="icon-teacher"></span>
                  </div>
                  <div className="funfact-one__count">
                    <span className="count-box">
                      <span className="count-text" data-stop="50.2" data-speed="1500">حضانة وتعليم</span>
                    </span>
                  </div>
                  {/* <p className="funfact-one__text">Instructors</p> */}
                </div>
              </div>
              <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                <div className="funfact-one__item text-center">
                  <div className="funfact-one__icon">
                    <span className="icon-knowledge"></span>
                  </div>
                  <div className="funfact-one__count">
                    <span className="count-box">
                      <span className="count-text" data-stop="4.8" data-speed="1500">أنشطة وفعاليات</span>
                    </span>
                  </div>
                  {/* <p className="funfact-one__text">Total Courses</p> */}
                </div>
              </div>
            </div>
          </div>
        </section>


        <TestimonialSection />

        {/* <TeamTwoSection />        */}


        <ClientCarousel />


        <Footer />
        <Footer1 />

      </div>
    </div>
  );
};

export default Page;
