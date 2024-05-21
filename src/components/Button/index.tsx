import React from "react";
import MaterialUIButton from "@mui/material/Button";
import { styled } from "@mui/material/styles";
declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    action: true;
    accent: true;
  }
}

interface ButtonInterface
  extends React.ComponentProps<typeof MaterialUIButton> {
  variant?: "text" | "contained" | "outlined" | "accent" | "action";
  text?: string;
  onClick?: () => void;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  children?: React.ReactNode;
}

export const Button = ({
  variant = "contained",
  text,
  onClick,
  color = "primary",
  children,
  ...props
}: ButtonInterface) => {
  const CustomButton = styled(MaterialUIButton)({
    color: "primary",
  }) as typeof Button;
  return (
    <MaterialUIButton
      variant={variant}
      onClick={() => onClick && onClick()}
      color={color}
      {...props}>
      {text}
    </MaterialUIButton>
  );
};
