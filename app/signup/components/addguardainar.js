"use client";

import React, {
  useState,
  useRef,
  useLayoutEffect,
  useCallback,
  useEffect,
} from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

import {
  Alert,
  Autocomplete,
  Box,
  Button,
  Checkbox,
  Chip,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputLabel,
  InputAdornment,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  Card,
  CardContent,
  Paper,
  styled,
  Snackbar,
  Switch,
  
  Link,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import SaveIcon from "@mui/icons-material/Save";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeleteIcon from "@mui/icons-material/Delete";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import ImageIcon from "@mui/icons-material/Image";
import DescriptionIcon from "@mui/icons-material/Description";
import DownloadIcon from "@mui/icons-material/Download";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
const GUARDIAN_API_URL = "https://rawdhat.com/api/public/addGuardianByWebsite";

const createGuardian = async (payload) => {
  const response = await fetch(GUARDIAN_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Unable to create guardian right now. Please try again.");
  }

  return data;
};

/* -------------------------------------------------------------------------- */
/*  Shared SweetAlert helpers                                                 */
/* -------------------------------------------------------------------------- */
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 2800,
  timerProgressBar: true,
  didOpen: (el) => {
    el.addEventListener("mouseenter", Swal.stopTimer);
    el.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

const fireSuccess = ({ title, text, confirmText = "رائع!" }) =>
  Swal.fire({
    icon: "success",
    title,
    text,
    confirmButtonText: confirmText,
    confirmButtonColor: "#f25334",
    buttonsStyling: true,
    customClass: {
      popup: "rounded-swal-popup",
      confirmButton: "rounded-swal-btn",
    },
  });

const fireError = ({ title = "حدث خطأ ما", text }) =>
  Swal.fire({
    icon: "error",
    title,
    text,
    confirmButtonText: "حسنًا",
    confirmButtonColor: "#d32f2f",
  });

/* -------------------------------------------------------------------------- */
/*  Constants                                                                 */
/* -------------------------------------------------------------------------- */

const stepLabels = [
  { label: "المعلومات الشخصية", icon: 1 },
  { label: "معلومات الاتصال", icon: 2 },
  { label: "إعدادات أخرى", icon: 3 },
];

const phoneRegex = /^9665\d{8}$/;
const PHONE_FORMAT_MSG = "أدخل رقم سعودي صحيح (9665xxxxxxxx)";

const GlassSection = styled(Box)(() => ({
  background: "#fff",
  borderRadius: "16px",
  border: "1px solid #e0e0e0",
  padding: "24px",
  position: "relative",
  transition: "all 0.3s ease",
  marginBottom: "24px",
  direction: "rtl",
  textAlign: "right",
}));

const SectionHeader = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  marginBottom: "8px",
  paddingBottom: "6px",
  borderBottom: "1px solid #e0e0e0",
  direction: "rtl",
}));

const SectionNumber = styled(Box)(({ active }) => ({
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: active
    ? "#286c7e"
    : "rgba(40, 108, 126, 0.1)",
  color: active ? "#fff" : "#286c7e",
  fontWeight: 700,
  fontSize: "14px",
  flexShrink: 0,
}));

const SubSectionHeader = ({ title, color = "#286c7e" }) => (
  <Typography
    variant="subtitle1"
    sx={{ fontWeight: 600, color, mb: 1, textAlign: "right" }}
  >
    {title}
  </Typography>
);

const SubSectionContainer = ({ children, sx = {} }) => (
  <Box
    sx={{
      mb: 3,
      p: 2.5,
      bgcolor: "#f8f9fa",
      borderRadius: 1.5,
      border: "1px solid #e0e0e0",
      direction: "rtl",
      ...sx,
    }}
  >
    {children}
  </Box>
);

/* Required-field label helper -> keeps a consistent red asterisk everywhere */
const ReqLabel = ({ children, required }) => (
  <>
    {children}
    {required && <span style={{ color: "#d32f2f" }}> *</span>}
  </>
);

// Custom arrow component for RTL Select
const CustomSelectIcon = (props) => (
  <svg {...props} style={{ ...props.style, right: "auto", left: "7px" }}>
    <path d="M7 10l5 5 5-5z" />
  </svg>
);

const rtlSelectSx = {
  width: "100%",
  textAlign: "right",
  minWidth: 0,
  "& .MuiSelect-select": {
    paddingRight: "14px !important",
    paddingLeft: "32px !important",
    minHeight: "24px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    textAlign: "right",
  },
  "& .MuiSelect-icon": {
    right: "auto !important",
    left: "7px !important",
  },
};

const rtlMenuProps = {
  disableScrollLock: true,
  anchorOrigin: { vertical: "bottom", horizontal: "right" },
  transformOrigin: { vertical: "top", horizontal: "right" },
  PaperProps: {
    sx: {
      direction: "rtl",
      "& .MuiList-root": {
        direction: "rtl",
      },
      "& .MuiMenuItem-root": {
        direction: "rtl !important",
        justifyContent: "flex-end !important",
        textAlign: "right !important",
        width: "100% !important",
        display: "block !important",
      },
    },
  },
};

const rtlAutocompleteSx = {
  "& .MuiAutocomplete-endAdornment": {
    right: "auto !important",
    left: "7px !important",
  },
  "& .MuiAutocomplete-clearIndicator": {
    right: "auto !important",
    left: "32px !important",
  },
  "& .MuiAutocomplete-popupIndicator": {
    right: "auto !important",
    left: "7px !important",
  },
  "& .MuiAutocomplete-inputRoot": {
    paddingRight: "14px !important",
    paddingLeft: "60px !important",
  },
};

/* -------------------------------------------------------------------------- */
/*  Saudi phone input (shared)                                                */
/* -------------------------------------------------------------------------- */
const PhoneInput = React.memo(
  ({
    name,
    value,
    onChange,
    onBlur,
    placeholder,
    required,
    error,
    touched,
    label,
  }) => {
    const inputRef = useRef(null);
    const localValue = value ? value.replace(/^966/, "") : "";

    useLayoutEffect(() => {
      if (inputRef.current && document.activeElement === inputRef.current) {
        const length = inputRef.current.value.length;
        inputRef.current.setSelectionRange(length, length);
      }
    }, [localValue]);

    const handleChange = useCallback(
      (e) => {
        let val = e.target.value.replace(/\D/g, "");
        if (val.startsWith("966")) val = val.slice(3);
        if (val) {
          if (val.startsWith("5")) {
            onChange(`966${val}`);
          } else {
            onChange(`9665${val.replace(/^5*/, "")}`);
          }
        } else {
          onChange("");
        }
      },
      [onChange],
    );

    const handleBlur = useCallback(
      (e) => {
        let val = e.target.value.replace(/\D/g, "");
        if (val) {
          if (!val.startsWith("5")) val = "5" + val.replace(/^5*/, "");
          onChange(`966${val}`);
        }
        if (onBlur) onBlur(e);
      },
      [onChange, onBlur],
    );

    return (
      <Box sx={{ width: "100%", direction: "rtl" }}>
        <Typography
          variant="caption"
          sx={{
            color: "#666",
            mb: 0.5,
            display: "block",
            fontWeight: 500,
            fontSize: "0.75rem",
            textAlign: "right",
          }}
        >
          <ReqLabel required={required}>{label || "رقم الهاتف"}</ReqLabel>
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            borderBottom: "1px solid",
            borderColor: touched && error ? "#d32f2f" : "#e0e0e0",
            padding: "4px 0",
            gap: 1,
            direction: "ltr",
            "&:focus-within": { borderColor: "#f25334" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              paddingRight: 1,
              borderRight: "1px solid #e0e0e0",
              color: "#333",
              fontWeight: 600,
            }}
          >
            <span>🇸🇦</span>
            <span>+966</span>
          </Box>
          <input
            ref={inputRef}
            name={name}
            type="tel"
            maxLength="9"
            value={localValue}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={placeholder}
            style={{
              border: "none",
              outline: "none",
              flex: 1,
              fontSize: "14px",
              fontFamily: "inherit",
              background: "transparent",
              padding: "4px 0",
              minWidth: 0,
              textAlign: "left",
              direction: "ltr",
            }}
          />
        </Box>
        {touched && error && (
          <Typography
            variant="caption"
            sx={{
              color: "#d32f2f",
              mt: 0.5,
              display: "block",
              textAlign: "right",
            }}
          >
            {error}
          </Typography>
        )}
      </Box>
    );
  },
);
PhoneInput.displayName = "PhoneInput";

