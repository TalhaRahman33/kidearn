"use client";

import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Checkbox,
  Paper,
} from "@mui/material";
import { AssignmentInd } from "@mui/icons-material";

const Step4Review = ({ formik }) => {
  return (
    <Card sx={{ mb: 3, borderRadius: 2, border: "none" }}>
      <CardContent sx={{ p: 4 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <AssignmentInd
            sx={{ mr: 1, ml: 1, color: "#53985b", fontSize: { xs: 22, sm: 28 } }}
          />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: "#53985b",
              fontSize: { xs: "0.9rem", sm: "1.25rem" },
            }}
          >
            معلومات إضافية والموافقة
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {/* Qurrah Eligibility */}
          <Grid item xs={12}>
            <Box sx={{ display: "flex", alignItems: "flex-start", width: "100%" }}>
              <Box
                sx={{ width: 40, flexShrink: 0, display: "flex", justifyContent: "center" }}
              >
                <Checkbox
                  name="isQurrahEligible"
                  checked={formik.values.isQurrahEligible}
                  onChange={formik.handleChange}
                  sx={{ "&.Mui-checked": { color: "#4CAF50" }, p: 0, m: 0 }}
                />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="body2" sx={{ fontWeight: 600, textAlign: "right" }}>
                  مؤهل لبرنامج قرة
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: "text.secondary", textAlign: "right", display: "block" }}
                >
                  حدّد هذا الخيار في حال الأهلية للاستفادة من برنامج قرة
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* PDPL Consent */}
          <Grid item xs={12}>
            <Paper
              variant="outlined"
              sx={{
                py: 2,
                px: 0,
                bgcolor: "#FFF8E1",
                borderColor: "#FFE082",
                borderRadius: 2,
                m: 0,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "flex-start", width: "100%" }}>
                <Box
                  sx={{ width: 40, flexShrink: 0, display: "flex", justifyContent: "center" }}
                >
                  <Checkbox
                    name="pdplConsent"
                    checked={formik.values.pdplConsent}
                    onChange={formik.handleChange}
                    sx={{ "&.Mui-checked": { color: "#4CAF50" }, p: 0, m: 0 }}
                  />
                </Box>
                <Box>
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 600, color: "#E65100", textAlign: "right" }}
                  >
                    الموافقة على نظام حماية البيانات الشخصية (PDPL)
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1, textAlign: "right" }}>
                    أقرّ بموجب هذا بأنني قد قرأت وفهمت ووافقت على الشروط والأحكام
                    المتعلقة بجمع ومعالجة وتخزين بياناتي الشخصية وفقًا لنظام حماية
                    البيانات الشخصية المعمول به في المملكة العربية السعودية (PDPL).
                    وأوافق على استخدام معلوماتي لأغراض التسجيل والتواصل.
                  </Typography>
                </Box>
              </Box>

              {formik.touched.pdplConsent && formik.errors.pdplConsent && (
                <Box sx={{ display: "flex", alignItems: "flex-start", width: "100%", mt: 1 }}>
                  <Box sx={{ width: 40, flexShrink: 0 }} />
                  <Typography
                    color="error"
                    variant="caption"
                    sx={{ flex: 1, textAlign: "right" }}
                  >
                    مطلوب الموافقة على نظام حماية البيانات الشخصية (PDPL)
                  </Typography>
                </Box>
              )}
            </Paper>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Step4Review;