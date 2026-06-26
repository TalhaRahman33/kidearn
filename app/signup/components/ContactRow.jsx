"use client";

import { Box, Typography, TextField, Grid } from "@mui/material";
import PhoneInput from "./PhoneInput";
import KinshipSelect from "./KinshipSelect";

const ContactRow = ({
  kinshipName,
  nameName,
  phoneName,
  phoneLabel,
  phoneRequired = false,
  formik,
}) => (
  <>
    {/* Desktop */}
    <Grid
      container
      spacing={3}
      sx={{ mb: 3, alignItems: "flex-start", display: { xs: "none", sm: "flex" } }}
    >
      <Grid item xs={12} md={4}>
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <Box sx={{ width: "150px" }}>
            <Typography
              variant="caption"
              sx={{ color: "text.secondary", mb: 0.5, display: "block" }}
            >
              صلة القرابة
            </Typography>
            <KinshipSelect name={kinshipName} formik={formik} />
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12} md={4}>
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <Box sx={{ width: "150px" }}>
            <Typography
              variant="caption"
              sx={{ color: "text.secondary", mb: 0.5, display: "block" }}
            >
              اسم جهة الاتصال
            </Typography>
            <TextField
              fullWidth
              name={nameName}
              size="small"
              value={formik.values[nameName]}
              onChange={formik.handleChange}
              placeholder="مثال: أحمد"
              sx={{ "& .MuiOutlinedInput-root": { height: "45px" } }}
            />
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12} md={4}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Box
            sx={{
              width: "300px",
              "@media (max-width: 900px)": { width: "280px" },
            }}
          >
            <PhoneInput
              key={phoneName}  // ← unique key per phone input
              name={phoneName}
              label={phoneLabel}
              required={phoneRequired}
              formik={formik}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>

    {/* Mobile */}
    <Box sx={{ display: { xs: "block", sm: "none" }, mb: 3 }}>
      <Box
        sx={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 2, mb: 2 }}
      >
        <Box>
          <Typography
            variant="caption"
            sx={{ color: "text.secondary", mb: 0.5, display: "block" }}
          >
            صلة القرابة
          </Typography>
          <KinshipSelect name={kinshipName} formik={formik} />
        </Box>
        <Box>
          <Typography
            variant="caption"
            sx={{ color: "text.secondary", mb: 0.5, display: "block" }}
          >
            اسم جهة الاتصال
          </Typography>
          <TextField
            fullWidth
            name={nameName}
            size="small"
            value={formik.values[nameName]}
            onChange={formik.handleChange}
            placeholder="مثال: أحمد"
            sx={{ "& .MuiOutlinedInput-root": { height: "44px" } }}
          />
        </Box>
      </Box>
      <Box sx={{ width: "100%" }}>
        <PhoneInput
          key={phoneName}  // ← same unique key
          name={phoneName}
          label={phoneLabel}
          required={phoneRequired}
          formik={formik}
        />
      </Box>
    </Box>
  </>
);

export default ContactRow;