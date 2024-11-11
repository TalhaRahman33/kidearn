"use client";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import Footer1 from "../components/Footer1";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import { Gallery } from "../components/Gallery";
import Topbar from '../components/Topbar';
import { generateMetadata } from "../components/Meta";


const page = () => {
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
        setMetadata(fetchedMetadata[2]);
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
        <Topbar />
        <Header />

        <section className="page-header" style={{position:"relative"}}>
          <div className="page-header__bg_event"/>
          <div style={{
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: 'rgba(0, 0, 0, 0.3)',
        transition: 'opacity 0.5s ease',
        zIndex: 0,
      }} />
          {/* /.page-header__bg */}
          <div className="container">
            <h2 className="page-header__title">
              الفعاليات</h2>
            <ul className="kidearn-breadcrumb list-unstyled">
              <li>
                <Link href="/">الصفحة الرئيسية</Link>
              </li>
              <li>
                <span>
                  الفعاليات</span>
              </li>
            </ul>
            {/* /.kidearn-breadcrumb list-unstyled */}
          </div>
          {/* /.container */}
        </section>

        {/* <section className="event-page">
          <div className="container">
            <div className="row gutter-y-30">
              <div
                className="col-md-12 col-lg-6 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div
                  className="event-card-two @@extraClassName"
                  style={{ "--accent-color": "#F25334" }}
                >
                  <div className="row">
                    <div className="col-md-5">
                      <div className="event-card-two__image">
                        <ExportedImage
                          src="/images/event-1-3.png"
                          alt="Let’s spend summer together with your teachers"
                          unoptimized={true}
                          width={250}
                          height={263}
                        />
                        <div className="event-card-two__date">
                          <span className="event-card-two__date-left">16</span>
                          March 2023
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7 d-flex align-items-center">
                      <div className="event-card-two__content">
                        <div className="event-card-two__cats">
                          <a href="#">Kindergarten</a>
                        </div>
                        <ul className="event-card-two__lists">
                          <li>
                            <span className="icon-clock1"></span>08:00am - 05:00pm
                          </li>
                          <li>
                            <span className="icon-location-fill"></span>6391 Elgin
                            St. Celina, Delaware
                          </li>
                        </ul>
                        <h3 className="event-card-two__title">
                          <a href="#">
                            Let’s spend summer together with your teachers
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-12 col-lg-6 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div
                  className="event-card-two @@extraClassName"
                  style={{ "--accent-color": "#2390FF" }}
                >
                  <div className="row">
                    <div className="col-md-5">
                      <div className="event-card-two__image">
                        <ExportedImage
                          src="/images/event-1-4.png"
                          alt="The complete web developer guideline 2023"
                          unoptimized={true}
                          width={250}
                          height={263}
                        />
                        <div className="event-card-two__date">
                          <span className="event-card-two__date-left">16</span>
                          March 2023
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7 d-flex align-items-center">
                      <div className="event-card-two__content">
                        <div className="event-card-two__cats">
                          <a href="#">Kindergarten</a>
                        </div>
                        <ul className="event-card-two__lists">
                          <li>
                            <span className="icon-clock1"></span>08:00am - 05:00pm
                          </li>
                          <li>
                            <span className="icon-location-fill"></span>6391 Elgin
                            St. Celina, Delaware
                          </li>
                        </ul>
                        <h3 className="event-card-two__title">
                          <a href="#">
                            The complete web developer guideline 2023
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-12 col-lg-6 wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div
                  className="event-card-two @@extraClassName"
                  style={{ "--accent-color": "#75C137" }}
                >
                  <div className="row">
                    <div className="col-md-5">
                      <div className="event-card-two__image">
                        <ExportedImage
                          src="/images/event-1-5.png"
                          alt="Gathering & welcome speech marketing strategy"
                          unoptimized={true}
                          width={250}
                          height={263}
                        />
                        <div className="event-card-two__date">
                          <span className="event-card-two__date-left">16</span>
                          March 2023
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7 d-flex align-items-center">
                      <div className="event-card-two__content">
                        <div className="event-card-two__cats">
                          <a href="#">Kindergarten</a>
                        </div>
                        <ul className="event-card-two__lists">
                          <li>
                            <span className="icon-clock1"></span>08:00am - 05:00pm
                          </li>
                          <li>
                            <span className="icon-location-fill"></span>6391 Elgin
                            St. Celina, Delaware
                          </li>
                        </ul>
                        <h3 className="event-card-two__title">
                          <a href="#">
                            Gathering & welcome speech marketing strategy
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-12 col-lg-6 wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div
                  className="event-card-two @@extraClassName"
                  style={{ "--accent-color": "#FFAA23" }}
                >
                  <div className="row">
                    <div className="col-md-5">
                      <div className="event-card-two__image">
                        <ExportedImage
                          src="/images/event-1-6.png"
                          alt="How a business can handle a business strategy"
                          unoptimized={true}
                          width={250}
                          height={263}
                        />
                        <div className="event-card-two__date">
                          <span className="event-card-two__date-left">16</span>
                          March 2023
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7 d-flex align-items-center">
                      <div className="event-card-two__content">
                        <div className="event-card-two__cats">
                          <a href="#">Kindergarten</a>
                        </div>
                        <ul className="event-card-two__lists">
                          <li>
                            <span className="icon-clock1"></span>08:00am - 05:00pm
                          </li>
                          <li>
                            <span className="icon-location-fill"></span>6391 Elgin
                            St. Celina, Delaware
                          </li>
                        </ul>
                        <h3 className="event-card-two__title">
                          <a href="#">
                            How a business can handle a business strategy
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-12 col-lg-6 wow fadeInUp"
                data-wow-delay="500ms"
              >
                <div
                  className="event-card-two @@extraClassName"
                  style={{ "--accent-color": "#26A6A1" }}
                >
                  <div className="row">
                    <div className="col-md-5">
                      <div className="event-card-two__image">
                        <ExportedImage
                          src="/images/event-1-7.png"
                          alt="Let’s spend summer together with your teachers"
                          unoptimized={true}
                          width={250}
                          height={263}
                        />
                        <div className="event-card-two__date">
                          <span className="event-card-two__date-left">16</span>
                          March 2023
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7 d-flex align-items-center">
                      <div className="event-card-two__content">
                        <div className="event-card-two__cats">
                          <a href="#">Kindergarten</a>
                        </div>
                        <ul className="event-card-two__lists">
                          <li>
                            <span className="icon-clock1"></span>08:00am - 05:00pm
                          </li>
                          <li>
                            <span className="icon-location-fill"></span>6391 Elgin
                            St. Celina, Delaware
                          </li>
                        </ul>
                        <h3 className="event-card-two__title">
                          <a href="#">
                            Let’s spend summer together with your teachers
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-12 col-lg-6 wow fadeInUp"
                data-wow-delay="600ms"
              >
                <div
                  className="event-card-two @@extraClassName"
                  style={{ "--accent-color": "#0078FF" }}
                >
                  <div className="row">
                    <div className="col-md-5">
                      <div className="event-card-two__image">
                        <ExportedImage
                          src="/images/event-1-8.png"
                          alt="How a business can handle a business strategy"
                          unoptimized={true}
                          width={250}
                          height={263}
                        />
                        <div className="event-card-two__date">
                          <span className="event-card-two__date-left">16</span>
                          March 2023
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7 d-flex align-items-center">
                      <div className="event-card-two__content">
                        <div className="event-card-two__cats">
                          <a href="#">Kindergarten</a>
                        </div>
                        <ul className="event-card-two__lists">
                          <li>
                            <span className="icon-clock1"></span>08:00am - 05:00pm
                          </li>
                          <li>
                            <span className="icon-location-fill"></span>6391 Elgin
                            St. Celina, Delaware
                          </li>
                        </ul>
                        <h3 className="event-card-two__title">
                          <a href="#">
                            How a business can handle a business strategy
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <Gallery />

        <Footer />
        {/* <Footer1 /> */}

      </div>
    </div>
  );
};

export default page;
