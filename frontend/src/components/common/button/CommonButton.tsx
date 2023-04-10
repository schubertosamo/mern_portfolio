import React from "react";
import Button from "@mui/material/Button";
import { SxProps, Theme } from "@mui/material";

type ButtonColor =
  | "inherit"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "error"
  | "info";

const CommonButton = ({
  children,
  color,
  disabled,
  size,
  sx,
  variant,
}: {
  children: React.ReactNode;
  color?: ButtonColor;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  sx?: SxProps<Theme> | undefined;
  variant?: "text" | "outlined" | "contained";
}) => {
  return (
    <Button
      color={color}
      disabled={disabled}
      size={size}
      variant={variant}
      sx={sx}
    >
      {children}
    </Button>
  );
};

export default CommonButton;
