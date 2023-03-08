import React from "react";

const Input = ({
  type,
  label,
  placeholder,
  register,
  maxLength,
  errors,
  defaultValue,
  minLength,
  id,
  className,
}) => {
  return (
    <>
      <input
        type={type}
        id={id}
        className={className}
        placeholder={placeholder}
        {...register(label, {
          required: true,
          minLength: minLength ? minLength : null,
          maxLength: maxLength ? maxLength : null,
        })}
        defaultValue={defaultValue ? defaultValue : null}
      />

      {errors === "required" && (
        <span style={{ color: "red" }}>This Field Is Required</span>
      )}
      {errors === "maxLength" && (
        <p style={{ color: "red" }}>
          {placeholder} cannot exceed {maxLength} characters
        </p>
      )}
    </>
  );
};

export default Input;
