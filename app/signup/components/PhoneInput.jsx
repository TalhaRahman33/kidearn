"use client";

import React, { useEffect, useState } from "react";
import { Box, Typography, InputBase } from "@mui/material";

const PhoneInput = ({ name, label, required = false, formik }) => {
  const [localValue, setLocalValue] = useState("");
  const [borderColor, setBorderColor] = useState("divider");
  const [textColor, setTextColor] = useState("text.primary");

  const formikValue = formik.values[name];

  useEffect(() => {
    if (formikValue) {
      const val = formikValue.replace(/^966/, "");
      setLocalValue(val);
    } else {
      setLocalValue("");
    }
  }, [formikValue, name]);

  useEffect(() => {
    if (localValue === "") {
      setBorderColor("divider");
      setTextColor("text.primary");
    } else {
      const digitsOnly = localValue.replace(/\D/g, "");
      if (digitsOnly.length === 9 && digitsOnly.startsWith("5")) {
        setBorderColor("#4CAF50");
        setTextColor("#4CAF50");
      } else if (digitsOnly.length > 0 && digitsOnly.length < 9) {
        setBorderColor("#f44336");
        setTextColor("#f44336");
      } else if (digitsOnly.length > 9) {
        setBorderColor("#f44336");
        setTextColor("#f44336");
      } else {
        setBorderColor("divider");
        setTextColor("text.primary");
      }
    }
  }, [localValue]);

  const handleChange = (e) => {
    const raw = e.target.value.replace(/\D/g, "");
    const limited = raw.substring(0, 9);
    setLocalValue(limited);
    if (limited) {
      formik.setFieldValue(name, `966${limited}`);
    } else {
      formik.setFieldValue(name, "");
    }
  };

  const handleBlur = (e) => {
    let digits = e.target.value.replace(/\D/g, "");
    if (digits) {
      let corrected = digits.startsWith("5") ? digits : "5" + digits.replace(/^5*/, "");
      corrected = corrected.substring(0, 9);
      setLocalValue(corrected);
      formik.setFieldValue(name, `966${corrected}`);
    } else {
      formik.setFieldValue(name, "");
    }
    formik.handleBlur(e);
  };

  return (
    <Box>
      <Typography variant="caption" sx={{ color: "text.secondary", mb: 0.5, display: "block" }}>
        {label} {required && "*"}
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          border: "2px solid",
          borderColor: borderColor,
          borderRadius: 1,
          padding: "10px 14px",
          gap: 1.5,
          transition: "border-color 0.2s, box-shadow 0.2s",
          "&:hover": {
            borderColor: localValue.length === 9 && localValue.startsWith("5") ? "#4CAF50" : "#2196F3",
          },
          "&:focus-within": {
            borderColor: localValue.length === 9 && localValue.startsWith("5") ? "#4CAF50" : "#2196F3",
            boxShadow: localValue.length === 9 && localValue.startsWith("5")
              ? "0 0 0 3px rgba(76, 175, 80, 0.1)"
              : "0 0 0 3px rgba(33, 150, 243, 0.1)",
          },
          backgroundColor: localValue.length === 9 && localValue.startsWith("5")
            ? "rgba(76, 175, 80, 0.02)"
            : "transparent",
          flexDirection: "row-reverse",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            paddingRight: 1.5,
            borderRight: 1,
            borderColor: "divider",
            color: textColor,
            fontWeight: 600,
            minWidth: 70,
            textAlign: "left",
            direction: "ltr",
          }}
        >
          <Box sx={{ fontSize: "1.2rem" }}>🇸🇦</Box>
          <Typography variant="body2" sx={{ fontWeight: 600, color: textColor }}>
            +966
          </Typography>
        </Box>

        <InputBase
          id={name}
          name={name}
          type="tel"
          value={localValue}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="5xxxxxxxx"
          inputProps={{
            maxLength: 9,
            inputMode: "numeric",
          }}
          sx={{
            flex: 1,
            fontSize: "14px",
            fontFamily: "inherit",
            background: "transparent",
            color: textColor,
            caretColor: textColor === "#4CAF50" ? "#4CAF50" : "#2196F3",
            "& input": {
              textAlign: "left",
              padding: 0,
              color: textColor,
            },
          }}
        />
      </Box>

      {formik.touched[name] && formik.errors[name] ? (
        <Typography variant="caption" sx={{ color: "error.main", mt: 0.5, display: "block" }}>
          {formik.errors[name]}
        </Typography>
      ) : localValue.length > 0 && localValue.length < 9 ? (
        <Typography variant="caption" sx={{ color: "error.main", mt: 0.5, display: "block" }}>
          الرقم ناقص: {9 - localValue.length} أرقام
        </Typography>
      ) : localValue.length === 9 && localValue.startsWith("5") ? (
        <Typography variant="caption" sx={{ color: "success.main", mt: 0.5, display: "block" }}>
          ✓ رقم سعودي صحيح
        </Typography>
      ) : null}
    </Box>
  );
};

export default PhoneInput;