const cityOptions = [
  "الرياض",
  "جدة",
  "مكة المكرمة",
  "المدينة المنورة",
  "الدمام",
  "الخبر",
  "الظهران",
  "تبوك",
  "بريدة",
  "أبها",
  "خميس مشيط",
  "حائل",
  "جازان",
  "نجران",
  "الهفوف",
  "القصيم",
  "الجبيل",
  "ينبع",
  "الخفجي",
  "المجمعة",
  "الباحة",
  "سكاكا",
  "عرعر",
  "القريات",
  "أخرى",
];

const districtOptions = [
  "حي الربيع",
  "حي الندى",
  "حي الصحافة",
  "حي النرجس",
  "حي العارض",
  "حي النفل",
  "حي العقيق",
  "حي الوادي",
  "حي الغدير",
  "حي الياسمين",
  "حي الفلاح",
  "حي بنبان",
  "حي القيروان",
  "حي حطين",
  "حي الملقا",
  "حي الروضة",
  "حي الرمال",
  "حي المونسية",
  "حي قرطبة",
  "حي الجنادرية",
  "حي القادسية",
  "حي اليرموك",
  "حي غرناطة",
  "حي أشبيلية",
  "حي الحمراء",
  "حي المعيزلية",
  "حي الخليج",
  "حي الملك فيصل",
  "حي القدس",
  "حي النهضة",
  "حي الأندلس",
  "حي العليا",
  "حي السليمانية",
  "حي الملك عبد العزيز",
  "حي الملك عبد الله",
  "حي الورود",
  "حي صلاح الدين",
  "حي الملك فهد",
  "حي المرسلات",
  "حي النزهة",
  "حي المغرزات",
  "حي المروج",
  "حي المصيف",
  "حي التعاون",
  "حي الإزدهار",
  "حي المعذر",
  "حي المحمدية",
  "حي الرحمانية",
  "حي الرائد",
  "حي النخيل",
  "حي أم الحمام الشرقي",
  "حي أم الحمام الغربي",
  "حي السفارات",
  "حي المهدية",
  "حي عرقة",
  "حي ظهرة لبن",
  "حي الخزامى",
  "حي النسيم الشرقي",
  "حي النسيم الغربي",
  "حي السلام",
  "حي الريان",
  "حي الروابي",
  "حي النظيم",
  "حي المنار",
  "حي الندوة",
  "حي جرير",
  "حي الربوة",
  "حي الزهراء",
  "حي الصفا",
  "حي الضباط",
  "حي الملز",
  "حي الوزارات",
  "حي الفاروق",
  "حي العمل",
  "حي ثليم",
  "حي المربع",
  "حي الفوطة",
  "حي الرفيعة",
  "حي الهدا",
  "حي الشرقية",
  "حي الناصرية",
  "حي صياح",
  "حي الوشام",
  "حي النموذجية",
  "حي المؤتمرات",
  "حي البديعة",
  "حي أم سليم",
  "حي الشميسي",
  "حي الجرادية",
  "حي الفاخرية",
  "حي عليشة",
  "هجرة وادي لبن",
  "حي العريجاء",
  "حي العريجاء الوسطى",
  "حي العريجاء الغربية",
  "حي الدريهمية",
  "حي شبرا",
  "حي السويدي",
  "حي السويدي الغربي",
  "حي ظهرة البديعة",
  "حي سلطانة",
  "حي الزهرة",
  "حي ظهرة نمار",
  "حي ديراب",
  "حي نمار",
  "حي الحزم",
  "حي أحد",
  "حي عكاظ",
  "حي الشفاء",
  "حي المروة",
  "حي بدر",
  "حي المصانع",
  "حي المنصورية",
  "حي عريض",
  "حي العماجية",
  "حي خشم العان",
  "حي الدفاع",
  "حي المناخ",
  "حي السلي",
  "حي النور (الرياض)",
  "حي الإسكان",
  "حي الصناعية الجديدة",
  "حي الفيحاء",
  "حي الجزيرة",
  "حي السعادة",
  "حي هيت",
  "حي البرية",
  "حي المشاعل",
  "حي الدوبية",
  "حي القرى",
  "حي الصناعية",
  "حي الوسيطاء",
  "حي معكال",
  "حي الفيصلية",
  "حي منفوحة",
  "حي المنصورة",
  "حي اليمامة",
  "حي سلام",
  "حي جبرة",
  "حي عتيقة",
  "حي غبيراء",
  "حي البطيحا",
  "حي الخالدية",
  "حي الديرة",
  "حي العود",
  "حي المرقب",
  "حي منفوحة الجديدة",
  "حي العزيزية",
  "حي طيبة",
  "حي المصفاة",
  "حي الدار البيضاء",
  "حي الحاير",
  "حي الغنامية",
];

const nationalityOptions = [
  "السعودية",
  "الإمارات العربية المتحدة",
  "قطر",
  "الكويت",
  "البحرين",
  "عُمان",
  "مصر",
  "الأردن",
  "لبنان",
  "سوريا",
  "العراق",
  "اليمن",
  "فلسطين",
  "السودان",
  "الجزائر",
  "المغرب",
  "تونس",
  "ليبيا",
  "موريتانيا",
  "الصومال",
  "باكستان",
  "الهند",
  "بنغلاديش",
  "الفلبين",
  "إندونيسيا",
  "ماليزيا",
  "تركيا",
  "إيران",
  "أفغانستان",
  "أخرى",
];

const relationOptions = [
  { value: "Father", label: "الأب" },
  { value: "Mother", label: "الأم" },
  { value: "guardian", label: "ولي الأمر (أقارب آخرون)" },
];
const identificationOptions = [
  "الهوية الوطنية",
  "هوية المقيم",
  "جواز السفر",
  "أخرى",
];

