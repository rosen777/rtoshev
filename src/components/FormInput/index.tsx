import React from "react";
import { useField } from "formik";
import "./FormInput.css";

type InputProps = {
  placeholder: string;
  name: string;
  label?: string;
  type?: string;
};

export const FormInput = ({
  label,
  placeholder,
  name,
  type = "text",
  ...props
}: InputProps) => {
  const [field, meta] = useField(name);
  return (
    <div className="input-container">
      <div className="input-wrapper">
        <label className="label-text">{label}</label>
        <input className="input-field" type={type} {...field} {...props} />
      </div>
      {meta.touched && meta.error ? (
        <div className="error-wrapper" role="alert">
          <p className="error-text">{meta.error}</p>
        </div>
      ) : null}
    </div>
  );
};
