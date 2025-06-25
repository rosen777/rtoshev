import Box from "@mui/material/Box";
import { darkTheme, lightTheme } from "src/styles/Theme";
import { useDarkMode } from "src/ThemeHandler";
import "./Input.css";

export enum InputType {
  Button = "button",
  Checkbox = "checkbox",
  Color = "color",
  Date = "date",
  Datetimelocal = "datetime-local",
  Email = "email",
  File = "file",
  Hidden = "hidden",
  Image = "image",
  Month = "month",
  Number = "number",
  Password = "password",
  Radio = "radio",
  Range = "range",
  Reset = "reset",
  Search = "search",
  Submit = "submit",
  Tel = "tel",
  Text = "text",
  Time = "time",
  Url = "url",
  Week = "week",
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  required: boolean;
  label?: string;
  type: InputType;
  name: string;
  isTextArea?: boolean;
}

export const Input = ({
  required = false,
  type = InputType.Text,
  name,
  label,
  isTextArea,
}: InputProps) => {
  const { darkMode } = useDarkMode();
  console.log(`name: ${name}`);

  return (
    <div>
      <label
        style={{
          color: darkMode
            ? darkTheme.palette.secondary.main
            : lightTheme.palette.secondary.main,
        }}
        htmlFor={name}>
        {label}
      </label>
      {isTextArea ? (
        <textarea
          className="textareaElement"
          id={name}
          name={name}
          rows={5}
          cols={33}
        />
      ) : (
        <input className="inputElement" id={name} name={name} />
      )}
    </div>
  );
};
