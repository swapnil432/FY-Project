import { Container, Stack, Box, TextField, Button } from "@mui/material";
import Image from "next/image";
import React from "react";

const AdminLogin = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form>
        <Box
          sx={{
            mt: 1,
            width: "27rem",
            padding: "4rem 3rem",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            borderRadius: "10px",
          }}
        >
          <Stack sx={{ alignItems: "center", mb: 4 }}>
            <div
              style={{
                width: "3rem",
                height: "3rem",
                position: "relative",
              }}
            >
              <Image
                src={"/Master/logo.png"}
                alt="Logo"
                fill
                objectFit="contain"
              />
            </div>

            <h4>LogIn.</h4>
          </Stack>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default AdminLogin;
