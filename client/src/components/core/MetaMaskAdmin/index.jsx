import { Box, Button, Grid, IconButton, styled } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import { Context } from "@/Context";
import { useContext, useEffect, useState } from "react";

const StyledButton = styled(Button)({
  background: "#FE7001",
  borderRadius: "1rem",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#d65f02",
    color: "#fff",
  },
});
export default function MetaMaskAdmin() {
  const [walletAddress, setWalletAddress] = useState("");
  const router = useRouter();
  const { state, dispatch } = useContext(Context);
  
  const sendPublicKey = async (wallet) => {
    await axios({
      method: "POST",
      url: `/api/registerPublicKey`,
      data: { wallet },
    })
      .then((response) => {
        console.log("res" + response);
        dispatch({
          type: "LOGIN",
          payload: response.data,
        });
        window.localStorage.setItem("government", JSON.stringify(response.data));
        alert("Logged In");
      })
      .catch((err) => {
        console.log(err.response.data);
        alert(err.response.data.error);
      });
  };

  useEffect(() => {
    let gov = window.localStorage.getItem("government");
    gov =  JSON.parse(gov);

    if(gov){
      setWalletAddress(gov.public_key)
    }
  }, []);

  const getCurrentWalletConnected = async () => {
    // e.preventDefault();
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          console.log(accounts[0]);

          //send public key to backend
          sendPublicKey(accounts[0]);
        } else {
          console.log("Connect to metamask");
          // alert("Connect");
        }
      } catch (err) {
        console.error(err.message);
        // alert(err.message);
      }
    } else {
      //Metamask uninstalled
      console.log("Please install MetaMask");
      // alert("Please install MetaMask");
    }
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <StyledButton
        variant="contained"
        onClick={(e) => getCurrentWalletConnected()}
      >
        {walletAddress && walletAddress.length > 0
          ? `Connected: ${walletAddress.substring(
              0,
              6
            )}...${walletAddress.substring(38)}`
          : "Login Metamask"}
      </StyledButton>
      {/* <Button color="inherit" onClick={connectWallet}></Button> */}
    </Box>
  );
}
