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
import AddGuardianPage from "./components/addguardainar";


const CENTER_ID = 56;

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
            <span style="font-size: 28px; font-weight: bold; color: #126c94;">!</span>
          </div>
        </div>
        <p style="font-size: 16px; margin-bottom: 15px;"><strong>يرجى ملء جميع الحقول المطلوبة قبل المتابعة:</strong></p>
        <ul style="text-align: right; padding-right: 20px;">
          ${missingFields.map(f => `<li style="margin-bottom: 5px;">${FIELD_LABELS[f] || f}</li>`).join("")}
        </ul>
      </div>`,
    confirmButtonColor: "#126c94",
    confirmButtonText: "حسناً",
    width: 500,
  });
};

const showValidationErrorsSwal = (stepErrors, errors) => {
  Swal.fire({
    title: "تحقق من البيانات",
    html: `<div style="text-align: right; direction: rtl;"><ul>${stepErrors.map(f => `<li>${FIELD_LABELS[f] || f}: ${errors[f]}</li>`).join("")}</ul></div>`,
    icon: "error",
    confirmButtonColor: "#126c94",
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
            html: `<div style="text-align: center;"><div style="font-size: 60px; color: #126c94;">✓</div><p>تم تسجيل وليّ الأمر بنجاح!</p><p>سيتم تحويلك إلى صفحة تسجيل الدخول...</p></div>`,
            icon: "success",
            confirmButtonColor: "#126c94",
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

        <AddGuardianPage centerId={CENTER_ID} />
      </Paper>
    </Container>
  );
};

export default GuardianForm;