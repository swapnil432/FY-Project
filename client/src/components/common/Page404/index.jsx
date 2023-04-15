import { Button, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page404 = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <Image src={"/Master/404.jpg"} width={400} height={400} />
      <h4 style={{ marginBottom: "1rem" }}>Page Not Found</h4>
      <Button variant="contained">
        <Link href="/">Go Home</Link>
      </Button>
    </div>
  );
};

export default Page404;
