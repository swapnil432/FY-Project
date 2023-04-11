import { Box, Button, Grid, IconButton, styled } from "@mui/material";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import React, { useContext, useEffect } from "react";
import MetaMaskLogin from "../MetaMaskLogin";
import { Context } from "@/Context";
import { useRouter } from "next/router";

const LoginPage = () => {
  const { state, dispatch } = useContext(Context);
  const { user } = state;
  const router = useRouter();
  useEffect(() => {
    if (user !== null) router.push("/");
  }, [user]);
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        height: "100%",
        width: "100vw",
        zIndex: 999999,
        backgroundColor: "#fff",
        padding: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "50% ",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Link href="/">
            <IconButton
              aria-label="Go Back"
              sx={{ position: "absolute", top: "4rem", left: "4rem" }}
            >
              <CloseIcon sx={{ fontSize: "2.5rem", color: "#000" }} />
            </IconButton>
          </Link>
          {/* <div onClick={() => Router.back()}>Go Back</div> */}
          <h2 style={{ marginBottom: "3.5rem" }}>Connect Wallet</h2>
          <Image
            style={{ marginBottom: "2.5rem" }}
            src={"/Master/metalogo.png"}
            width={150}
            height={150}
          />
          <MetaMaskLogin>Connect Your wallet</MetaMaskLogin>

          {/* <StyledButton variant="contained">
            Connect Your wallet
          </StyledButton> */}
        </div>
      </div>
      <div
        style={{
          position: "relative",
          width: "50% ",
          height: "100%",
        }}
      >
        <Image src={"/Master/login.jpg"} fill contain="true" />
      </div>
      {/* <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        style={{ width: "100% ", height: "100vh", margin: 0 }}
      >
        <Grid item xs={5}>
          <h3>Connect Wallet</h3>
        </Grid>
        <Grid item xs={7}>
          <Box
            sx={{
              position: "relative",
              width: "100% ",
              height: "100%",
            }}
          >
            <Image src={"/Master/login.jpg"} fill cover />
          </Box>
        </Grid>
      </Grid> */}
    </div>
  );
};

export default LoginPage;
