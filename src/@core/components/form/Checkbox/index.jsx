import React from "react";
import { Controller } from "react-hook-form";
import { Checkbox, BaseTextFieldProps } from "@mui/material";

// ** form handling lib
import { UseControllerProps } from "react-hook-form";

const FormCheckbox = ({ control, name }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Checkbox
          onChange={(e) => field.onChange(e.target.checked)}
          className="checkboxRemoveHover-bg"
        />
      )}
    />
  );
};

export default FormCheckbox;
