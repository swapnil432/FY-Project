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
  const [names, setNames] = useState([]);
  let seller;
  //get seller from local storage

  const getselleroffer = () => {
    let allproperties = [];
    axios({
      method: "GET",
      url: `/api/getselloffer/${seller.public_key}`,
    })
      .then((response) => {
        // Collect all the property details in allproperties array
        response.data.sell.map((selleroffer, index) => {
          axios({
            method: "GET",
            url: `/api/getproperty/${selleroffer.property_id}`,
          })
            .then((response) => {
              allproperties.push({
                id: index + 1,
                buyer_id: selleroffer.buyer_id,
                seller_id: selleroffer.seller_id,
                current_price: selleroffer.current_price,
                property_id: selleroffer.property_id,
                images: response.data.images[0].filename,
              });
              setofferDetail(allproperties);
            })
            .catch((err) => {
              console.log(err);
              alert("something wrong in getting seller offers");
            });
        });
      })
      .catch((err) => {
        console.log(err);
        alert("hii something wrong");
      })
      .finally(() => {
        // Call getAllUserName after the offerDetail state is updated
        getAllUserName();
      });
  };

  const getAllUserName = async () => {
    let buyerNames = [];
    await Promise.all(
      offerDetail.map(async (offer) => {
        try {
          const response = await axios.get(`/api/getusernames/${offer.buyer_id}`);
          buyerNames.push(response.data.name);
        } catch (err) {
          console.log(err);
          alert("Something went wrong while fetching user names");
        }
      })
    );
    setNames(buyerNames);
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
        // console.log(response);
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
        // console.log(response);
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
        // console.log(response)

        if (!response) {
          createNotification(index);
          deleteSellerOffer(propertyId);
          location.reload();
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Error Occurred While Approving Buyer");
      });
  };

  useEffect(() => {
    seller = window.localStorage.getItem("user");
    seller = JSON.parse(seller);
    getselleroffer();
  }, []);

  useEffect(() => {
    // Fetch buyer names whenever offerDetail state changes
    getAllUserName();
  }, [offerDetail]);

  return (
    <Container sx={{ marginTop: "3rem" }}>
      {offerDetail.length > 0 ? (
        offerDetail.map((offer, index) => (
          <Card
            key={offer.id}
            sx={{
              marginTop: "1rem",
              display: "flex",
              height: "16rem",
              width: "100%",
              borderRadius: "8px",
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: "20rem", marginRight: "3rem" }}
              image={`http://localhost:8000/resources/Images/property/${offer.images}`}
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
                  Buyer Name: <b>{names[index]}</b>
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
