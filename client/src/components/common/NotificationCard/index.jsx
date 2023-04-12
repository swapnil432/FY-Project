import { Box, Button, Container, Typography, styled } from "@mui/material";
import React, { useEffect, useState } from "react";

const Wrapper = styled(Box)({
  minHeight: "80vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const Card = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  border: "5px solid black",
  borderRadius: "16px",
  padding: "32px 0",
  width:"80%"
});

const Status = styled(Typography)({
  fontSize: "50px",
  fontWeight: 700,
  fontFamily: "Playfair Display",
  textAlign: "center",
});

const Text = styled(Typography)({
  fontSize: "28px",
  fontWeight: 400,
  fontFamily: "Work Sans",
  margin: "16px 32px",
  textAlign: "center",
});

const Btn = styled(Button)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "16px",
  padding: "10px 20px",
  minWidth:"200px",
  margin: "0 16px",
  borderRadius: "24px",
  fontStyle:"Work Sans",
  textTransform:"none",
  fontWeight:"600",
  ":hover":{
    backgroundColor:"black"
  }


});

const BtnWrapper = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  margin:"20px 0 10px 0"
});

const NotificationCard = ({ type, status }) => {
  const [style, setStyle] = useState({});
  useEffect(() => {
    if (type === "offer") {
      switch (status) {
        case "success": {
          let newStyle = {
            mainColor: "#06AF87",
            mainBtn: "#06AF87",
            secBtn: "#D9293E",
            status: "Offer Approved",
            text: "The seller has signed the sale deed proceed to payment to buy the property.",
            btn1Text:"Make Payment",
            btn2Text:"Reject"
          };
          setStyle(newStyle);
          break;
        }
        case "fail": {
          let newStyle = {
            mainColor: "#D9293E",
            mainBtn: "#06AF87",
            secBtn: "#D9293E",
            status: "Offer Rejected",
            text: "The seller did not sign the sale deed and agree on your offer.",
            btn1Text:"Make New Offer",
            btn2Text:"Go back"
          };
          setStyle(newStyle);
          break;
        }
      }
    }
    if (type === "account") {
        switch (status) {
          case "success": {
            let newStyle = {
              mainColor: "#06AF87",
              mainBtn: "primary",
              secBtn: "#06AF87",
              status: "Account Verified",
              text: "Your account has been verified you can proceed and upload property Documents and sell property ",
              btn1Text:"Home",
              btn2Text:"Upload Property",
            };
            setStyle(newStyle);
            break;
          }
          case "fail": {
            let newStyle = {
              mainColor: "#D9293E",
              mainBtn: "#D9293E",
              secBtn: "#06AF87",
              status: "Account Verification failed.",
              text: "Your account has failed to Verify. Please upload updated documents to retry.",
              btn1Text:"Home",
              btn2Text:"Retry",
            };
            setStyle(newStyle);
            break;
          }
        }
    }
    if (type === "document") {
        switch (status) {
          case "success": {
            let newStyle = {
              mainColor: "#06AF87",
              mainBtn: "primary",
              secBtn: "#06AF87",
              status: "Documents Verified",
              text: "Your account has been verified you can proceed and upload property Documents and sell property ",
              btn1Text:"Home",
              btn2Text:"See details",
            };
            setStyle(newStyle);
            break;
          }
          case "fail": {
            let newStyle = {
              mainColor: "#D9293E",
              mainBtn: "#D9293E",
              secBtn: "#06AF87",
              status: "Document Verification failed.",
              text: "Your documents have failed to Verify. Please upload updated documents to retry.",
              btn1Text:"Home",
              btn2Text:"Upload Again",
            };
            setStyle(newStyle);
            break;
          }
        }
      }
  }, [type, status]);

  return (
    <Container>
      <Wrapper>
        <Card sx={{ borderColor: style.mainColor }}>
          <Status sx={{ color: style.mainColor }}>{style.status}</Status>
          <Text>{style.text}</Text>
          <BtnWrapper>
            <Btn variant="contained" sx={{ backgroundColor: style.mainBtn }}>
             {style.btn1Text}
            </Btn>
            <Btn variant="contained" sx={{ backgroundColor: style.secBtn }}>
              {style.btn2Text}
            </Btn>
          </BtnWrapper>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default NotificationCard;
