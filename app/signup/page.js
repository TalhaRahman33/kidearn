"use client";

import React, { useState } from "react";
import Swal from "sweetalert2"; // Import SweetAlert2
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from 'next/navigation';
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";

// Validation Schema
const validationSchema = Yup.object({
  firstName: Yup.string().required("الاسم مطلوب"),
  email: Yup.string()
    .email("البريد الإلكتروني غير صالح")
    .required("البريد الإلكتروني مطلوب"),
  district: Yup.string().required("اسم الحي مطلوب"),
  contact1: Yup.string().required("رقم الجوال مطلوب"),
  nationality: Yup.string().required("الجنسية مطلوبة"),
  password: Yup.string()
    .required("كلمة المرور مطلوبة")
    .min(8, "كلمة المرور يجب أن تكون على الأقل 8 أحرف"),
  confirmPassword: Yup.string()
    .required("تأكيد كلمة المرور مطلوب")
    .oneOf([Yup.ref("password")], "كلمتا المرور غير متطابقتين"),
});

const Signup = () => {
  const [emailError, setEmailError] = useState(""); // State for custom email error
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      contact1: "",
      district: "",
      nationality: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setEmailError(""); // Reset email error before submitting
      try {
        const response = await fetch("https://backend.baytummi.sa/api/gardianregister", {
          // const response = await fetch("http://localhost:5000/api/gardianregister", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        const data = await response.json();

        if (response.ok) {
          if (data.message === "Email already in use") {
            setEmailError("البريد الإلكتروني مستخدم بالفعل");
            return;
          }

          // SweetAlert on success
          Swal.fire({
            icon: "success",
            title: "تم التسجيل بنجاح!",
            text: "تم تسجيل حسابك بنجاح. سيتم إعادة توجيهك إلى صفحة تسجيل الدخول.",
            confirmButtonText: "حسنًا",
          }).then(() => {
            formik.resetForm();
            router.push('/login');
          });
        } else {
          throw new Error(data.message || "حدث خطأ ما");
        }
      } catch (error) {
        console.error("Error:", error.message);

        // SweetAlert on failure
        Swal.fire({
          icon: "error",
          title: "حدث خطأ",
          text: "حدث خطأ أثناء التسجيل. حاول مرة أخرى لاحقًا.",
          confirmButtonText: "حسنًا",
        });
      }
    },
  });

  const passwordStyles = {
    wrapper: {
      position: 'relative',
      width: '100%'
    },
    eye: {
      position: 'absolute',
      left: '10px',
      top: '35%',
      transform: 'translateY(-50%)',
      cursor: 'pointer',
      userSelect: 'none',
      fontSize: '20px'
    },
    input: {
      paddingLeft: '35px',
      width: '100%'
    }
  };

  return (
    <div className="signup-container">
      <div className="left-side">
        <ExportedImage
          unoptimized="true"
          width={500}
          height={500}
          src="./images/bayt-signup.png"
          alt="Signup Illustration"
          className="signup-image"
        />

      </div>

      <div className="right-side">
        <div className="form-container">
          <ExportedImage
            unoptimized="true"
            width={100}
            height={100}
            src="./images/logo-dark.png"
            alt="Logo"
            className="signlogo"
          />
          {/* <h6 className="green login-title">مركز وقت الطفل لضيافة الأطفال</h6> */}
          <h4 className="form-title pb-1">

            إنشاء حساب
          </h4>

          <form onSubmit={formik.handleSubmit} className="form" >
            <input
              type="text"
              name="firstName"
              // placeholder="الاسم"
              placeholder="الاسم كامل:"

              className="input-field"
              value={formik.values.firstName}
              onChange={formik.handleChange}
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <div className="error">{formik.errors.firstName}</div>
            )}

            <input
              type="email"
              name="email"
              placeholder=":البريد الإلكتروني"

              className="input-field"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="error">{formik.errors.email}</div>
            )}

            <input
              type="text"
              name="contact1"
              placeholder="رقم الجوال:"
              className="input-field"
              value={formik.values.contact1}
              onChange={formik.handleChange}
            />
            {formik.touched.contact1 && formik.errors.contact1 && (
              <div className="error">{formik.errors.contact1}</div>
            )}

            <input
              type="text"
              name="district"
              placeholder="اسم الحي:"
              className="input-field"
              value={formik.values.district}
              onChange={formik.handleChange}
            />
            {formik.touched.district && formik.errors.district && (
              <div className="error">{formik.errors.district}</div>
            )}

            <input
              type="text"
              name="nationality"
              placeholder="الجنسية:"
              className="input-field"
              value={formik.values.nationality}
              onChange={formik.handleChange}
            />
            {formik.touched.nationality && formik.errors.nationality && (
              <div className="error">{formik.errors.nationality}</div>
            )}

            <div style={passwordStyles.wrapper}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="كلمة المرور:"
                style={passwordStyles.input}
                className="input-field"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              <span
                style={passwordStyles.eye}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </span>
            </div>
            {formik.touched.password && formik.errors.password && (
              <div className="error">{formik.errors.password}</div>
            )}

            <div style={passwordStyles.wrapper}>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="تأكيد كلمة المرور:"
                style={passwordStyles.input}
                className="input-field"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
              />
              <span
                style={passwordStyles.eye}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
              </span>
            </div>
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
              <div className="error">{formik.errors.confirmPassword}</div>
            )}

            {/* Display email error if exists */}
            {emailError && <div className="error">{emailError}</div>}

            <button type="submit" className="submit-btn">
              التسجيل
            </button>
          </form>

          <p className="login-link">
            هل لديك حساب بالفعل؟{" "}
            <Link href="/login" className="link">تسجيل الدخول</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
