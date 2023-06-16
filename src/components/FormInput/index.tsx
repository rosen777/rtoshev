import React from "react";
import { useField } from "formik";
import "./FormInput.css";

type InputProps = {
  placeholder: string;
  name: string;
  label?: string;
  type?: string;
  multiline?: boolean;
  rows?: number;
  cols?: number;
};

export const FormInput = ({
  label,
  placeholder,
  name,
  type = "text",
  multiline,
  rows = 5,
  cols = 33,
  ...props
}: InputProps) => {
  const [field, meta] = useField(name);
  return (
    <div className="input-container">
      <div className="input-wrapper">
        <label className="label-text">{label}</label>
        {multiline ? (
          <textarea
            name={name}
            className="input-field"
            rows={rows}
            cols={cols}
          />
        ) : (
          <input className="input-field" type={type} {...field} {...props} />
        )}
      </div>
      {meta.touched && meta.error ? (
        <div className="error-wrapper" role="alert">
          <p className="error-text">{meta.error}</p>
        </div>
      ) : null}
    </div>
  );
};