/* -------------------------------------------------------------------------- */
/*  Yup validation schema                                                     */
/* -------------------------------------------------------------------------- */
const guardianValidationSchema = Yup.object().shape({
  relation: Yup.string().required("العلاقة بالطفل مطلوبة"),
  fullName: Yup.string().trim().required("الاسم الكامل مطلوب"),
  gender: Yup.string().required("الجنس مطلوب"),
  dob: Yup.string().nullable(),
  identificationType: Yup.string().required("نوع الهوية مطلوب"),
  identificationNumber: Yup.string().required("رقم الهوية مطلوب"),
  email: Yup.string()
    .trim()
    .email("أدخل عنوان بريد إلكتروني صالح")
    .required("البريد الإلكتروني مطلوب"),
  password: Yup.string()
    .min(8, "كلمة المرور يجب أن تكون 8 أحرف على الأقل")
    .required("كلمة المرور مطلوبة"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "كلمتا المرور غير متطابقتين")
    .required("تأكيد كلمة المرور مطلوب"),
  nationality: Yup.string().required("الجنسية مطلوبة"),
  accountPhoneNumber: Yup.string()
    .required("رقم هاتف الحساب مطلوب")
    .matches(phoneRegex, PHONE_FORMAT_MSG),
  address: Yup.string().trim().required("العنوان مطلوب"),
  shortAddress: Yup.string().max(8, "الحد الأقصى 8 أحرف"),
  city: Yup.string().required("المدينة مطلوبة"),
  district: Yup.string().when("city", {
    is: (city) => Boolean(city),
    then: (schema) => schema.required("الحي مطلوب"),
    otherwise: (schema) => schema.notRequired(),
  }),
  workplace: Yup.string(),
  jobTitle: Yup.string(),
  officeAddress: Yup.string(),
  officePhoneNo: Yup.string().test(
    "optional-phone-format",
    PHONE_FORMAT_MSG,
    (val) => !val || phoneRegex.test(val),
  ),
  contactName1: Yup.string().trim().required("اسم جهة الاتصال مطلوب"),
  contact1: Yup.string()
    .required("رقم الهاتف مطلوب")
    .matches(phoneRegex, PHONE_FORMAT_MSG),
  contactPerson1: Yup.string().required("العلاقة مطلوبة"),
  contactName2: Yup.string(),
  contact2: Yup.string().test(
    "optional-phone-format-2",
    PHONE_FORMAT_MSG,
    (val) => !val || phoneRegex.test(val),
  ),
  contactPerson2: Yup.string(),
  contactName3: Yup.string(),
  contact3: Yup.string().test(
    "optional-phone-format-3",
    PHONE_FORMAT_MSG,
    (val) => !val || phoneRegex.test(val),
  ),
  contactPerson3: Yup.string(),
  isActive: Yup.boolean(),
  signUp: Yup.boolean(),
  isQurrahEligible: Yup.mixed().when(["gender", "relation"], {
    is: (gender, relation) => gender === "Female" || relation === "Mother",
    then: (schema) => schema.required("يرجى تحديد أهلية قرّه").nullable(),
    otherwise: (schema) => schema.nullable(),
  }),
  isWorkingMother: Yup.boolean(),
  pdplConsent: Yup.boolean().oneOf([true], "يجب الموافقة على سياسة الخصوصية"),
});

const stepFieldMap = {
  0: [
    "relation",
    "fullName",
    "gender",
    "identificationType",
    "identificationNumber",
    "email",
    "password",
    "confirmPassword",
    "nationality",
    "accountPhoneNumber",
    "address",
    "city",
    "district",
  ],
  1: [
    "contactName1",
    "contact1",
    "contactPerson1",
    "officePhoneNo",
    "contact2",
    "contact3",
  ],
  2: ["pdplConsent", "isQurrahEligible"],
};

