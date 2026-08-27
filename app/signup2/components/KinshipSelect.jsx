"use client";

import { TextField, MenuItem } from "@mui/material";

const kinshipOptions = [
  { value: "personal", label: "شخصي" },
  { value: "father", label: "الأب" },
  { value: "mother", label: "الأم" },
  { value: "uncle", label: "العم/الخال" },
  { value: "aunt", label: "العمة/الخالة" },
  { value: "other", label: "أخرى" },
];

const KinshipSelect = ({ name, formik }) => (
  <TextField
    fullWidth
    select
    name={name}
    size="small"
    value={formik.values[name]}
    onChange={formik.handleChange}
    error={formik.touched[name] && Boolean(formik.errors[name])}
    helperText={formik.touched[name] && formik.errors[name]}
    SelectProps={{
      displayEmpty: true,
      renderValue: (selected) => {
        if (selected === "") return <span style={{ color: "#999" }}>اختر</span>;
        const item = kinshipOptions.find((i) => i.value === selected);
        return item ? item.label : selected;
      },
    }}
    sx={{ "& .MuiOutlinedInput-root": { height: "44px" } }}
  >
    <MenuItem value="">اختر</MenuItem>
    {kinshipOptions.map((o) => (
      <MenuItem key={o.value} value={o.value}>
        {o.label}
      </MenuItem>
    ))}
  </TextField>
);

export default KinshipSelect;