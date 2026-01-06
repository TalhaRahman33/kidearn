"use client";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2"; // Import SweetAlert
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { generateMetadata } from "../components/Meta";
import Topbar from "../components/Topbar";
import {
  User,
  Mail,
  Phone,
  Info,
  MessageSquare
} from "lucide-react";

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

  const isValidSaudiPhone = (phone) => {
    return /^5\d{8}$/.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidSaudiPhone(phone)) {
      Swal.fire({
        title: "رقم غير صحيح",
        text: "رقم الجوال يجب أن يبدأ بـ 5 ويتكون من 9 أرقام",
        icon: "warning",
        confirmButtonText: "موافق",
      });
      return;
    }
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
          phone: `+966${phone}`, // Prepend Saudi Arabia country code
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
                  <div style={{ position: "relative" }}>
                    <span style={{
                      position: "absolute",
                      left: "15px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "#666",
                      display: "flex"
                    }}>
                      <User size={18} strokeWidth={2} />
                    </span>
                    <input
                      type="text"
                      name="name"
                      placeholder=" اسمك "
                      style={{
                        paddingLeft: "40px",
                        borderRadius: "8px",
                        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)",
                        transition: "all 0.3s ease",
                        border: "1px solid #eaeaea"
                      }}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="form-one__control">
                  <div style={{ position: "relative" }}>
                    <span style={{
                      position: "absolute",
                      left: "15px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "#666",
                      display: "flex"
                    }}>
                      <Mail size={18} strokeWidth={2} />
                    </span>
                    <input
                      type="email"
                      name="email"
                      placeholder=" بريدك الالكتروني "
                      style={{
                        paddingLeft: "40px",
                        borderRadius: "8px",
                        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)",
                        transition: "all 0.3s ease",
                        border: "1px solid #eaeaea"
                      }}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="form-one__control111">
                  <div style={{
                    position: "relative",
                  }}>
                    <div
                      style={{
                        position: "absolute",
                        left: "15px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        color: "#333",
                        fontWeight: "600",
                        display: "flex",
                        alignItems: "center"
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "7px", flexDirection: "row-reverse", }}>
                        <Phone size={18} strokeWidth={2} />
                        <span>SA +966</span>
                      </div>
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="5xxxxxxxx"
                      style={{
                        padding: "14px 15px",
                        color: "#666",
                        fontWeight: "500",
                        paddingLeft: "120px",
                        width: "100%",
                        border: "1px solid #eaeaea",
                        fontSize: "16px",
                        transition: "all 0.3s ease",
                        outline: "none",
                        borderRadius: "8px",
                        backgroundColor: "#faf5f2",


                      }}
                      pattern="5\d{8}"
                      title="رقم الجوال يجب أن يبدأ بـ 5 ويتكون من 9 أرقام"
                      value={phone}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, "");
                        if ((value.startsWith("5") || value === "") && value.length <= 9) {
                          setPhone(value);
                        }
                      }}

                      maxLength={9}
                      required
                    />
                  </div>
                  <small
                    style={{
                      color: "#666",
                      display: "block",
                      textAlign: "right",
                      marginRight: "12px",
                      marginTop: "8px",
                      fontSize: "12px"
                    }}
                  >
                    اكتب الأرقام بعد 966+ — يجب أن تبدأ بـ 5 وتتكون من 9 أرقام
                  </small>
                </div>
                <div className="form-one__control">
                  <div style={{ position: "relative" }}>
                    <span style={{
                      position: "absolute",
                      left: "15px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "#666",
                      display: "flex"
                    }}>
                      <Info size={18} strokeWidth={2} />
                    </span>
                    <input
                      type="text"
                      name="subject"
                      placeholder="  الموضوع "
                      style={{
                        paddingLeft: "40px",
                        borderRadius: "8px",
                        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)",
                        transition: "all 0.3s ease",
                        border: "1px solid #eaeaea"
                      }}
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="form-one__control form-one__control--full">
                  <div style={{ position: "relative" }}>
                    <span style={{
                      position: "absolute",
                      left: "15px",
                      top: "15px",
                      color: "#666",
                      display: "flex"
                    }}>
                      <MessageSquare size={18} strokeWidth={2} />
                    </span>
                    <textarea
                      name="message"
                      placeholder="  اكتب رسالتك …  "
                      style={{
                        paddingLeft: "40px",
                        borderRadius: "8px",
                        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)",
                        transition: "all 0.3s ease",
                        border: "1px solid #eaeaea",
                        minHeight: "150px"
                      }}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    ></textarea>
                  </div>
                </div>

                <div className="form-one__control form-one__control--full text-center">
                  <button
                    type="submit"
                    className="kidearn-btn kidearn-btn--xl"
                    style={{
                      borderRadius: "8px",
                      transition: "all 0.3s ease",
                      position: "relative",
                      overflow: "hidden"
                    }}
                  >
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
