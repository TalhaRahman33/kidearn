"use client";

import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Typography,
  Button,
  Alert,
  CircularProgress,
  Container,
  Paper,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import Swal from "sweetalert2";
import Link from "next/link";

import Step1Personal from "./components/Step1Personal";
import Step2Contact from "./components/Step2Contact";
import Step3Address from "./components/Step3Address";
import Step4Review from "./components/Step4Review";

const CENTER_ID = 56; // Replace with your actual center ID

const steps = [
  "المعلومات الشخصية",
  "بيانات التواصل",
  "العنوان والعمل",
  "المراجعة والإرسال",
];

const REQUIRED_FIELDS_PER_STEP = {
  0: ["fullName", "relation", "gender", "dob", "nationality"],
  1: ["identificationType", "identificationNumber", "contact1", "email", "password", "confirmPassword"],
  2: ["city", "district", "address"],
  3: ["pdplConsent"],
};

const FIELD_LABELS = {
  fullName: "الاسم الكامل",
  relation: "صلة القرابة",
  gender: "الجنس",
  dob: "تاريخ الميلاد",
  nationality: "الجنسية",
  identificationType: "نوع الهوية",
  identificationNumber: "رقم الهوية",
  contact1: "رقم الاتصال الأساسي",
  email: "البريد الإلكتروني",
  password: "كلمة المرور",
  confirmPassword: "تأكيد كلمة المرور",
  city: "المدينة",
  district: "الحي",
  address: "العنوان الكامل",
  pdplConsent: "موافقة نظام حماية البيانات (PDPL)",
};

const validationSchema = Yup.object({
  fullName: Yup.string().required("الاسم الكامل مطلوب"),
  relation: Yup.string().required("صلة القرابة مطلوبة"),
  gender: Yup.string().required("الجنس مطلوب"),
  city: Yup.string().required("المدينة مطلوبة"),
  contact1: Yup.string()
    .required("رقم الاتصال الأساسي مطلوب")
    .test("is-saudi-mobile", "رقم الجوال يجب أن يكون 9 أرقام ويبدأ بـ 5", (value) => {
      if (!value) return false;
      return /^9665\d{8}$/.test(value);
    }),
  email: Yup.string().email("البريد الإلكتروني غير صالح").required("البريد الإلكتروني مطلوب"),
  identificationType: Yup.string().required("نوع الهوية مطلوب"),
  identificationNumber: Yup.string().required("رقم الهوية مطلوب"),
  dob: Yup.date().required("تاريخ الميلاد مطلوب"),
  password: Yup.string().min(8, "كلمة المرور يجب أن تكون 8 أحرف على الأقل").required("كلمة المرور مطلوبة"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "كلمتا المرور غير متطابقتين")
    .required("تأكيد كلمة المرور مطلوب"),
  address: Yup.string().required("العنوان الكامل مطلوب"),
  district: Yup.string().required("اسم الحي مطلوب"),
  nationality: Yup.string().required("الجنسية مطلوبة"),
  pdplConsent: Yup.boolean().oneOf([true], "مطلوب الموافقة على نظام حماية البيانات الشخصية (PDPL)"),
  contactPerson1: Yup.string(),
  contactPerson2: Yup.string(),
  contactPerson3: Yup.string(),
  contactName1: Yup.string(),
  contactName2: Yup.string(),
  contactName3: Yup.string(),
  contact2: Yup.string(),
  contact3: Yup.string(),
});

const initialValues = {
  centerId: CENTER_ID,
  relation: "",
  fullName: "",
  gender: "",
  dob: "",
  identificationType: "",
  identificationNumber: "",
  contact1: "",
  contact2: "",
  contact3: "",
  contactPerson1: "",
  contactPerson2: "",
  contactPerson3: "",
  contactName1: "",
  contactName2: "",
  contactName3: "",
  email: "",
  address: "",
  shortAddress: "",
  city: "",
  district: "",
  nationality: "",
  jobTitle: "",
  workplace: "",
  isActive: false,
  signUp: true,
  isQurrahEligible: false,
  password: "",
  confirmPassword: "",
  pdplConsent: false,
};

