"use client";

import React from "react";
import {
  Box,
  Typography,
  TextField,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import { LocationOn, Work } from "@mui/icons-material";

const Step3Address = ({ formik }) => {
  return (
    <>
      {/* Address Card */}
      <Card sx={{ mb: 3, borderRadius: 2, border: "none" }}>
        <CardContent sx={{ p: 4 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
            <LocationOn sx={{ ml: 1.5, color: "#53985b", fontSize: 28 }} />
            <Typography variant="h6" sx={{ fontWeight: 600, color: "text.primary" }}>
              معلومات العنوان
            </Typography>
          </Box>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                fullWidth
                label="المدينة *"
                name="city"
                size="small"
                value={formik.values.city}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.city && Boolean(formik.errors.city)}
                helperText={formik.touched.city && formik.errors.city}
                placeholder="أدخل المدينة"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <TextField
                fullWidth
                label="الحي *"
                name="district"
                size="small"
                value={formik.values.district}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.district && Boolean(formik.errors.district)}
                helperText={formik.touched.district && formik.errors.district}
                placeholder="أدخل الحي"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="العنوان الكامل *"
                name="address"
                rows={3}
                size="small"
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
                placeholder="أدخل العنوان الكامل مع تفاصيل المبنى والشارع والمنطقة"
                InputLabelProps={{ shrink: true }}
                multiline
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="العنوان المختصر (اختياري)"
                name="shortAddress"
                size="small"
                value={formik.values.shortAddress}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.shortAddress && Boolean(formik.errors.shortAddress)}
                helperText={formik.touched.shortAddress && formik.errors.shortAddress}
                placeholder="العنوان المختصر"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Employment Card */}
      <Card sx={{ mb: 3, borderRadius: 2, border: "none" }}>
        <CardContent sx={{ p: 4 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
            <Work sx={{ ml: 1.5, color: "#53985b", fontSize: 28 }} />
            <Typography variant="h6" sx={{ fontWeight: 600, color: "text.primary" }}>
              معلومات العمل
            </Typography>
          </Box>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="المسمّى الوظيفي"
                name="jobTitle"
                size="small"
                value={formik.values.jobTitle}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.jobTitle && Boolean(formik.errors.jobTitle)}
                helperText={formik.touched.jobTitle && formik.errors.jobTitle}
                placeholder="أدخل المسمّى الوظيفي الحالي"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="جهة العمل"
                name="workplace"
                size="small"
                value={formik.values.workplace}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.workplace && Boolean(formik.errors.workplace)}
                helperText={formik.touched.workplace && formik.errors.workplace}
                placeholder="أدخل اسم الشركة أو جهة العمل"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default Step3Address;