import { Container, Stack, Box, TextField, Button } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

const AdminLogin = () => {
  const router = useRouter();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const { email, password } = values;
  const handelchange = (text) => (e) => {
    setValues({ ...values, [text]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    axios({
      method: "POST",
      url: "/api/adminlogin/",
      data: values,
    })
      .then((response) => {
        // window.localStorage.setItem("token", response.data.token);
        console.log(response);
        window.localStorage.setItem(
          "token",
          JSON.stringify(response.data.token)
        );
        alert("Hello");
        router.push("/admin");
      })
      .catch((err) => {
        console.log(err);
        alert("something wrong");
      });
  };
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form onSubmit={handleSubmit}>
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
            onChange={handelchange("email")}
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
            onChange={handelchange("password")}
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
            Log In
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default AdminLogin;