const showMissingFieldsSwal = (missingFields) => {
  Swal.fire({
    title: "الحقول المطلوبة",
    html: `
      <div style="text-align: right; direction: rtl;">
        <div style="text-align: center; margin-bottom: 20px;">
          <div style="display: inline-flex; align-items: center; justify-content: center; width: 60px; height: 60px; border-radius: 50%; background-color: #FFEAA7; border: 3px solid #FDCB6E; margin-bottom: 15px;">
            <span style="font-size: 28px; font-weight: bold; color: #E17055;">!</span>
          </div>
        </div>
        <p style="font-size: 16px; margin-bottom: 15px;"><strong>يرجى ملء جميع الحقول المطلوبة قبل المتابعة:</strong></p>
        <ul style="text-align: right; padding-right: 20px;">
          ${missingFields.map(f => `<li style="margin-bottom: 5px;">${FIELD_LABELS[f] || f}</li>`).join("")}
        </ul>
      </div>`,
    confirmButtonColor: "#00AFEF",
    confirmButtonText: "حسناً",
    width: 500,
  });
};

const showValidationErrorsSwal = (stepErrors, errors) => {
  Swal.fire({
    title: "تحقق من البيانات",
    html: `<div style="text-align: right; direction: rtl;"><ul>${stepErrors.map(f => `<li>${FIELD_LABELS[f] || f}: ${errors[f]}</li>`).join("")}</ul></div>`,
    icon: "error",
    confirmButtonColor: "#FF5722",
    confirmButtonText: "حسناً",
    width: 500,
  });
};

const GuardianForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [activeStep, setActiveStep] = useState(0);

  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnMount: true,
    onSubmit: async (values) => {
      setLoading(true);
      setError("");
      setSuccess(false);

      try {
        const response = await fetch("https://rawdhat.com/api/public/addGuardianByWebsite", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...values, centerId: CENTER_ID }),
        });

        const data = await response.json();

        if (response.ok) {
          setSuccess(true);
          formik.resetForm();

          Swal.fire({
            title: "تم التسجيل بنجاح!",
            html: `<div style="text-align: center;"><div style="font-size: 60px; color: #4CAF50;">✓</div><p>تم تسجيل وليّ الأمر بنجاح!</p><p>سيتم تحويلك إلى صفحة تسجيل الدخول...</p></div>`,
            icon: "success",
            confirmButtonText: "الانتقال إلى تسجيل الدخول",
          }).then(() => {
            window.location.href = "/login";
          });
        } else {
          throw new Error(data.message || "فشل في إضافة وليّ الأمر");
        }
      } catch (err) {
        setError(err.message);
        Swal.fire("خطأ", err.message, "error");
      } finally {
        setLoading(false);
      }
    },
  });

  const handleNext = async () => {
    const requiredFields = REQUIRED_FIELDS_PER_STEP[activeStep];
    const missingFields = requiredFields.filter(field => {
      const value = formik.values[field];
      return value === "" || value === null || value === undefined || value === false;
    });

    if (missingFields.length) {
      showMissingFieldsSwal(missingFields);
      return;
    }

    const errors = await formik.validateForm();
    const stepErrors = requiredFields.filter(field => errors[field]);
    if (stepErrors.length) {
      showValidationErrorsSwal(stepErrors, errors);
      return;
    }

    setActiveStep(prev => prev + 1);
  };

  const handleBack = () => setActiveStep(prev => prev - 1);

  // Clean up any leftover portal elements when step changes
  useEffect(() => {
    const portals = document.querySelectorAll('[role="presentation"]');
    portals.forEach(portal => portal.remove());
  }, [activeStep]);

  return (
  <Container maxWidth="lg" sx={{ py: 4 }}>
  <Paper
    elevation={0}
    sx={{
      borderRadius: 3,
      overflow: "hidden",
      border: "1px solid",
      borderColor: "divider",
      background: "linear-gradient(to bottom, #ffffff 0%, #fafafa 100%)",
    }}
  >
    {/* Header */}
    <Box
      sx={{
        background: "linear-gradient(135deg, #126c94 0%, #126c94 100%)",
        color: "white",
        p: 4,
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <Box
            component="img"
            src="/images/logo-dark.png"
            alt="شعار المركز"
            sx={{ width: 200, height: 120, objectFit: "contain", filter: "brightness(0) invert(1)" }}
          />
        </Box>
        <Typography variant="h3" sx={{ fontWeight: 700,color:"white", fontSize: { xs: "2rem", md: "2.5rem" } }}>
          تسجيل وليّ الأمر
        </Typography>
        <Typography variant="subtitle1" sx={{ opacity: 0.9,color:"white", mt: 1, fontSize: { xs: "1rem", md: "1.2rem" } }}>
          يرجى تعبئة النموذج أدناه للتسجيل كوليّ أمر. جميع الحقول المعلّمة بعلامة * مطلوبة.
        </Typography>
      </Box>
    </Box>

    {/* Stepper – updated colors */}
    <Box sx={{ px: 4, pt: 3 }} dir="ltr">
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel StepIconProps={{ sx: { "&.Mui-completed": { color: "#a8cf45" }, "&.Mui-active": { color: "#f25334" } } }}>
              <Typography variant="caption" sx={{ fontWeight: 600 }}>{label}</Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>

    {/* Form Body */}
    <Box sx={{ p: 4 }}>
      {success && (
        <Alert severity="success" sx={{ mb: 3, borderRadius: 2, bgcolor: "#f0f9e8", border: "1px solid #a8cf45" }} icon={<CheckCircle />}>
          تم تسجيل وليّ الأمر بنجاح! تم إرسال رسالة ترحيب عبر البريد الإلكتروني وواتساب.
        </Alert>
      )}
      {error && (
        <Alert severity="error" sx={{ mb: 3, borderRadius: 2, border: "1px solid #FFCDD2" }}>
          {error}
        </Alert>
      )}

      <form onSubmit={formik.handleSubmit}>
        {/* Force full remount on step change with unique key */}
        <div key={`step-${activeStep}`}>
          {activeStep === 0 && <Step1Personal formik={formik} />}
          {activeStep === 1 && <Step2Contact formik={formik} />}
          {activeStep === 2 && <Step3Address formik={formik} />}
          {activeStep === 3 && <Step4Review formik={formik} />}
        </div>

        {/* Navigation Buttons – updated brand colors */}
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4, flexDirection: { xs: "column", sm: "row" }, gap: { xs: 2, sm: 0 } }}>
          {activeStep > 0 && (
            <Button
              onClick={handleBack}
              sx={{ minWidth: { xs: "100%", sm: 120 }, fontWeight: 600, color: "#126c94", border: "2px solid #126c94", "&:hover": { backgroundColor: "rgba(18, 108, 148, 0.08)" } }}
            >
              رجوع
            </Button>
          )}
          {activeStep < steps.length - 1 ? (
            <Button
              variant="contained"
              onClick={handleNext}
              sx={{ minWidth: { xs: "100%", sm: 120 }, fontWeight: 600, background: "linear-gradient(135deg, #f25334 0%, #d94426 100%)" }}
            >
              التالي
            </Button>
          ) : (
            <Button
              type="submit"
              variant="contained"
              disabled={loading}
              sx={{ minWidth: { xs: "100%", sm: 180 }, fontWeight: 600, background: "linear-gradient(135deg, #f25334 0%, #d94426 100%)" }}
            >
              {loading ? <CircularProgress size={20} sx={{ mr: 1 }} /> : "إكمال التسجيل"}
            </Button>
          )}
        </Box>
      </form>
    </Box>

    <p style={{ textAlign: "center", margin: "20px auto", fontSize: "16px" }}>
      هل لديك حساب بالفعل؟{" "}
      <Link href="/login" style={{ color: "#126c94", fontWeight: 600, textDecoration: "none" }}>
        سجّل الدخول
      </Link>
    </p>
  </Paper>
</Container>
  );
};

export default GuardianForm;