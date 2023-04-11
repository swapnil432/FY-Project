import React from "react";
import { createTheme, ThemeProvider } from "@mui/system";
import { styled, Button } from "@mui/material";

const customTheme = createTheme({
  components: {
    MyThemeComponent: {
      styleOverrides: {
        root: {
          background: "#3859F7",
          color: "white",
          borderRadius: "2rem",
          fontSize: "15px",
          textTransform: "capitalize",
          padding: "0.5rem 2rem ",
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          textDecoration: "none",
          verticalAlign: "middle",
          cursor: "pointer",
          userSelect: "none",
        },
        primary: {
          color: "white",
          border: "2px solid #3859F7",
        },
        secondary: {
          color: "#3859F7",
          backgroundColor: "transparent",
          border: "2px solid #3859F7",
        },
        success: {
          color: "#06AF87",
          backgroundColor: "#B9FFEE",
          border: "2px solid #B9FFEE",
        },
        warning: {
          color: "#E07E0B",
          backgroundColor: "#FFE2BF",
          border: "2px solid #FFE2BF",
        },
        dark: {
          color: "#fff",
          backgroundColor: "#000",
          border: "2px solid #000",
        },
        danger: {
          color: "#D9293E",
          backgroundColor: "#FFD4DA",
          border: "2px solid #FFD4DA",
        },
      },
      variants: [
        {
          props: { variant: "dashed", color: "primary" },
          style: {
            border: "1px dashed darkblue",
          },
        },
        {
          props: { variant: "dashed", color: "secondary" },
          style: {
            border: "1px dashed darkred",
          },
        },
      ],
    },
  },
});

const MyThemeComponent = styled("button", {
  shouldForwardProp: (prop) =>
    prop !== "color" && prop !== "variant" && prop !== "sx",
  name: "MyThemeComponent",
  slot: "Root",
  overridesResolver: (props, styles) => [
    styles.root,
    props.color === "primary" && styles.primary,
    props.color === "secondary" && styles.secondary,
    props.color === "dark" && styles.dark,
    props.color === "success" && styles.success,
    props.color === "warning" && styles.warning,
    props.color === "danger" && styles.danger,
  ],
})(({ theme }) => ({
  backgroundColor: "aliceblue",
  padding: theme.spacing(1),
}));

// export default function UsingOptions() {
//   return (
//     <ThemeProvider theme={customTheme}>
//       <MyThemeComponent sx={{ m: 1 }} color="primary" variant="dashed">
//         Primary
//       </MyThemeComponent>
//       <MyThemeComponent sx={{ m: 1 }} color="secondary">
//         Secondary
//       </MyThemeComponent>
//     </ThemeProvider>
//   );
// }
const BtnButton = ({ color, variant, children, fn }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <MyThemeComponent
        sx={{ m: 1 }}
        color={color}
        variant={variant}
        onClick={(e) => fn(e)}
      >
        {children}
      </MyThemeComponent>
    </ThemeProvider>
  );
};

export default BtnButton;
