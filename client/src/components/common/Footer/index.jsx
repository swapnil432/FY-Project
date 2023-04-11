import { AppBar, Container, styled, Box, Button, Stack } from "@mui/material";
import React from "react";
import mypic from "@/images/Logo/Vectorwhite.png";
import Image from "next/image";

const NavItem = styled(Button)({
  fontSize: "15px",
  marginRight: "2px",
  textTransform: "capitalize",
  color: "inherit",
});

const Footer = () => {
  return (
    <Box
      sx={{
        height: "10rem",
        backgroundColor: "#3859F7",
        color: "white",
        display: "flex",
        justifyContent: "center",
        marginTop: "2rem",
      }}
    >
      <Container>
        <Stack
          sx={{
            alignItems: "center",
            height: "100%",
            justifyContent: "center",
          }}
        >
          <Image src={mypic} alt="Logo" width="50" />
          <div>
            <NavItem>Home</NavItem>
            <NavItem>About</NavItem>
            <NavItem>Contact</NavItem>
          </div>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
