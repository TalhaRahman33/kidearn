"use client";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2"; // Import SweetAlert
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { generateMetadata } from "../components/Meta";
import Topbar from "../components/Topbar";

const ContactPage = () => {
  const [metadata, setMetadata] = useState({
    title: "مركز وقت الطفل لضيافة الأطفال | Child Time Center for Children's Hospitality",
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
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const response = await fetch("https://backend.baytummi.sa/api/contactleads", {
      const response = await fetch("https://rawdhat.com/api/public/contactleads", {
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
          centerId: 56,
        }),
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          title: "نجاح!",
          text: "تم إرسال رسالتك بنجاح!",
          icon: "success",
          confirmButtonText: "حسنًا",
        });

        // Clear form fields
        setName("");
        setEmail("");
        setPhone("");
        setSubject("");
        setMessage("");
      } else {
        Swal.fire({
          title: "خطأ!",
          text: data.message || "فشل إرسال الرسالة. حاول مرة أخرى.",
          icon: "error",
          confirmButtonText: "موافق",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "خطأ!",
        text: "حدث خطأ أثناء إرسال الرسالة. حاول مرة أخرى.",
        icon: "error",
        confirmButtonText: "موافق",
      });
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

        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;
