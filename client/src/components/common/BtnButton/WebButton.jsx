import { Box, Button, styled } from "@mui/material";
import React from "react";
const ButtonComponent = styled(Box)({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  textDecoration: "none",
  verticalAlign: "middle",
  cursor: "pointer",
  userSelect: "none",
  border: "1px solid black",
  borderRadius: "2rem",

  padding: `0 ${(props) => (props.size === "sm" ? "1.1rem" : "8rem")}`,
});
const WebButton = ({
  type,
  variant,
  className,
  id,
  size,
  onclick,
  children,
}) => {
  return (
    <ButtonComponent
      type={type ? type : "component"}
      variant={variant}
      className={className ? `btn-component ${className}` : "btn-component"}
      id={id}
      onclick={onclick}
      size={size}
    >
      {children}
    </ButtonComponent>
  );
};

export default WebButton;
