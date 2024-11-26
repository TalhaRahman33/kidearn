"use client";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import Footer1 from "../components/Footer1";
import Link from "next/link";
import { generateMetadata } from "../components/Meta";
import Topbar from "../components/Topbar";

const ContactPage = () => {
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
        setMetadata(fetchedMetadata[4]);
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
    if (typeof document !== "undefined") {
      document.title = metadata.title;

      const descriptionMeta = document.querySelector(
        'meta[name="description"]'
      );
      if (descriptionMeta) {
        descriptionMeta.setAttribute("content", metadata.description);
      }

      const keywordsMeta = document.querySelector('meta[name="keywords"]');
      if (keywordsMeta && metadata.keywords) {
        keywordsMeta.setAttribute("content", metadata.keywords);
      }
    }
  }, [metadata]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://backend.baytummi.sa/api/contactleads",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            subject,
            message,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        setShowSuccess(true);
        setName("");
        setEmail("");
        setPhone("");
        setSubject("");
        setMessage("");
        setShowError(false); // Hide error message if any
      } else {
        setErrorMessage(data.message || "Message sending failed");
        setShowError(true);
        setShowSuccess(false); // Hide success message if any
      }
    } catch (error) {
      setErrorMessage(error.message);
      setShowError(true);
      setShowSuccess(false); // Hide success message if any
    }
  };

  return (
    <div className="custom-cursor">
      <div className="custom-cursor__cursor"></div>
      <div className="custom-cursor__cursor-two"></div>

      <div className="page-wrapper">
        <Topbar />
        <Header />

        <section className="page-header" style={{ position: "relative" }}>
          <div className="page-header__bg_contact" />
          <div
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              bottom: "0",
              left: "0",
              background: "rgba(0, 0, 0, 0.3)",
              transition: "opacity 0.5s ease",
              zIndex: 0,
            }}
          />
          <div className="container">
            <h2 className="page-header__title">اتصال</h2>

            <ul className="kidearn-breadcrumb list-unstyled">
              <li>
                <Link href="/">الصفحة الرئيسية</Link>
              </li>
              <li>
                <span>اتصال</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="contact-one">
          <div className="container">
            <div className="sec-title text-center">
              <h6 className="sec-title__tagline">اتـــصال</h6>
              <h3 className="sec-title__title">
                ســـجل بـــياناتك لـــنتصل بـــك{" "}
              </h3>
            </div>

            {showSuccess && (
              <div className="alert alert-success text-center">
                Your message has been sent successfully!
              </div>
            )}
            {showError && (
              <div className="alert alert-danger text-center">
                {errorMessage}
              </div>
            )}

            <form
              className="contact-one__form form-one"
              onSubmit={handleSubmit}
            >
              <div className="form-one__group">
                <div className="form-one__control">
                  <input
                    type="text"
                    name="name"
                    placeholder=" اسمك "
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-one__control">
                  <input
                    type="email"
                    name="email"
                    placeholder=" بريدك الالكتروني "
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-one__control">
                  <input
                    type="text"
                    name="phone"
                    placeholder="  رقم هاتفك "
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div className="form-one__control">
                  <input
                    type="text"
                    name="subject"
                    placeholder="  الموضوع "
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                </div>

                <div className="form-one__control form-one__control--full">
                  <textarea
                    name="message"
                    placeholder="  اكتب رسالتك …  "
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>

                <div className="form-one__control form-one__control--full text-center">
                  <button type="submit" className="kidearn-btn kidearn-btn--xl">
                    <span> ارسل رسالتك </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>

        <section className="contact-info-one mb-4">
          <div className="container">
            <div className="contact-info-one__inner">
              <div className="row">
                <div className="col-md-12 col-lg-4">
                  <div className="contact-info-one__item">
                    <i className="icon-telephone contact-info-one__icon"></i>
                    <p className="contact-info-one__text">هل لديك أي سؤال؟</p>
                    <h3 className="contact-info-one__title">
                      <Link
                        href="tel:+٠
 ٩٦٦٥٨٣٨٢٥١١٦٠
 "
                      >
                        ٠٥٨٣٨٢٥١١٦
                      </Link>
                    </h3>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4">
                  <div
                    className="contact-info-one__item"
                    style={{ "--accent-color": "#2390FF" }}
                  >
                    <i className="icon-email contact-info-one__icon"></i>
                    <p className="contact-info-one__text">
                      {" "}
                      أرسل بريدًا إلكترونيًا
                    </p>
                    <h3 className="contact-info-one__title">
                      <Link href="mailto:info@baytummi.sa">
                        info@baytummi.sa
                      </Link>
                    </h3>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4">
                  <div
                    className="contact-info-one__item"
                    style={{ "--accent-color": "#75C137" }}
                  >
                    <i className="icon-location-fill contact-info-one__icon"></i>
                    <p className="contact-info-one__text">زر في أي وقت </p>
                    <h5 className="contact-info-one__title">
                      <Link
                        href="https://maps.app.goo.gl/fhUFU1J1xG3L98uw7"
                        target="_blank"
                      >
                        شارع أبي بكر الصديق، النرجس{" "}
                      </Link>
                      {/* <Link href="https://maps.app.goo.gl/fhUFU1J1xG3L98uw7" target="_blank">شارع أبي بكر الصديق، النرجس، الرياض ١٣٣٢٣،  المملكة العربية السعودية</Link> */}
                      {/* <Link href="https://maps.app.goo.gl/fhUFU1J1xG3L98uw7" target="_blank">Abi Bakr As Siddiq Rd, An Narjis,Riyadh 13323, Saudi Arabia</Link> */}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-map mt-5">
          <div className="container-fluid">
            <div className="google-map google-map__contact">
              {/* <iframe
              title="template google map"
              src="
https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.499336554684!2d46.6695923!3d24.8125918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee3888003ec6b%3A0xd9b571bed949b0e0!2z2YXYsdmD2LIg2KjZitiqINij2YXZiiAtINi22YrYp9mB2Kkg2KPYt9mB2KfZhA!5e0!3m2!1sen!2s!4v1725884889986!5m2!1sen!2s"
              className="map__contact"
              allowFullScreen=""
            /> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.499336554684!2d46.6695923!3d24.8125918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee3888003ec6b%3A0xd9b571bed949b0e0!2z2YXYsdmD2LIg2KjZitiqINij2YXZiiAtINi22YrYp9mB2Kkg2KPYt9mB2KfZhA!5e0!3m2!1sen!2s!4v1727246272386!5m2!1sen!2s"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>

        <Footer />
        {/* <Footer1 /> */}
      </div>
    </div>
  );
};

export default ContactPage;