/* -------------------------------------------------------------------------- */
/*  Main component                                                            */
/* -------------------------------------------------------------------------- */
export default function AddGuardianPage({ centerId }) {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(0);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const [loading, setLoading] = useState(false);
  const [pdplDialogOpen, setPdplDialogOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [visibleContacts, setVisibleContacts] = useState(1);

  const formik = useFormik({
    initialValues: {
      centerId,
      relation: "",
      fullName: "",
      gender: "",
      dob: "",
      identificationType: "",
      identificationNumber: "",
      address: "",
      shortAddress: "",
      accountPhoneNumber: "",
      contact1: "",
      contactName1: "",
      contact2: "",
      contactName2: "",
      contact3: "",
      contactName3: "",
      contactPerson1: "",
      contactPerson2: "",
      contactPerson3: "",
      officeAddress: "",
      officePhoneNo: "",
      email: "",
      password: "",
      confirmPassword: "",
      nationality: "السعودية",
      city: "",
      district: "",
      jobTitle: "",
      workplace: "",
      isActive: true,
      signUp: false,
      isQurrahEligible: null,
      isWorkingMother: false,
      pdplConsent: false,
    },
    validationSchema: guardianValidationSchema,
    validateOnMount: false,
    onSubmit: async (values, { setSubmitting }) => {
      setLoading(true);
      try {
        const payload = {
          ...values,
          centerId,
          dob: values.dob || null,
          isQurrahEligible: values.isQurrahEligible,
          pdplConsent: Boolean(values.pdplConsent),
          isActive: Boolean(values.isActive),
          signUp: Boolean(values.signUp),
        };

        const response = await createGuardian(payload);

        if (
          response?.success ||
          response?.statusCode === 200 ||
          response?.statusCode === 201
        ) {
          formik.resetForm();
          setActiveStep(0);
          setPdplDialogOpen(false);

          await fireSuccess({
            title: "تم إنشاء ولي الأمر!",
            text: response?.message || "تم إنشاء ملف ولي الأمر بنجاح.",
          });

          router.push("/login");
        } else {
          fireError({
            title: "تعذر الحفظ",
            text:
              response?.message ||
              "تعذر إنشاء ولي الأمر حالياً. يرجى المحاولة مرة أخرى.",
          });
        }
      } catch (error) {
        fireError({
          title: "خطأ غير متوقع",
          text: error?.message || "حدث خطأ ما أثناء إنشاء ولي الأمر.",
        });
      } finally {
        setLoading(false);
        setSubmitting(false);
      }
    },
  });

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    setFieldValue,
    setFieldTouched,
    validateForm,
    handleSubmit,
  } = formik;

  const scrollToSection = (step) => {
    const sectionIds = [
      "section-personal",
      "section-contact",
      "section-account",
    ];
    const el = document.getElementById(sectionIds[step]);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleStepClick = async (step) => {
    setActiveStep(step);
    scrollToSection(step);
  };

  const goToStep = async (step) => {
    const allErrors = await validateForm();
    const fieldsForCurrentStep = stepFieldMap[activeStep] || [];
    const relevantErrors = fieldsForCurrentStep.filter((f) => allErrors[f]);

    if (relevantErrors.length > 0) {
      relevantErrors.forEach((f) => setFieldTouched(f, true, false));
      Toast.fire({
        icon: "warning",
        title: "يرجى إكمال الحقول المطلوبة أولاً",
      });
      return;
    }
    setActiveStep(step);
    scrollToSection(step);
  };

  const handleFinalSubmit = async () => {
    const allErrors = await validateForm();
    if (Object.keys(allErrors).length > 0) {
      // Touch every field so all errors show, then jump to the first invalid step
      Object.keys(allErrors).forEach((f) => setFieldTouched(f, true, false));
      const invalidStepEntry = Object.entries(stepFieldMap).find(([, fields]) =>
        fields.some((f) => allErrors[f]),
      );
      if (invalidStepEntry) {
        setActiveStep(Number(invalidStepEntry[0]));
        scrollToSection(Number(invalidStepEntry[0]));
      }
      Toast.fire({
        icon: "warning",
        title: "يرجى تصحيح الحقول المميزة",
      });
      return;
    }
    handleSubmit();
  };

  const isQurrahRequired =
    values.gender === "Female" || values.relation === "Mother";

  const handleAcceptPdpl = () => {
    setFieldValue("pdplConsent", true);
    setFieldTouched("pdplConsent", true, false);
    setPdplDialogOpen(false);
  };

  useEffect(() => {
    if (values.nationality === "السعودية") {
      if (values.identificationType !== "الهوية الوطنية")
        setFieldValue("identificationType", "الهوية الوطنية");
    } else if (
      !values.identificationType ||
      values.identificationType === "الهوية الوطنية"
    ) {
      setFieldValue("identificationType", "هوية المقيم");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values.nationality]);

  const err = (name) => touched[name] && Boolean(errors[name]);
  const helper = (name) => (touched[name] ? errors[name] : "");

  return (
    <Box
      sx={{
        p: { xs: 2, md: 3 },
        maxWidth: 1100,
        mx: "auto",
        minHeight: "100vh",
        direction: "rtl",
      }}
    >
      {/* Header */}
      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" },
          mb: 4,
          flexWrap: "wrap",
          gap: 2,
          direction: "rtl",
        }}
      >
        <Box sx={{ textAlign: "right" }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "#1a1a2e",
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2.125rem" },
            }}
          >
            <Box
              sx={{
                background: "#f25334",
                borderRadius: "14px",
                padding: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 16px rgba(14,87,72,0.2)",
              }}
            >
              <PersonAddAltIcon sx={{ color: "#fff", fontSize: 28 }} />
            </Box>
            إضافة ولي أمر
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 0.5, color: "#666", textAlign: "right" }}
          >
            املأ تفاصيل ولي الأمر أدناه. جميع الحقول المطلوبة مميزة بعلامة{" "}
            <span style={{ color: "#d32f2f", fontWeight: 600 }}>*</span>.
          </Typography>
        </Box>
        <Button
          variant="outlined"
          startIcon={<ArrowBackIcon style={{ marginLeft: "8px" }} />}
          onClick={() => router.push("/ar/admin/guardians")}
          sx={{
            textTransform: "none",
            borderRadius: "12px",
            borderColor: "rgba(0,0,0,0.08)",
            padding: "8px 20px",
            "&:hover": {
              borderColor: "#f25334",
              background: "rgba(83,152,91,0.08)",
            },
          }}
        >
          العودة إلى القائمة
        </Button>
      </Box> */}

      {/* Progress Indicators */}
      {/* <Box sx={{ mb: 4, direction: "rtl" }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          alignItems={{ xs: "flex-start", sm: "center" }}
          justifyContent="space-between"
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Chip
              icon={<PersonAddAltIcon style={{ marginRight: "16px" }} />}
              label={`الخطوة ${activeStep + 1} من ${stepLabels.length}`}
              color="primary"
              variant="filled"
              sx={{
                fontWeight: 600,
                borderRadius: "10px",
                background: "#f25334",
                color: "#fff",
                "& .MuiChip-icon": { color: "#fff" },
              }}
            />
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ display: { xs: "none", sm: "block" }, fontWeight: 500 }}
            >
              {stepLabels[activeStep].label}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            {[0, 1, 2].map((step) => (
              <Box
                key={step}
                sx={{
                  width: 60,
                  height: 4,
                  borderRadius: 4,
                  bgcolor:
                    step < activeStep
                      ? "#b7d056"
                      : step === activeStep
                        ? "#286c7e"
                        : "rgba(0,0,0,0.06)",
                  transition: "all 0.4s ease",
                  cursor: "pointer",
                  "&:hover": { opacity: 0.7, transform: "scaleY(1.5)" },
                  boxShadow:
                    step === activeStep
                      ? "0 2px 8px rgba(14,87,72,0.2)"
                      : "none",
                }}
                onClick={() => handleStepClick(step)}
              />
            ))}
          </Box>
        </Stack>
      </Box> */}

      {/* Desktop stepper */}
      <Box
        sx={{ mb: 4, display: { xs: "none", md: "block" }, direction: "rtl" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            position: "relative",
            padding: "0 20px",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 20,
              left: "8%",
              right: "8%",
              height: 2,
              bgcolor: "rgba(0,0,0,0.06)",
              zIndex: 0,
              borderRadius: 4,
            }}
          >
            <Box
              sx={{
                width: `${(activeStep / (stepLabels.length - 1)) * 100}%`,
                height: "100%",
                bgcolor: "#b7d056",
                transition: "width 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                borderRadius: 4,
              }}
            />
          </Box>
          {stepLabels.map((step, index) => {
            const isActive = index === activeStep;
            const isCompleted = index < activeStep;
            return (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 1,
                  zIndex: 1,
                  cursor: "pointer",
                }}
                onClick={() => handleStepClick(index)}
              >
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: isCompleted
                      ? "#b7d056"
                      : isActive
                        ? "#286c7e"
                        : "rgba(255,255,255,0.8)",
                    border: `2px solid ${isCompleted ? "#b7d056" : isActive ? "#286c7e" : "rgba(0,0,0,0.08)"}`,
                    color: isCompleted || isActive ? "#fff" : "#999",
                    fontWeight: 700,
                    fontSize: "1rem",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    boxShadow: isActive
                      ? "0 4px 20px rgba(40, 108, 126, 0.3)"
                      : isCompleted
                        ? "0 4px 16px rgba(22, 196, 127, 0.2)"
                        : "0 2px 8px rgba(0,0,0,0.04)",
                    "&:hover": { transform: "scale(1.05)" },
                  }}
                >
                  {isCompleted ? (
                    <CheckCircleIcon sx={{ fontSize: 22 }} />
                  ) : (
                    step.icon
                  )}
                </Box>
                <Typography
                  variant="caption"
                  sx={{
                    color: isActive
                      ? "#286c7e"
                      : isCompleted
                        ? "#b7d056"
                        : "#999",
                    fontWeight: isActive || isCompleted ? 600 : 400,
                    fontSize: "0.75rem",
                    letterSpacing: "0.3px",
                  }}
                >
                  {step.label}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>

      {/* Mobile step indicator */}
      <Box
        sx={{ display: { xs: "block", md: "none" }, mb: 3, direction: "rtl" }}
      >
        <Paper
          elevation={0}
          sx={{
            p: 2.5,
            borderRadius: "16px",
            background: "rgba(255, 255, 255, 0.7)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.3)",
            textAlign: "right",
          }}
        >
          <Typography
            variant="subtitle2"
            color="primary"
            sx={{ fontWeight: 600 }}
          >
            الخطوة {activeStep + 1}: {stepLabels[activeStep].label}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
            {activeStep === 0 &&
              "أدخل التفاصيل الشخصية لولي الأمر ومعلومات مكان العمل"}
            {activeStep === 1 && "تقديم معلومات الاتصال وتفاصيل العنوان"}
            {activeStep === 2 && "تكوين إعدادات الحساب والموافقة على الخصوصية"}
          </Typography>
        </Paper>
      </Box>

      {/* Form content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
          direction: "rtl",
        }}
      >
        {/* STEP 0 - PERSONAL INFO */}
        <GlassSection id="section-personal">
          <SectionHeader>
            <SectionNumber active={activeStep === 0 || activeStep > 0}>
              {activeStep > 0 ? (
                <CheckCircleIcon sx={{ fontSize: 18, color: "#b7d056" }} />
              ) : (
                1
              )}
            </SectionNumber>
            <Box sx={{ textAlign: "right" }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, color: "#1a1a2e" }}
              >
                المعلومات الشخصية
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "#666", fontWeight: 400 }}
              >
                الخطوة 1 من 3 - التفاصيل الشخصية لولي الأمر
              </Typography>
            </Box>
          </SectionHeader>

          <SubSectionContainer>
            <SubSectionHeader title="تفاصيل الحساب" />
            <Grid container spacing={3} alignItems="flex-end">
              <Grid item xs={12} md={6}>
                <TextField
                  variant="standard"
                  fullWidth
                  label={<ReqLabel required>البريد الإلكتروني</ReqLabel>}
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={err("email")}
                  helperText={helper("email")}
                  InputLabelProps={{
                    sx: {
                      right: 0,
                      left: "auto",
                      transformOrigin: "top right",
                    },
                  }}
                  FormHelperTextProps={{
                    sx: { textAlign: "right", marginRight: 0 },
                  }}
                  InputProps={{ sx: { textAlign: "right" } }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <PhoneInput
                  name="accountPhoneNumber"
                  value={values.accountPhoneNumber}
                  onChange={(val) => setFieldValue("accountPhoneNumber", val)}
                  onBlur={() => setFieldTouched("accountPhoneNumber", true)}
                  placeholder="5xxxxxxxx"
                  required
                  error={errors.accountPhoneNumber}
                  touched={touched.accountPhoneNumber}
                  label="رقم هاتف الحساب"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  variant="standard"
                  fullWidth
                  label={<ReqLabel required>كلمة المرور</ReqLabel>}
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={err("password")}
                  helperText={helper("password")}
                  InputLabelProps={{
                    sx: {
                      right: 0,
                      left: "auto",
                      transformOrigin: "top right",
                    },
                  }}
                  FormHelperTextProps={{
                    sx: { textAlign: "right", marginRight: 0 },
                  }}
                  InputProps={{
                    sx: { textAlign: "right", paddingLeft: "8px" },
                    endAdornment: (
                      <InputAdornment position="end" sx={{ ml: 0, mr: 1 }}>
                        <IconButton
                          aria-label={showPassword ? "إخفاء كلمة المرور" : "إظهار كلمة المرور"}
                          onClick={() => setShowPassword((visible) => !visible)}
                          edge="end"
                          size="small"
                        >
                          {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  variant="standard"
                  fullWidth
                  label={<ReqLabel required>تأكيد كلمة المرور</ReqLabel>}
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={err("confirmPassword")}
                  helperText={helper("confirmPassword")}
                  InputLabelProps={{
                    sx: {
                      right: 0,
                      left: "auto",
                      transformOrigin: "top right",
                    },
                  }}
                  FormHelperTextProps={{
                    sx: { textAlign: "right", marginRight: 0 },
                  }}
                  InputProps={{
                    sx: { textAlign: "right", paddingLeft: "8px" },
                    endAdornment: (
                      <InputAdornment position="end" sx={{ ml: 0, mr: 1 }}>
                        <IconButton
                          aria-label={showConfirmPassword ? "إخفاء تأكيد كلمة المرور" : "إظهار تأكيد كلمة المرور"}
                          onClick={() => setShowConfirmPassword((visible) => !visible)}
                          edge="end"
                          size="small"
                        >
                          {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
          </SubSectionContainer>

          <SubSectionContainer>
            <SubSectionHeader title="المعلومات الشخصية" />
            <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <FormControl
                variant="standard"
                fullWidth
                error={err("relation")}
              >
                <InputLabel
                  id="relationLabel"
                  sx={{
                    right: 0,
                    left: "auto",
                    transformOrigin: "top right",
                  }}
                >
                  العلاقة بالطفل *
                </InputLabel>
                <Select
                  labelId="relationLabel"
                  name="relation"
                  value={values.relation}
                  label="العلاقة بالطفل *"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  MenuProps={rtlMenuProps}
                  sx={rtlSelectSx}
                  IconComponent={CustomSelectIcon}
                >
                  {relationOptions.map((option) => (
                    <MenuItem
                      key={option.value}
                      value={option.value}
                      sx={{ justifyContent: "flex-end", textAlign: "right", width: "100%" }}
                    >
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
                  {err("relation") && (
                    <Typography
                      variant="caption"
                      color="error"
                      sx={{ mt: 0.5, display: "block", textAlign: "right" }}
                    >
                      {errors.relation}
                    </Typography>
                  )}
              </FormControl>
            </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  variant="standard"
                  fullWidth
                  label={<ReqLabel required>الاسم الكامل</ReqLabel>}
                  name="fullName"
                  value={values.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={err("fullName")}
                  helperText={helper("fullName")}
                  InputLabelProps={{
                    sx: {
                      right: 0,
                      left: "auto",
                      transformOrigin: "top right",
                    },
                  }}
                  FormHelperTextProps={{
                    sx: { textAlign: "right", marginRight: 0 },
                  }}
                  InputProps={{ sx: { textAlign: "right" } }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl variant="standard" fullWidth error={err("gender")}>
                  <InputLabel
                    id="genderLabel"
                    sx={{
                      right: 0,
                      left: "auto",
                      transformOrigin: "top right",
                    }}
                  >
                    الجنس *
                  </InputLabel>
                  <Select
                    labelId="genderLabel"
                    name="gender"
                    value={values.gender}
                    label="الجنس *"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    MenuProps={rtlMenuProps}
                    sx={rtlSelectSx}
                    IconComponent={CustomSelectIcon}
                  >
                    <MenuItem value="Male" sx={{ justifyContent: "flex-end", textAlign: "right", width: "100%" }}>
                      ذكر
                    </MenuItem>
                    <MenuItem
                      value="Female"
                      sx={{ justifyContent: "flex-end", textAlign: "right", width: "100%" }}
                    >
                      أنثى
                    </MenuItem>
                  </Select>
                  {err("gender") && (
                    <Typography
                      variant="caption"
                      color="error"
                      sx={{ mt: 0.5, display: "block", textAlign: "right" }}
                    >
                      {errors.gender}
                    </Typography>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  variant="standard"
                  fullWidth
                  label="تاريخ الميلاد"
                  name="dob"
                  type="date"
                  value={values.dob}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  InputLabelProps={{
                    shrink: true,
                    sx: {
                      right: 0,
                      left: "auto",
                      transformOrigin: "top right",
                    },
                  }}
                  InputProps={{
                    sx: {
                      textAlign: "right",
                      "& input": { direction: "ltr", textAlign: "right" },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl
                  variant="standard"
                  fullWidth
                  error={err("nationality")}
                >
                  <InputLabel
                    id="nationalityLabel"
                    sx={{
                      right: 0,
                      left: "auto",
                      transformOrigin: "top right",
                    }}
                  >
                    الجنسية *
                  </InputLabel>
                  <Select
                    labelId="nationalityLabel"
                    name="nationality"
                    value={values.nationality}
                    label="الجنسية *"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    MenuProps={rtlMenuProps}
                    sx={rtlSelectSx}
                    IconComponent={CustomSelectIcon}
                  >
                    {nationalityOptions.map((o) => (
                      <MenuItem
                        key={o}
                        value={o}
                        sx={{ justifyContent: "flex-end", textAlign: "right", width: "100%" }}
                      >
                        {o}
                      </MenuItem>
                    ))}
                  </Select>
                  {err("nationality") && (
                    <Typography
                      variant="caption"
                      color="error"
                      sx={{ mt: 0.5, display: "block", textAlign: "right" }}
                    >
                      {errors.nationality}
                    </Typography>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl
                  variant="standard"
                  fullWidth
                  error={err("identificationType")}
                >
                  <InputLabel
                    id="identificationTypeLabel"
                    sx={{
                      right: 0,
                      left: "auto",
                      transformOrigin: "top right",
                    }}
                  >
                    نوع الهوية *
                  </InputLabel>
                  <Select
                    labelId="identificationTypeLabel"
                    name="identificationType"
                    value={values.identificationType}
                    label="نوع الهوية *"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    MenuProps={rtlMenuProps}
                    sx={rtlSelectSx}
                    IconComponent={CustomSelectIcon}
                  >
                    {identificationOptions.map((o) => (
                      <MenuItem
                        key={o}
                        value={o}
                        sx={{ justifyContent: "flex-end", textAlign: "right", width: "100%" }}
                      >
                        {o}
                      </MenuItem>
                    ))}
                  </Select>
                  {err("identificationType") && (
                    <Typography
                      variant="caption"
                      color="error"
                      sx={{ mt: 0.5, display: "block", textAlign: "right" }}
                    >
                      {errors.identificationType}
                    </Typography>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  variant="standard"
                  fullWidth
                  label={<ReqLabel required>رقم الهوية</ReqLabel>}
                  name="identificationNumber"
                  value={values.identificationNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={err("identificationNumber")}
                  helperText={helper("identificationNumber")}
                  InputLabelProps={{
                    sx: {
                      right: 0,
                      left: "auto",
                      transformOrigin: "top right",
                    },
                  }}
                  FormHelperTextProps={{
                    sx: { textAlign: "right", marginRight: 0 },
                  }}
                  InputProps={{ sx: { textAlign: "right" } }}
                />
              </Grid>
            </Grid>
          </SubSectionContainer>

          <SubSectionContainer>
            <SubSectionHeader title="عنوان السكن الشخصي" />
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  variant="standard"
                  fullWidth
                  label="عنوان مختصر (حد أقصى 8 أحرف)"
                  name="shortAddress"
                  value={values.shortAddress}
                  onChange={(e) => {
                    if (e.target.value.length <= 8) handleChange(e);
                  }}
                  onBlur={handleBlur}
                  inputProps={{ maxLength: 8 }}
                  InputLabelProps={{
                    sx: {
                      right: 0,
                      left: "auto",
                      transformOrigin: "top right",
                    },
                  }}
                  InputProps={{ sx: { textAlign: "right" } }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  variant="standard"
                  fullWidth
                  label={<ReqLabel required>العنوان الكامل</ReqLabel>}
                  name="address"
                  value={values.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={err("address")}
                  helperText={helper("address")}
                  InputLabelProps={{
                    sx: {
                      right: 0,
                      left: "auto",
                      transformOrigin: "top right",
                    },
                  }}
                  FormHelperTextProps={{
                    sx: { textAlign: "right", marginRight: 0 },
                  }}
                  InputProps={{ sx: { textAlign: "right" } }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl variant="standard" fullWidth error={err("city")}>
                  <InputLabel
                    id="cityLabel"
                    sx={{
                      right: 0,
                      left: "auto",
                      transformOrigin: "top right",
                    }}
                  >
                    المدينة *
                  </InputLabel>
                  <Select
                    labelId="cityLabel"
                    name="city"
                    value={values.city}
                    label="المدينة *"
                    onChange={(e) => {
                      handleChange(e);
                      if (!e.target.value) setFieldValue("district", "");
                    }}
                    onBlur={handleBlur}
                    MenuProps={rtlMenuProps}
                    sx={rtlSelectSx}
                    IconComponent={CustomSelectIcon}
                  >
                    {cityOptions.map((c) => (
                      <MenuItem
                        key={c}
                        value={c}
                        sx={{ justifyContent: "flex-end", textAlign: "right", width: "100%" }}
                      >
                        {c}
                      </MenuItem>
                    ))}
                  </Select>
                  {err("city") && (
                    <Typography
                      variant="caption"
                      color="error"
                      sx={{ mt: 0.5, display: "block", textAlign: "right" }}
                    >
                      {errors.city}
                    </Typography>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <Autocomplete
                  freeSolo
                  options={districtOptions}
                  value={values.district || null}
                  inputValue={values.district || ""}
                  onChange={(_, newValue) =>
                    setFieldValue("district", newValue || "")
                  }
                  onInputChange={(_, newInputValue) =>
                    setFieldValue("district", newInputValue)
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="standard"
                      label={
                        values.city ? (
                          <ReqLabel required>الحي</ReqLabel>
                        ) : (
                          "الحي"
                        )
                      }
                      name="district"
                      error={err("district")}
                      helperText={helper("district")}
                      onBlur={handleBlur}
                      InputLabelProps={{
                        sx: {
                          right: 0,
                          left: "auto",
                          transformOrigin: "top right",
                        },
                      }}
                      FormHelperTextProps={{
                        sx: { textAlign: "right", marginRight: 0 },
                      }}
                      InputProps={{
                        ...params.InputProps,
                        sx: {
                          ...params.InputProps?.sx,
                          textAlign: "right",
                          "& .MuiAutocomplete-endAdornment": {
                            right: "auto !important",
                            left: "7px !important",
                          },
                          "& .MuiAutocomplete-clearIndicator": {
                            right: "auto !important",
                            left: "32px !important",
                          },
                          "& .MuiAutocomplete-popupIndicator": {
                            right: "auto !important",
                            left: "7px !important",
                          },
                        },
                      }}
                    />
                  )}
                  sx={{
                    width: "100%",
                    "& .MuiAutocomplete-endAdornment": {
                      right: "auto !important",
                      left: "7px !important",
                    },
                    "& .MuiAutocomplete-clearIndicator": {
                      right: "auto !important",
                      left: "32px !important",
                    },
                    "& .MuiAutocomplete-popupIndicator": {
                      right: "auto !important",
                      left: "7px !important",
                    },
                    "& .MuiAutocomplete-inputRoot": {
                      paddingRight: "14px !important",
                      paddingLeft: "60px !important",
                    },
                  }}
                  autoHighlight
                  openOnFocus
                  componentsProps={{
                    popper: {
                      placement: "bottom-end",
                    },
                  }}
                  slotProps={{
                    paper: {
                      sx: {
                        "& .MuiAutocomplete-option": {
                          justifyContent: "flex-end",
                          textAlign: "right",
                        },
                      },
                    },
                  }}
                />
              </Grid>
            </Grid>
          </SubSectionContainer>

          <SubSectionContainer sx={{ mb: 0 }}>
            <SubSectionHeader title="تفاصيل مكان العمل" />
            <Grid container spacing={3} alignItems="flex-end">
              <Grid item xs={12} md={6}>
                <TextField
                  variant="standard"
                  fullWidth
                  label="اسم مكان العمل"
                  name="workplace"
                  value={values.workplace}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  InputLabelProps={{
                    sx: {
                      right: 0,
                      left: "auto",
                      transformOrigin: "top right",
                    },
                  }}
                  InputProps={{ sx: { textAlign: "right" } }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  variant="standard"
                  fullWidth
                  label="المسمى الوظيفي"
                  name="jobTitle"
                  value={values.jobTitle}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  InputLabelProps={{
                    sx: {
                      right: 0,
                      left: "auto",
                      transformOrigin: "top right",
                    },
                  }}
                  InputProps={{ sx: { textAlign: "right" } }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <PhoneInput
                  name="officePhoneNo"
                  value={values.officePhoneNo}
                  onChange={(val) => setFieldValue("officePhoneNo", val)}
                  onBlur={() => setFieldTouched("officePhoneNo", true)}
                  placeholder="5xxxxxxxx"
                  required={false}
                  error={errors.officePhoneNo}
                  touched={touched.officePhoneNo}
                  label="رقم هاتف المكتب"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  variant="standard"
                  fullWidth
                  label="عنوان المكتب"
                  name="officeAddress"
                  value={values.officeAddress}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  InputLabelProps={{
                    sx: {
                      right: 0,
                      left: "auto",
                      transformOrigin: "top right",
                    },
                  }}
                  InputProps={{ sx: { textAlign: "right" } }}
                />
              </Grid>
            </Grid>
          </SubSectionContainer>

        </GlassSection>

        <GlassSection id="section-qurrah" sx={{ mb: 0 }}>
          <SubSectionContainer sx={{ mb: 0 }}>
            <SubSectionHeader title="برنامج دعم قرّه" />
            <FormControlLabel
              sx={{ m: 0, width: "100%", minHeight: 40 }}
              control={
                <Checkbox
                  checked={values.isQurrahEligible === true}
                  onChange={(event) => {
                    setFieldValue(
                      "isQurrahEligible",
                      event.target.checked ? true : false,
                    );
                    setFieldTouched("isQurrahEligible", true, false);
                  }}
                  sx={{
                    color: "#4CAF50",
                    p: 0.5,
                    "&.Mui-checked": { color: "#4CAF50" },
                  }}
                />
              }
              label={
                <Typography sx={{ fontWeight: 600, color: "#424242" }}>
                  <ReqLabel required={isQurrahRequired}>
                    مؤهل لبرنامج دعم قرّه
                  </ReqLabel>
                </Typography>
              }
            />
            {err("isQurrahEligible") && (
              <Typography
                color="error"
                variant="caption"
                sx={{ display: "block", textAlign: "right" }}
              >
                {errors.isQurrahEligible}
              </Typography>
            )}
            {isQurrahRequired && (
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{
                  display: "block",
                  fontStyle: "italic",
                  textAlign: "right",
                }}
              >
                * مطلوب للأمهات ووليات الأمر من الإناث
              </Typography>
            )}
            <Typography
              variant="body2"
              sx={{ mt: 1, color: "#424242", textAlign: "right" }}
            >
              هل أنتِ أم عاملة؟
            </Typography>
          </SubSectionContainer>
        </GlassSection>

        {/* STEP 1 - CONTACT INFORMATION */}
        <GlassSection id="section-contact">
          <SectionHeader>
            <SectionNumber active={activeStep === 1 || activeStep > 1}>
              {activeStep > 1 ? (
                <CheckCircleIcon sx={{ fontSize: 18, color: "#b7d056" }} />
              ) : (
                2
              )}
            </SectionNumber>
            <Box sx={{ textAlign: "right" }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, color: "#1a1a2e" }}
              >
                معلومات الاتصال
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "#666", fontWeight: 400 }}
              >
                الخطوة 2 من 3 - تفاصيل الاتصال الثانوية
              </Typography>
            </Box>
          </SectionHeader>

          <SubSectionContainer>
            <SubSectionHeader title="تفاصيل الاتصال الثانوية" />
            <Grid container spacing={3}>
              {Array.from({ length: visibleContacts }, (_, index) => index + 1).map((num) => {
                const isContact1 = num === 1;
                const hasErrors =
                  isContact1 &&
                  (err("contactName1") ||
                    err("contact1") ||
                    err("contactPerson1"));
                return (
                  <Grid item xs={12} md={4} key={num}>
                    <Card
                      sx={{
                        p: 2,
                        border: "1px solid #e0e0e0",
                        borderRadius: 2,
                        bgcolor: "#fff",
                        borderColor: hasErrors ? "#d32f2f" : "#e0e0e0",
                        direction: "rtl",
                        textAlign: "right",
                      }}
                    >
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontWeight: 600,
                          color: "#286c7e",
                          mb: 1.5,
                          textAlign: "right",
                        }}
                      >
                        <ReqLabel
                          required={isContact1}
                        >{`جهة الاتصال ${num}`}</ReqLabel>
                      </Typography>
                      <FormControl
                        variant="standard"
                        fullWidth
                        sx={{ mb: 1.5 }}
                        error={err(`contactPerson${num}`)}
                      >
                        <InputLabel
                          id={`contactPerson${num}Label`}
                          sx={{
                            right: 0,
                            left: "auto",
                            transformOrigin: "top right",
                          }}
                        >
                          علاقة الشخص
                        </InputLabel>
                        <Select
                          labelId={`contactPerson${num}Label`}
                          name={`contactPerson${num}`}
                          value={values[`contactPerson${num}`] || ""}
                          label="علاقة الشخص"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          MenuProps={{
                            disableScrollLock: true,
                            anchorOrigin: {
                              vertical: "bottom",
                              horizontal: "right",
                            },
                            transformOrigin: {
                              vertical: "top",
                              horizontal: "right",
                            },
                          }}
                          sx={rtlSelectSx}
                          IconComponent={CustomSelectIcon}
                        >
                          {[
                            "الأب",
                            "الأم",
                            "أخ",
                            "أخت",
                            "عم",
                            "خال",
                            "جد",
                            "جدة",
                            "أخرى",
                          ].map((r) => (
                            <MenuItem
                              key={r}
                              value={r}
                              sx={{ justifyContent: "flex-end", textAlign: "right", width: "100%" }}
                            >
                              {r}
                            </MenuItem>
                          ))}
                        </Select>
                        {err(`contactPerson${num}`) && (
                          <Typography
                            variant="caption"
                            color="error"
                            sx={{
                              mt: 0.5,
                              display: "block",
                              textAlign: "right",
                            }}
                          >
                            {errors[`contactPerson${num}`]}
                          </Typography>
                        )}
                      </FormControl>
                      <TextField
                        variant="standard"
                        fullWidth
                        label="اسم جهة الاتصال"
                        name={`contactName${num}`}
                        value={values[`contactName${num}`] || ""}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={err(`contactName${num}`)}
                        helperText={helper(`contactName${num}`)}
                        sx={{ mb: 1.5 }}
                        InputLabelProps={{
                          sx: {
                            right: 0,
                            left: "auto",
                            transformOrigin: "top right",
                          },
                        }}
                        FormHelperTextProps={{
                          sx: { textAlign: "right", marginRight: 0 },
                        }}
                        InputProps={{ sx: { textAlign: "right" } }}
                      />
                      <PhoneInput
                        name={`contact${num}`}
                        value={values[`contact${num}`]}
                        onChange={(val) => setFieldValue(`contact${num}`, val)}
                        onBlur={() => setFieldTouched(`contact${num}`, true)}
                        placeholder="5xxxxxxxx"
                        required={isContact1}
                        error={errors[`contact${num}`]}
                        touched={touched[`contact${num}`]}
                        label="رقم الهاتف"
                      />
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
            {visibleContacts < 3 && (
              <Button
                type="button"
                variant="outlined"
                startIcon={<AddIcon sx={{ ml: 1 }} />}
                onClick={() => setVisibleContacts((count) => Math.min(count + 1, 3))}
                sx={{
                  mt: 1,
                  borderColor: "#286c7e",
                  color: "#286c7e",
                  textTransform: "none",
                  borderRadius: 2,
                }}
              >
                إضافة جهة اتصال
              </Button>
            )}
          </SubSectionContainer>

        </GlassSection>

        {/* STEP 2 - CONSENTS */}
        <GlassSection
          id="section-account"
          sx={{ p: { xs: 2, md: 2 }, mb: 0 }}
        >
          <Grid container spacing={{ xs: 1, md: 2 }}>
            <Grid item xs={12}>
              <SubSectionContainer sx={{ mb: 0 }}>
                <SubSectionHeader title="الموافقة على الخصوصية" />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={values.pdplConsent}
                      onChange={(e) => {
                        if (e.target.checked) setPdplDialogOpen(true);
                        else {
                          setFieldValue("pdplConsent", false);
                          setFieldTouched("pdplConsent", true);
                        }
                      }}
                      name="pdplConsent"
                        sx={{
                          color: "#286c7e",
                          p: 0.5,
                          "&.Mui-checked": { color: "#f25334" },
                        }}
                    />
                  }
                  label={
                    <Typography>
                      أوافق على&nbsp;
                      <Link
                        component="button"
                        variant="body2"
                        onClick={(e) => {
                          e.preventDefault();
                          setPdplDialogOpen(true);
                        }}
                        sx={{ cursor: "pointer", fontWeight: 600 }}
                      >
                        سياسة الخصوصية (PDPL)
                      </Link>
                    </Typography>
                  }
                />
                {err("pdplConsent") && (
                  <Typography
                    variant="caption"
                    color="error"
                    sx={{ display: "block", textAlign: "right" }}
                  >
                    {errors.pdplConsent}
                  </Typography>
                )}
              </SubSectionContainer>
            </Grid>

          

            {/* <Grid item xs={12}>
              <Alert
                severity="info"
                sx={{
                  borderRadius: "14px",
                  background: "rgba(83,152,91,0.08)",
                  border: "1px solid rgba(83,152,91,0.18)",
                  textAlign: "right",
                }}
              >
                <Typography variant="body2">
                  <strong>جاهز للإنشاء؟</strong> راجع جميع المعلومات أعلاه قبل
                  الإرسال. جميع الحقول المطلوبة مميزة بعلامة{" "}
                  <span style={{ color: "#d32f2f", fontWeight: 600 }}>*</span>.
                </Typography>
              </Alert>
            </Grid> */}
          </Grid>
        </GlassSection>
      </Box>

      {/* Navigation */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 4,
          pt: 3,
          borderTop: "1px solid #e0e0e0",
          flexWrap: "wrap",
          gap: 2,
          direction: "rtl",
        }}
      >
       

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <Button
            variant="outlined"
            startIcon={<HomeIcon sx={{ marginLeft: "8px" }} />}
            onClick={() => router.push("/")}
            disabled={loading}
            sx={{
              textTransform: "none",
              borderRadius: "12px",
              px: 3,
              py: 1.5,
              minWidth: 170,
              borderColor: "#286c7e",
              color: "#286c7e",
              fontWeight: 600,
              "&:hover": {
                borderColor: "#f25334",
                backgroundColor: "rgba(83,152,91,0.08)",
              },
            }}
          >
            العودة للرئيسية
          </Button>
          <Button
            variant="contained"
            startIcon={
              loading ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                <SaveIcon style={{ marginLeft: "8px" }} />
              )
            }
            onClick={handleFinalSubmit}
            disabled={loading}
            sx={{
              textTransform: "none",
              borderRadius: "12px",
              px: 5,
              py: 1.5,
              minWidth: 200,
              background: "#f25334",
              boxShadow: "0 4px 16px rgba(40, 108, 126, 0.3)",
              "&:hover": {
                boxShadow: "0 6px 24px rgba(40, 108, 126, 0.4)",
                transform: "translateY(-2px)",
              },
              "&:active": { transform: "translateY(0)" },
              fontSize: "1rem",
              fontWeight: 600,
            }}
          >
            {loading ? "جارٍ الحفظ..." : "حفظ التغييرات"}
          </Button>

        
        </Box>
      </Box>

      {/* PDPL Dialog */}
      <Dialog
        open={pdplDialogOpen}
        onClose={() => setPdplDialogOpen(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: { maxHeight: "90vh", overflowY: "auto", borderRadius: "8px" },
        }}
      >
        <DialogTitle
          sx={{
            fontWeight: 700,
            fontSize: "1.3rem",
            bgcolor: "#f5f5f5",
            borderBottom: "2px solid #e0e0e0",
            pb: 2,
            textAlign: "right",
          }}
        >
          🔒 سياسة الخصوصية (PDPL)
        </DialogTitle>
        <DialogContent sx={{ pt: 3 }}>
          <Box
            sx={{
              my: 1.5,
              p: 1,
              bgcolor: "rgba(22, 196, 127, 0.08)",
              borderRadius: 1,
              borderRight: "4px solid #b7d056",
              textAlign: "right",
            }}
          >
            <Typography
              variant="body2"
              sx={{ lineHeight: 1.8, color: "#333", fontWeight: 500 }}
            >
              في <strong>روضات</strong>، نحن ملتزمون بحماية بياناتك الشخصية وفقًا
              لنظام حماية البيانات الشخصية السعودي (PDPL). هذه الموافقة مطلوبة
              حتى نتمكن من تقديم وإدارة خدمات الحضانة من خلال بوابة الإدارة.
            </Typography>
          </Box>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 700, color: "#333", mb: 1.5, textAlign: "right" }}
          >
            التزامات حماية البيانات:
          </Typography>
          <Box sx={{ pl: 1, my: 1, textAlign: "right" }}>
            <Box
              sx={{
                mb: 1,
                display: "flex",
                gap: 1.5,
                justifyContent: "flex-start",
              }}
            >
              <Typography sx={{ fontSize: "1.2rem", minWidth: "24px" }}>
                ✓
              </Typography>
              <Typography variant="body2">
                سنستخدم بياناتك الشخصية فقط لإدارة ولي الأمر والتواصل المتعلق
                بخدمات الحضانة الخاصة بطفلك.
              </Typography>
            </Box>
            <Box
              sx={{
                mb: 1,
                display: "flex",
                gap: 1.5,
                justifyContent: "flex-start",
              }}
            >
              <Typography sx={{ fontSize: "1.2rem", minWidth: "24px" }}>
                ✓
              </Typography>
              <Typography variant="body2">
                سيتم تخزين بياناتك بشكل آمن والتعامل معها وفقًا لمتطلبات نظام
                حماية البيانات الشخصية السعودي.
              </Typography>
            </Box>
            <Box
              sx={{
                mb: 1,
                display: "flex",
                gap: 1.5,
                justifyContent: "flex-start",
              }}
            >
              <Typography sx={{ fontSize: "1.2rem", minWidth: "24px" }}>
                ✓
              </Typography>
              <Typography variant="body2">
                يمكنك سحب الموافقة في أي وقت، وسنقوم بتحديث تفضيلاتك وفقًا لذلك.
              </Typography>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 3 }}>
          <Button onClick={() => setPdplDialogOpen(false)}>إلغاء</Button>
          <Button
            variant="contained"
            onClick={handleAcceptPdpl}
            sx={{ textTransform: "none" }}
          >
            قبول والمتابعة
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{
            width: "100%",
            borderRadius: "12px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
            textAlign: "right",
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
