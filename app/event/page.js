import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Footer1 from "../components/Footer1";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <Header />

      <section className="page-header">
        <div className="page-header__bg"></div>
        {/* /.page-header__bg */}
        <div className="container">
          <h2 className="page-header__title">Events</h2>
          <ul className="kidearn-breadcrumb list-unstyled">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <span>Events</span>
            </li>
          </ul>
          {/* /.kidearn-breadcrumb list-unstyled */}
        </div>
        {/* /.container */}
      </section>

      <section className="event-page">
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
                        src="/images/event-1-3.jpg"
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
                        <a href="events-grid.html">Kindergarten</a>
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
                        <a href="events-details.html">
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
                        src="/images/event-1-4.jpg"
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
                        <a href="events-grid.html">Kindergarten</a>
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
                        <a href="events-details.html">
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
                        src="/images/event-1-5.jpg"
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
                        <a href="events-grid.html">Kindergarten</a>
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
                        <a href="events-details.html">
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
                        src="/images/event-1-6.jpg"
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
                        <a href="events-grid.html">Kindergarten</a>
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
                        <a href="events-details.html">
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
                        src="/images/event-1-7.jpg"
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
                        <a href="events-grid.html">Kindergarten</a>
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
                        <a href="events-details.html">
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
                        src="/images/event-1-8.jpg"
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
                        <a href="events-grid.html">Kindergarten</a>
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
                        <a href="events-details.html">
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
      </section>

      <Footer />
      <Footer1 />
    </div>
  );
};

export default page;
