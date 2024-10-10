"use client";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Footer1 from "../components/Footer1";
import Link from "next/link";
import Modal from "react-bootstrap/Modal";
import Topbar from "../components/Topbar";
import { generateMetadata } from "../components/Meta";

const JobApplicationPage = () => {

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
        setMetadata(fetchedMetadata[3]);
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

  const [firstName, setFirstName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [email, setEmail] = useState("");
  const [job, setJob] = useState("");
  const [message, setMessage] = useState("");
  const [cv, setCv] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCloseSuccess = () => setShowSuccess(false);
  const handleCloseError = () => setShowError(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("fatherName", fatherName);
    formData.append("familyName", familyName);
    formData.append("email", email);
    formData.append("job", job);
    formData.append("message", message);
    formData.append("cv", cv);

    try {
      const response = await fetch("https://testing.childoasis.com.sa/api/apply", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setShowSuccess(true);
        setFirstName("");
        setFatherName("");
        setFamilyName("");
        setEmail("");
        setJob("");
        setMessage("");
        setCv(null);
      } else {
        setErrorMessage(data.message || "Failed to submit application");
        setShowError(true);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setShowError(true);
    }
  };

  return (

    <div className='custom-cursor'>

      <div className="custom-cursor__cursor"></div>
      <div className="custom-cursor__cursor-two"></div>

      <div className="page-wrapper">
        <Topbar />
        <Header />


        <section className="page-header" style={{position:"relative"}}>
          <div className="page-header__bg_job" />
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
            <h2 className="page-header__title">نموذج التقديم على وظيفة</h2>
            <ul className="kidearn-breadcrumb list-unstyled">
              <li>
                <Link href="/">الصفحة الرئيسية</Link>
              </li>
              <li>
                <span>نموذج التقديم على وظيفة</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="py-8">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-semibold mb-6">نموذج التقديم على وظيفة</h1>
              <div className="w-10/12 mx-auto mb-6 border-b-2 border-[#FAF5F2]"></div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-6 p-8 bg-white rounded-lg shadow-md"
              style={{ boxShadow: "0px 4px 10px rgba(250, 245, 242, 0.5)" }}
            >
              <div className="flex flex-col space-y-4">
                <div className="flex flex-col">
                  <label className="text-gray-700 mb-2 input-font">الاسم الأول</label>
                  <input
                    type="text"
                    placeholder="الاسم الأول"
                    className="w-full p-3 rounded-lg bg-[#FAF5F2] border border-[#FAF5F2] focus:outline-none focus:ring-2 focus:ring-[#fe6367]"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-gray-700 mb-2 input-font ">اسم الأب</label>
                  <input
                    type="text"
                    placeholder="اسم الأب"
                    className="w-full p-3 rounded-lg bg-[#FAF5F2] border border-[#FAF5F2] focus:outline-none focus:ring-2 focus:ring-[#fe6367]"
                    value={fatherName}
                    onChange={(e) => setFatherName(e.target.value)}
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-gray-700 mb-2 input-font">العائلة</label>
                  <input
                    type="text"
                    placeholder="العائلة"
                    className="w-full p-3 rounded-lg bg-[#FAF5F2] border border-[#FAF5F2] focus:outline-none focus:ring-2 focus:ring-[#fe6367]"
                    value={familyName}
                    onChange={(e) => setFamilyName(e.target.value)}
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-gray-700 mb-2 input-font">البريد الالكتروني</label>
                  <input
                    type="email"
                    placeholder="البريد الالكتروني"
                    className="w-full p-3 rounded-lg bg-[#FAF5F2] border border-[#FAF5F2] focus:outline-none focus:ring-2 focus:ring-[#fe6367]"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-gray-700 mb-2 input-font">الوظيفة المرغوبة</label>
                  <select
                    className="w-full p-3 rounded-lg bg-[#FAF5F2] border border-[#FAF5F2] focus:outline-none focus:ring-2 focus:ring-[#fe6367] select-optn"
                    value={job}
                    onChange={(e) => setJob(e.target.value)}
                    required
                  >
                    <option value="">اختر الوظيفة</option>
                    <option value="حاضنة">حاضنة</option>
                    <option value="معلمة">معلمة</option>
                    <option value="إدارية">إدارية</option>
                    <option value="عاملة نظافة">عاملة نظافة</option>
                    <option value="متطوعة">متطوعة</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className="text-gray-700 mb-2 input-font">اكتب رسالة</label>
                  <textarea
                    placeholder="اكتب رسالتك"
                    className="w-full p-3 rounded-lg bg-[#FAF5F2] border border-[#FAF5F2] focus:outline-none focus:ring-2 focus:ring-[#fe6367]"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-gray-700 mb-2 input-font">السيرة الذاتية</label>
                  <input
                    type="file"
                    className="block w-full mb-4 p-3 rounded-lg bg-[#FAF5F2] border border-[#FAF5F2] text-gray-700"
                    accept=".pdf,.docx"
                    onChange={(e) => setCv(e.target.files[0])}
                    required
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-[#fe6367] text-white py-2.5 px-20 rounded-lg shadow-md hover:bg-[#ff4a4a]"
                  >
                    التقديم الآن
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>


        <Footer />
        <Footer1 />

        <Modal show={showSuccess} onHide={handleCloseSuccess} className="main-model">
          <Modal.Header className="modelhead">
            <Modal.Title className="model-title">
              <i className="bx bx-check-circle" style={{ color: "green", fontSize: "50px" }}></i>
              <h4>شكرا لك!</h4>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="model-body">
            <p>تم تقديم طلبك بنجاح. سنتصل بك قريباً.</p>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={handleCloseSuccess} className="btn btn-secondary">
              إغلاق
            </button>
          </Modal.Footer>
        </Modal>

        <Modal show={showError} onHide={handleCloseError} className="main-model">
          <Modal.Header className="modelhead">
            <Modal.Title className="model-title">
              <i className="bx bx-error-circle" style={{ color: "red", fontSize: "50px" }}></i>
              <h4>حدث خطأ</h4>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="model-body">
            <p>{errorMessage}</p>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={handleCloseError} className="btn btn-secondary">
              إغلاق
            </button>
          </Modal.Footer>
        </Modal>

      </div>
    </div>
  );
};

export default JobApplicationPage;
