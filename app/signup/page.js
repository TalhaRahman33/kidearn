"use client";

import React, { useState } from "react";
import Swal from "sweetalert2"; // Import SweetAlert2
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from 'next/navigation';
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import { FiX ,FiUser, FiMail, FiGlobe, FiChevronDown,} from 'react-icons/fi';


const riyadhDistricts = [
  "حي المحمدية",
  "حي الرحمانية",
  "حي النخيل",
  "حي المعذر الجنوبي",
  "حي المصفى",
  "حي الورود",
  "حي الغدير",
  "حي العليا",
  "حي الملك فهد", "حي المروج", "حي الصحافة",
  "حي الربيع", "حي النرجس", "حي الياسمين", "حي العقيق", "حي حطين", "حي الملقا",
  "حي العارض", "حي لبن", "حي السويدي", "حي الشفا", "حي العزيزية", "حي الروابي",
  "حي النسيم", "حي الخليج", "حي النهضة", "حي الروضة", "حي السلي", "حي المنار",
  "حي الربوة", "حي الفيحاء", "حي الجزيرة", "حي الحمراء", "حي قرطبة", "حي اشبيلية",
  "حي الرمال", "حي المونسية", "حي طويق", "حي ظهرة لبن", "حي الدار البيضاء",
  "حي بدر", "حي الشفاء", "حي سلطانة", "حي العريجاء", "حي ظهرة نمار", "حي نمار",
  "حي المهدية", "حي العقيق", "حي الملقا", "حي الياسمين", "حي النرجس", "حي القيروان"
];

const arabicToEnglishDigits = (s = "") =>
  s.replace(/[\u0660-\u0669]/g, (d) => String(d.charCodeAt(0) - 0x0660));
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
    isQurrahEligible: Yup.boolean(),
  pdplConsent: Yup.number()
    .oneOf([1], "يجب الموافقة على قانون حماية البيانات الشخصية")
    .required("يجب الموافقة على قانون حماية البيانات الشخصية")
});
const inputIconStyles = {
  wrapper: {
    position: 'relative',
    width: '100%',
    marginBottom: '10px'
  },
  icon: {
    position: 'absolute',
    left: '10px',
    top: '42%',
    transform: 'translateY(-50%)',
    fontSize: '20px',
    color: '#888',
    userSelect: 'none',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    zIndex: 2
  },
  input: {
    paddingLeft: '38px',
    width: '100%'
  },
  dropdownIcon: {
    position: 'absolute',
    left: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '20px',
    color: '#888',
    pointerEvents: 'none',
    zIndex: 2
  }
};

