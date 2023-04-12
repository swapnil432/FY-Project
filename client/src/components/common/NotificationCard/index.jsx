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
});

const Status = styled(Typography)({
  fontSize: "60px",
  fontWeight: 700,
  fontFamily: "Playfair Display",
  textAlign: "center",
});

const Text = styled(Typography)({
  fontSize: "32px",
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
  fontWeight:"600"

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
          };
          setStyle(newStyle);
          break;
        }
        case "fail": {
          let newStyle = {
            mainColor: "#06AF87",
            mainBtn: "#06AF87",
            secBtn: "#D9293E",
            status: "Offer Rejected",
            text: "The seller did not sign the sale deed and agree on your offer.",
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
              Make Payment
            </Btn>
            <Btn variant="contained" sx={{ backgroundColor: style.secBtn }}>
              Reject
            </Btn>
          </BtnWrapper>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default NotificationCard;
