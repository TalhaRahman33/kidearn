"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Card,
  CardContent,
  MenuItem,
  InputAdornment,
  IconButton,
} from "@mui/material";
import {
  Fingerprint,
  ContactPhone,
  Email,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";

import PhoneInput from "./PhoneInput";
import KinshipSelect from "./KinshipSelect";
import ContactRow from "./ContactRow";

const identificationTypeOptions = [
  { value: "ID Card", label: "الهوية الوطنية" },
  { value: "Residence Permit", label: "إقامة" },
  { value: "Passport", label: "جواز السفر" },
  { value: "Other", label: "آخر" },
];

const Step2Contact = ({ formik }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <>
      {/* ── Identity Card ── */}
      <Card
        sx={{
          mb: 3,
          borderRadius: 2,
          border: "none",
          overflow: { xs: "hidden", sm: "visible" },
        }}
      >
        <CardContent
          sx={{
            p: { xs: 2, sm: 4 },
            "&.MuiCardContent-root:last-child": { pb: { xs: 2, sm: 4 } },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
            <Fingerprint sx={{ ml: 1.5, color: "#53985b", fontSize: 28 }} />
            <Typography variant="h6" sx={{ fontWeight: 600, color: "text.primary" }}>
              الهوية
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr", md: "repeat(3, 1fr)" },
              gap: { xs: 2, sm: 3 },
              width: "100%",
            }}
          >
            <Box sx={{ width: "100%" }}>
              <TextField
                fullWidth
                select
                label="نوع الهوية"
                name="identificationType"
                size="small"
                value={formik.values.identificationType}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.identificationType &&
                  Boolean(formik.errors.identificationType)
                }
                helperText={
                  formik.touched.identificationType &&
                  formik.errors.identificationType
                }
                InputLabelProps={{ shrink: true }}
                SelectProps={{
                  MenuProps: { disablePortal: true },
                  displayEmpty: true,
                  renderValue: (selected) => {
                    if (!selected)
                      return (
                        <span style={{ color: "#999", width: "100%", display: "block" }}>
                          اختر نوع الهوية
                        </span>
                      );
                    const option = identificationTypeOptions.find(
                      (o) => o.value === selected
                    );
                    return (
                      <span style={{ width: "100%", display: "block" }}>
                        {option ? option.label : selected}
                      </span>
                    );
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": { height: { xs: "44px", sm: "48px" } },
                  width: "100%",
                }}
              >
                <MenuItem value="" disabled>اختر نوع الهوية</MenuItem>
                {identificationTypeOptions.map((o) => (
                  <MenuItem key={o.value} value={o.value}>{o.label}</MenuItem>
                ))}
              </TextField>
            </Box>

            <Box sx={{ width: "100%" }}>
              <TextField
                fullWidth
                label="رقم الهوية *"
                name="identificationNumber"
                size="small"
                value={formik.values.identificationNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.identificationNumber &&
                  Boolean(formik.errors.identificationNumber)
                }
                helperText={
                  formik.touched.identificationNumber &&
                  formik.errors.identificationNumber
                }
                placeholder="أدخل رقم الهوية"
                InputLabelProps={{ shrink: true }}
                sx={{ "& .MuiOutlinedInput-root": { height: { xs: "44px", sm: "48px" } } }}
              />
            </Box>

            <Box sx={{ width: "100%" }}>
              <TextField
                fullWidth
                label="البريد الإلكتروني *"
                name="email"
                type="email"
                size="small"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                placeholder="example@email.com"
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  startAdornment: (
                    <Email sx={{ color: "action.active", mr: 1 }} fontSize="small" />
                  ),
                }}
                sx={{ "& .MuiOutlinedInput-root": { height: { xs: "44px", sm: "48px" } } }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
              gap: { xs: 2, sm: 3 },
              mt: { xs: 2, sm: 3 },
            }}
          >
            <Box>
              <TextField
                fullWidth
                label="كلمة المرور *"
                name="password"
                type={showPassword ? "text" : "password"}
                size="small"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
                placeholder="أدخل كلمة المرور"
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword((s) => !s)}
                        edge="end"
                        size="small"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{ "& .MuiOutlinedInput-root": { height: { xs: "44px", sm: "48px" } } }}
              />
            </Box>
            <Box>
              <TextField
                fullWidth
                label="تأكيد كلمة المرور *"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                size="small"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.confirmPassword &&
                  Boolean(formik.errors.confirmPassword)
                }
                helperText={
                  formik.touched.confirmPassword && formik.errors.confirmPassword
                }
                placeholder="أعد إدخال كلمة المرور"
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowConfirmPassword((s) => !s)}
                        edge="end"
                        size="small"
                      >
                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{ "& .MuiOutlinedInput-root": { height: { xs: "44px", sm: "48px" } } }}
              />
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* ── Emergency Contacts ── */}
      <Card sx={{ mb: 3, borderRadius: 2, border: "none" }}>
        <CardContent sx={{ p: { xs: 2, sm: 4 } }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
            <ContactPhone sx={{ ml: 1.5, color: "#53985b", fontSize: { xs: 22, sm: 28 } }} />
            <Typography variant="h6" sx={{ fontWeight: 600, fontSize: { xs: "0.9rem", sm: "1.25rem" } }}>
              معلومات للتواصل عند الطواريء
            </Typography>
          </Box>

          <ContactRow
            kinshipName="contactPerson1"
            nameName="contactName1"
            phoneName="contact1"
            phoneLabel="رقم الاتصال الأساسي"
            phoneRequired
            formik={formik}
          />
          <ContactRow
            kinshipName="contactPerson2"
            nameName="contactName2"
            phoneName="contact2"
            phoneLabel="رقم اتصال إضافي"
            formik={formik}
          />
          <ContactRow
            kinshipName="contactPerson3"
            nameName="contactName3"
            phoneName="contact3"
            phoneLabel="رقم الطوارئ"
            formik={formik}
          />
        </CardContent>
      </Card>
    </>
  );
};

export default Step2Contact;