const Signup = () => {
  const [emailError, setEmailError] = useState(""); // State for custom email error
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
   const [showPdplDialog, setShowPdplDialog] = useState(false);
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
         isQurrahEligible: false,
      pdplConsent: 0,
      centerId:56,
    },
    validationSchema: validationSchema,
  onSubmit: async (values) => {
      const payload = {
        ...values,
        contact1: `966${values.contact1}`,
        pdplConsent: values.pdplConsent ? 1 : 0
      };
      try {
        // const response = await fetch("https://backend.baytummi.sa/api/gardianregister", {
           const response = await fetch("https://rawdhat.com/api/public/gardianregister", {
          // const response = await fetch("http://localhost:5000/api/gardianregister", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
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
      top: '50%',
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
  
  const handlePhoneChange = (e) => {
    let v = e.target.value || "";
    v = arabicToEnglishDigits(v);
    v = v.replace(/\D/g, "");
    if (v.length > 0 && v[0] !== "5") v = "5" + v.slice(1);
    if (v.length > 9) v = v.slice(0, 9);
    formik.setFieldValue("contact1", v);
  };
const handlePdplCheckboxClick = (e) => {
    if (formik.values.pdplConsent === 1) {
      formik.setFieldValue("pdplConsent", 0);
    } else {
      setShowPdplDialog(true);
    }
  };

  const handleCloseDialog = () => {
    setShowPdplDialog(false);
  };

  const handleAgreeToTerms = () => {
    formik.setFieldValue("pdplConsent", 1);
    setShowPdplDialog(false);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseDialog();
    }
  };
  return (
   <div
      className="signup-container"
      style={{
        margin: '0',
        padding: '0'
      }}
    >
      <style jsx>{`
        .signup-container {
          margin: 0;
          padding: 0;
        }
        @media (min-width: 768px) {
          .signup-container {
            margin: 30px 0 !important;
          }
        }

        .dialog-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .dialog-box {
          background: #fff;
          border-radius: 12px;
          padding: 30px 40px;
          width: 95%;
          max-width: 600px;
          direction: rtl;
          text-align: center;
          box-shadow: 0 5px 25px rgba(0,0,0,0.2);
          position: relative;
        }

        .dialog-title {
          color: #f5864e;
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .dialog-text {
          color: #444;
          font-size: 15px;
          margin-bottom: 15px;
          line-height: 1.6;
        }

        .dialog-list {
          list-style: none;
          padding: 0;
          margin: 0 0 25px;
          color: #555;
          font-size: 14px;
          text-align: right;
          line-height: 1.8;
        }

        .dialog-btn {
          background-color: #28a745;
          color: white;
          border: none;
          padding: 12px 40px;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
          width: 100%;
        }

        .dialog-btn:hover {
          background-color: #218838;
        }

        .close-button {
          position: absolute;
          top: 15px;
          left: 15px;
          background: none;
          border: none;
          font-size: 20px;
          cursor: pointer;
          color: #666;
          padding: 5px;
          border-radius: 50%;
          transition: background 0.3s;
        }

        .close-button:hover {
          background: #f5f5f5;
        }
      `}</style>

   {/* PDPL Terms Dialog */}
{showPdplDialog && (
  <div className="dialog-backdrop" onClick={handleBackdropClick}>
    <div className="dialog-box">
      <button className="close-button" onClick={handleCloseDialog}>
        <FiX />
      </button>

      <h2 className="dialog-title">
        الموافقة على معالجة بياناتي الشخصية – نظام حماية البيانات (PDPL)
      </h2>

      <p className="dialog-text">
        نحن في بوابة روضات ملتزمون بحماية بياناتك الشخصية وفقًا لنظام حماية البيانات
        الشخصية (PDPL) في المملكة العربية السعودية.
      </p>

      <p className="dialog-text">
        هذه الموافقة ضرورية حتى نتمكن من تقديم وإدارة خدمات مراكز الحضانة من خلال
        بوابة إدارة المراكز.
      </p>

      <ul className="dialog-list">
        <li>
          - يتم جمع بياناتك الشخصية فقط لغرض إنشاء حساب مركزك وإدارة خدماته والتواصل
          معك.
        </li>
        <li>
          - لن تتم مشاركة بياناتك الشخصية مع أي جهة خارجية دون موافقتك الصريحة، إلا
          إذا تطلّب النظام السعودي ذلك.
        </li>
        <li>
          - يتم تخزين بياناتك الشخصية بشكل آمن وفق معايير الأمن في المملكة العربية
          السعودية.
        </li>
        <li>
          - لديك الحق في الوصول إلى بياناتك أو تعديلها أو حذفها في أي وقت.
        </li>
      </ul>

      <p className="dialog-text">
        بتسجيلك، فإنك تمنح الموافقة على معالجة بياناتي الشخصية كما هو موضح أعلاه.
      </p>

      <button className="dialog-btn" onClick={handleAgreeToTerms}>
        تم الفهم والموافقة
      </button>
    </div>
  </div>
)}
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
            {/* <input
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
            )} */}
 {/* Name with icon */}
            <div style={inputIconStyles.wrapper}>
              <input
                type="text"
                name="firstName"
                placeholder="الاسم كامل:"
                className="input-field"
                style={inputIconStyles.input}
                value={formik.values.firstName}
                onChange={formik.handleChange}
              />
              <span style={inputIconStyles.icon}><FiUser /></span>
            </div>
            {formik.touched.firstName && formik.errors.firstName && (
              <div className="error">{formik.errors.firstName}</div>
            )}

            {/* Email with icon */}
            <div style={inputIconStyles.wrapper}>
              <input
                type="email"
                name="email"
                placeholder=":البريد الإلكتروني"
                className="input-field"
                style={inputIconStyles.input}
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              <span style={inputIconStyles.icon}><FiMail /></span>
            </div>
            {formik.touched.email && formik.errors.email && (
              <div className="error">{formik.errors.email}</div>
            )}

            {/* Phone field */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                border: "1px solid #ddd",
                borderRadius: "8px",
                height: "38px",
                overflow: "hidden",
                marginBottom: "10px",
                background: "#fff",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  padding: "0 6px",
                  height: "100%",
                  background: "#f8f9fa",
                  borderRight: "1px solid #ccc",
                  fontWeight: 600,
                  color: "#1f2937",
                  minWidth: "90px",
                  boxSizing: "border-box"
                }}
              >
                <span style={{ fontWeight: 500, color: "#6b7280" }}>SA</span>
                +966
              </div>

              <input
                type="text"
                name="contact1"
                inputMode="numeric"
                placeholder="5xxxxxxxx"
                value={formik.values.contact1}
                onChange={handlePhoneChange}
                onBlur={formik.handleBlur}
                style={{
                  border: "none",
                  outline: "none",
                  background: "transparent",
                  fontSize: "1rem",
                  flex: 1,
                  padding: "0 12px",
                  height: "100%",
                  boxSizing: "border-box"
                }}
              />
            </div>

            <div style={{ textAlign: "right", color: "#6b7280", fontSize: "11px", marginTop: "-6px", marginBottom: "8px", direction: "rtl" }}>
              اكتب الأرقام فقط بعد +966 — يجب أن يبدأ بـ 5 ويتكوّن من 9 أرقام
            </div>

            {formik.touched.contact1 && formik.errors.contact1 && (
              <div className="error">{formik.errors.contact1}</div>
            )}

            {/* District select */}
            <div style={{ ...inputIconStyles.wrapper, marginBottom: '10px' }}>
              <select
                name="district"
                className="input-field"
                value={formik.values.district}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{
                  paddingTop: '6px',
                  paddingBottom: '6px',
                  height: '38px',
                  margin: 0,
                  borderRadius: '8px',
                  color: formik.values.district === '' ? '#6c757d' : 'inherit',
                  paddingLeft: '38px',
                  width: '100%',
                  appearance: 'none',
                  WebkitAppearance: 'none',
                  MozAppearance: 'none',
                  background: '#fff'
                }}
                required
              >
                <option value="" disabled hidden style={{ color: '#6c757d' }}>اختر اسم الحي</option>
                {riyadhDistricts.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <span style={inputIconStyles.dropdownIcon}><FiChevronDown /></span>
            </div>
            {formik.touched.district && formik.errors.district && (
              <div className="error">{formik.errors.district}</div>
            )}

            {/* Nationality with icon */}
            <div style={inputIconStyles.wrapper}>
              <input
                type="text"
                name="nationality"
                placeholder="الجنسية:"
                className="input-field"
                style={inputIconStyles.input}
                value={formik.values.nationality}
                onChange={formik.handleChange}
              />
              <span style={inputIconStyles.icon}><FiGlobe /></span>
            </div>
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
 {/* Qurrah Eligibility Checkbox */}
            <div
              className="checkbox-field"
              style={{
                margin: "5px 0",
                display: "flex",
                alignItems: "flex-start",
                direction: "rtl",
                justifyContent: "flex-end",
                textAlign: "right"
              }}
            >
              <label
                htmlFor="isQurrahEligible"
                style={{ fontSize: "15px", cursor: "pointer", marginLeft: "10px" ,color: "#1f1e1eff"}}
              >
                هل إنت مؤهّل لبرنامج قُرّة؟
                <br />
                <span style={{ color: "#555", fontSize: "11px" }}>
                  اختاري هالخيار بس إذا إنتِ أم سعودية عاملة ومؤهّلة لدعم برنامج قُرّة.
                </span>
              </label>
              <input
                type="checkbox"
                id="isQurrahEligible"
                name="isQurrahEligible"
                checked={formik.values.isQurrahEligible}
                onChange={formik.handleChange}
                style={{ width: "18px", height: "18px" }}
              />
            </div>

            {formik.touched.isQurrahEligible && formik.errors.isQurrahEligible && (
              <div className="error">{formik.errors.isQurrahEligible}</div>
            )}

            {/* PDPL Checkbox */}
            <div
              className="checkbox-field"
              style={{
                margin: "5px 0",
                display: "flex",
                alignItems: "flex-start",
                direction: "rtl",
                justifyContent: "flex-end",
                textAlign: "right"
              }}
            >
              <label
                htmlFor="pdplConsent"
                style={{ fontSize: "15px", cursor: "pointer", marginLeft: "10px",color: "#1f1e1eff" }}
              >
            منح الموافقة على معالجة بياناتي الشخصية وفقًا لنظام حماية البيانات (PDPL)
                {/* <br /> */}
                <span style={{ color: "#555", fontSize: "11px" }}>
                 {/* <br/> */}
                </span>
              </label>
              <input
                type="checkbox"
                id="pdplConsent"
                name="pdplConsent"
                checked={formik.values.pdplConsent === 1}
                onChange={handlePdplCheckboxClick}
                style={{ width: "18px", height: "18px" }}
              />
            </div>

            {formik.touched.pdplConsent && formik.errors.pdplConsent && (
              <div className="error">{formik.errors.pdplConsent}</div>
            )}

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
