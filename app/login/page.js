"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ExportedImage from "next-image-export-optimizer";
import { FiMail } from "react-icons/fi";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("البريد الإلكتروني غير صالح")
    .required("البريد الإلكتروني مطلوب"),
  password: Yup.string()
    .required("كلمة المرور مطلوبة")
    .min(8, "يجب أن تكون كلمة المرور على الأقل 8 أحرف"),
  remember: Yup.boolean(),
});

const eyeIconStyle = {
  position: "absolute",
  left: "10px",
  top: "50%",
  transform: "translateY(-50%)",
  cursor: "pointer",
  color: "#666",
  zIndex: 10,
  fontSize: "20px",
};

const inputIconStyles = {
  wrapper: {
    position: "relative",
    width: "100%",
    marginBottom: "10px",
  },
  icon: {
    position: "absolute",
    left: "10px",
    top: "42%",
    transform: "translateY(-50%)",
    fontSize: "20px",
    color: "#888",
    userSelect: "none",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    height: "100%",
    zIndex: 2,
  },
  input: {
    paddingLeft: "38px",
    width: "100%",
  },
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: true,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await fetch("https://rawdhat.com/api/auth/signin", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        const data = await response.json();

        if (response.ok) {
          const { code, centerId } = data;
          router.push(
            `https://rawdhat.com/signin/?code=${code}&centerId=${centerId}`
          );
        } else {
          // ✅ Inline error like the original — no Swal popup
          if (data.message === "Email not found") {
            formik.setFieldError(
              "email",
              "البريد الإلكتروني غير موجود. تحقق منه أو أنشئ حسابًا."
            );
            formik.setFieldTouched("email", true, false);
          } else {
            formik.setFieldError(
              "password",
              "البريد الإلكتروني أو كلمة المرور غير صحيحة"
            );
            formik.setFieldTouched("password", true, false);
          }
        }
      } catch (error) {
        console.error("Error during login:", error);
        formik.setFieldError("password", "حدث خطأ. يرجى المحاولة مرة أخرى.");
        formik.setFieldTouched("password", true, false);
      }
    },
  });

  return (
    <div className="login-container">
      <div className="left-side">
        <ExportedImage
          unoptimized="true"
          width={500}
          height={500}
          src="./images/bayt-login.png"
          alt="Login Illustration"
          className="signup-image"
        />
      </div>

      <div className="right-side">
        <div className="form-container">
          <div className="form-header">
            <ExportedImage
              unoptimized="true"
              width={100}
              height={100}
              src="./images/logo-dark.png"
              alt="Logo"
              className="signlogo"
            />
            {/* ✅ suppressHydrationWarning fixes the "Log in" vs "تسجيل الدخول" hydration mismatch */}
            <h4 className="py-3" suppressHydrationWarning>
              تسجيل الدخول
            </h4>
          </div>

          <form onSubmit={formik.handleSubmit}>
            {/* Email */}
            <div style={inputIconStyles.wrapper}>
              <input
                className="input-field"
                type="email"
                name="email"
                placeholder=":البريد الإلكتروني"
                style={inputIconStyles.input}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <span style={inputIconStyles.icon}>
                <FiMail />
              </span>
            </div>
            {formik.touched.email && formik.errors.email && (
              <div className="error-message">{formik.errors.email}</div>
            )}

            {/* Password */}
            <div style={{ ...inputIconStyles.wrapper, marginBottom: "4px" }}>
              <input
                className="input-field"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="كلمة المرور:"
                style={inputIconStyles.input}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <span
                style={eyeIconStyle}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {/* Password hint */}
            <p className="password-hint">
              يجب أن تكون كلمة المرور 8 أحرف على الأقل
            </p>
            {formik.touched.password && formik.errors.password && (
              <div className="error-message">{formik.errors.password}</div>
            )}

            <div className="checkbox-container">
              <input
                type="checkbox"
                name="remember"
                id="remember"
                checked={formik.values.remember}
                onChange={formik.handleChange}
                className="checkbox-input"
              />
              <label htmlFor="remember" className="checkbox-label">
                :تذكرني
              </label>
            </div>

            <button
              type="submit"
              className="submit-btn"
              onClick={() => {
                formik.setTouched({ email: true, password: true });
              }}
            >
              تسجيل الدخول
            </button>
          </form>

          <p className="register-link">
            هل لديك حساب بالفعل؟{" "}
            <Link href="/signup">إنشاء حساب</Link>
          </p>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          .form-container {
            margin-top: 3%;
            margin-bottom: 3%;
          }
        }

        .password-hint {
          font-size: 12px;
          color: #888;
          text-align: right;
          direction: rtl;
          margin: 0 2px 8px 0;
          line-height: 1.5;
        }

        .checkbox-container {
          display: flex;
          align-items: center;
          margin-top: 10px;
          margin-bottom: 20px;
          direction: rtl;
        }
        .checkbox-input {
          margin-left: 10px;
          width: 18px;
          height: 18px;
          cursor: pointer;
        }
        .checkbox-label {
          font-size: 14px;
          color: #333;
        }
        .checkbox-label:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default Login;