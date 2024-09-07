"use client";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Footer1 from "../components/Footer1";
import Link from "next/link";
import styles from "../jobForm/form.module.css";

const page = () => {
  return (
    <div>
      <Header />

      <>
        {/* /.page-header */}
        <section className="page-header">
          <div className="page-header__bg" />
          {/* /.page-header__bg */}
          <div className="container">
            <h2 className="page-header__title">Login</h2>
            <ul className="kidearn-breadcrumb list-unstyled">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <span>Login</span>
              </li>
            </ul>
            {/* /.thm-breadcrumb list-unstyled */}
          </div>
          {/* /.container */}
        </section>

        {/* Login Start */}
        <section className="login-page">
          <div className="container">
            {/* login-info */}

            <div className="row">
              <div class="centered-container">
                <h1>نموذج التقديم على وظيفة</h1>
              </div>

              <form className={styles.loginPageForm}>
                <div className={styles.formInputBox}>
                  <label className={styles.formLabel}>الاسم الأول:</label>
                  <input
                    type="text"
                    placeholder="الاسم الأول"
                    className={styles.loginPageInput}
                  />
                </div>

                <div className={styles.formInputBox}>
                  <label className={styles.formLabel}>اسم الأب:</label>
                  <input
                    type="text"
                    placeholder="اسم الأب"
                    className={styles.loginPageInput}
                  />
                </div>

                <div className={styles.formInputBox}>
                  <label className={styles.formLabel}>العائلة:</label>
                  <input
                    type="email"
                    placeholder="العائلة"
                    className={styles.loginPageInput}
                  />
                </div>

                <div className={styles.formInputBox}>
                  <label className={styles.formLabel}>البريد الالكتروني:</label>
                  <input
                    type="email"
                    placeholder="البريد الالكتروني"
                    className={styles.loginPageInput}
                  />
                </div>

                <div className={styles.formInputBox}>
                  <label className={styles.formLabel} htmlFor="job">
                    الوظيفة المرغوبة:
                  </label>
                  <select className={styles.formSelect} required>
                    <option value="">اختر الوظيفة</option>
                    <option value="حاضنة">حاضنة</option>
                    <option value="معلمة">معلمة</option>
                    <option value="إدارية">إدارية</option>
                    <option value="عاملة نظافة">عاملة نظافة</option>
                    <option value="متطوعة">متطوعة</option>
                  </select>
                </div>

                <div className={styles.formInputBox}>
                  <label className={styles.formLabel} htmlFor="message">
                    اكتب رسالة:
                  </label>
                  <textarea
                    className={styles.formTextarea}
                    rows={4}
                    placeholder="اكتب رسالتك"
                    required
                  />
                </div>

                <div className={styles.formInputBox}>
                  <label className={styles.formLabel} htmlFor="cv">
                    حمل السيرة الذاتية:
                  </label>
                  <input
                    type="file"
                    className={styles.customFileInput}
                    id="cv"
                    name="cv"
                    accept=".pdf,.docx"
                    required
                  />
                </div>

                <div className={styles.loginPageFormBtnBox}>
                  <button type="submit" className={styles.kidearnBtn}>
                    <span>التقديم الآن </span>
                  </button>
                </div>
              </form>
            </div>

            {/* login-page__wrap */}
          </div>
        </section>
      </>

      <Footer />
      <Footer1 />
    </div>
  );
};

export default page;
