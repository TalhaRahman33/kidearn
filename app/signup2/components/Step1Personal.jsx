"use client";

import React from "react";
import {
  Box,
  Typography,
  TextField,
  Card,
  CardContent,
  MenuItem,
} from "@mui/material";
import { Person } from "@mui/icons-material";

const relationOptions = [
  { value: "Father", label: "الأب" },
  { value: "Mother", label: "الأم" },
  { value: "guardian", label: "وليّ الأمر" },
];

const genderOptions = [
  { value: "Male", label: "ذكر" },
  { value: "Female", label: "أنثى" },
];

const nationalityOptions = [
  "المملكة العربية السعودية",
  "الإمارات العربية المتحدة",
  "قطر",
  "الكويت",
  "البحرين",
  "عُمان",
  "مصر",
  "الأردن",
  "اليمن",
  "سوريا",
  "الفلبين",
  "باكستان",
  "الهند",
  "الولايات المتحدة الأمريكية",
  "المملكة المتحدة",
  "أخرى",
].map((n) => ({ value: n, label: n }));

const selectSx = {
  "& .MuiOutlinedInput-root": { height: "48px", width: "100%" },
  "& .MuiSelect-select": {
    height: "48px !important",
    minHeight: "48px !important",
    display: "flex",
    alignItems: "center",
    width: "100%",
    boxSizing: "border-box",
  },
  width: "100%",
  minWidth: "220px",
};

const fieldSx = {
  "& .MuiOutlinedInput-root": { height: "48px", width: "100%" },
  width: "100%",
  minWidth: "220px",
};

const Step1Personal = ({ formik }) => {
  return (
    <Card sx={{ mb: 3, borderRadius: 2, border: "none", overflow: "visible" }}>
      <CardContent sx={{ p: 4 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <Person sx={{ ml: 1.5, color: "#53985b", fontSize: { xs: 22, sm: 28 } }} />
          <Typography variant="h6" sx={{ fontWeight: 600, fontSize: { xs: "0.9rem", sm: "1.25rem" } }}>
            المعلومات الشخصية عن ولي الأمر
          </Typography>
        </Box>

        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }, gap: 3, width: "100%" }}>
          {/* Full Name field */}
          <Box><TextField fullWidth label="الاسم الكامل *" name="fullName" size="small" value={formik.values.fullName} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.fullName && Boolean(formik.errors.fullName)} helperText={formik.touched.fullName && formik.errors.fullName} sx={fieldSx} /></Box>

          {/* Relation Select - added disablePortal */}
          <Box>
            <TextField
              fullWidth select label="صلة القرابة *" name="relation" size="small"
              value={formik.values.relation} onChange={formik.handleChange} onBlur={formik.handleBlur}
              error={formik.touched.relation && Boolean(formik.errors.relation)} helperText={formik.touched.relation && formik.errors.relation}
              SelectProps={{
                MenuProps: { disablePortal: true },  // ← KEY FIX
                displayEmpty: true,
                renderValue: (selected) => !selected ? <span style={{ color: "#999" }}>اختر صلة القرابة</span> : relationOptions.find(o => o.value === selected)?.label,
              }}
              sx={selectSx}
            >
              <MenuItem value="" disabled>اختر صلة القرابة</MenuItem>
              {relationOptions.map(o => <MenuItem key={o.value} value={o.value}>{o.label}</MenuItem>)}
            </TextField>
          </Box>

          {/* Gender Select - added disablePortal */}
          <Box>
            <TextField
              fullWidth select label="الجنس *" name="gender" size="small"
              value={formik.values.gender} onChange={formik.handleChange} onBlur={formik.handleBlur}
              error={formik.touched.gender && Boolean(formik.errors.gender)} helperText={formik.touched.gender && formik.errors.gender}
              SelectProps={{
                MenuProps: { disablePortal: true },  // ← KEY FIX
                displayEmpty: true,
                renderValue: (selected) => !selected ? <span style={{ color: "#999" }}>اختر الجنس</span> : genderOptions.find(o => o.value === selected)?.label,
              }}
              sx={selectSx}
            >
              <MenuItem value="" disabled>اختر الجنس</MenuItem>
              {genderOptions.map(o => <MenuItem key={o.value} value={o.value}>{o.label}</MenuItem>)}
            </TextField>
          </Box>

          {/* Date of birth */}
          <Box><TextField fullWidth label="تاريخ الميلاد *" type="date" name="dob" size="small" value={formik.values.dob} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.dob && Boolean(formik.errors.dob)} helperText={formik.touched.dob && formik.errors.dob} InputLabelProps={{ shrink: true }} sx={fieldSx} /></Box>

          {/* Nationality Select - added disablePortal */}
          <Box>
            <TextField
              fullWidth select label="الجنسية *" name="nationality" size="small"
              value={formik.values.nationality} onChange={formik.handleChange} onBlur={formik.handleBlur}
              error={formik.touched.nationality && Boolean(formik.errors.nationality)} helperText={formik.touched.nationality && formik.errors.nationality}
              SelectProps={{
                MenuProps: { disablePortal: true },  // ← KEY FIX
                displayEmpty: true,
                renderValue: (selected) => !selected ? <span style={{ color: "#999" }}>اختر الجنسية</span> : selected,
              }}
              sx={selectSx}
            >
              <MenuItem value="" disabled>اختر الجنسية</MenuItem>
              {nationalityOptions.map(o => <MenuItem key={o.value} value={o.value}>{o.label}</MenuItem>)}
            </TextField>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Step1Personal;