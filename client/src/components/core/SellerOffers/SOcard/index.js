import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Container } from "@mui/material";
import { approveSale } from "@/SmartContractFunctions";
import axios from "axios";

const SellerOfferCard = () => {
  const [offerDetail, setofferDetail] = useState([]);
  let seller;
  //get seller from local storage

  const getselleroffer = () => {
    let allproperties = [];
    axios({
      method: "GET",
      url: `/api/getselloffer/${seller.public_key}`,
    })
      .then((response) => {
        console.log(response.data.sell);
        response.data.sell.map((properties, index) => {
          allproperties.push({
            id: index + 1,
            buyer_id: properties.buyer_id,
            seller_id: properties.seller_id,
            current_price: properties.current_price,
            property_id: properties.property_id,
          });
        });
        console.log("all prop", allproperties);
        setofferDetail(allproperties);
      })
      .catch((err) => {
        console.log(err);
        alert("something wrong");
      });
  };

  const createNotification = (index) => {
    axios({
      method: "POST",
      url: `/api/notification`,
      data: {
        property_id: offerDetail[index].property_id,
        buyer_id: offerDetail[index].buyer_id,
      },
    })
      .then((response) => {
        console.log(response);
        alert(response.data.message);
      })
      .catch((err) => {
        console.log(err);
        alert("something wrong in notification");
      });
  };

  const deleteSellerOffer = (property_id) => {
    // deleteselloffer
    axios({
      method: "DELETE",
      url: `/api/deleteselloffer/${property_id}`,
    })
      .then((response) => {
        console.log(response);
        alert("Deleted seller offer");
      })
      .catch((err) => {
        console.log(err);
        alert("something wrong");
      });
  };

  const approveBuyer = (propertyId, buyer, seller, index) => {
    approveSale(propertyId, buyer, seller)
      .then((response) => {
        console.log(response)

        if(!response){
          createNotification(index);
          deleteSellerOffer(propertyId);
          location.reload()
        }

      })
      .catch((error) => {
        console.log(error);
        alert("Error Occured While Approving Buyer");
      });
  };

  useEffect(() => {
    seller = window.localStorage.getItem("user");
    seller = JSON.parse(seller);
    getselleroffer();
  }, []);

  return (
    <Container sx={{ marginTop: "3rem" }}>
      {console.log("offer detail", offerDetail)}
      {offerDetail.length > 0 ? (
        offerDetail.map((offer, index) => (
          <Card
            sx={{
              display: "flex",
              height: "16rem",
              width: "100%",
              borderRadius: "8px",
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: "20rem", marginRight: "3rem" }}
              image="/rectangle114.png"
              alt="property"
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "1rem",
              }}
            >
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography
                  component="div"
                  variant="h5"
                  sx={{ marginBottom: "0.7rem" }}
                >
                  Property ID: <b>{offer.property_id}.</b>
                </Typography>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ marginBottom: "0.7rem" }}
                >
                  Buyer ID: <b>{offer.buyer_id}</b>
                </Typography>
                <Typography variant="h5" component="div">
                  Current Price: <b>{offer.current_price}</b>
                </Typography>
                <Button
                  onClick={(e) =>
                    approveBuyer(
                      offer.property_id,
                      offer.buyer_id,
                      offer.seller_id,
                      index
                    )
                  }
                  variant="contained"
                  sx={{
                    paddingLeft: "3rem",
                    paddingRight: "3rem",
                    height: "3rem",
                    marginTop: "2rem",
                  }}
                >
                  Approve Buyer
                </Button>
              </CardContent>
            </Box>
          </Card>
        ))
      ) : (
        <p>Loading</p>
      )}
    </Container>
  );
};

export default SellerOfferCard;
