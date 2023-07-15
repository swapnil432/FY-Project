import { transfer } from "@/SmartContractFunctions";
import notification from "@/pages/notification11";
import {
  styled,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Flex1 = styled("div")({
  display: "flex",
  justifyContent: "flex-end",
  marginTop: "-4rem",
});

const Notifications = () => {
  const [notifications, setnotifications] = useState([]);

  let buyer;

  const getNotifications = () => {
    let allNotifications = [];

    axios({
      method: "GET",
      url: `/api/getnotification/${buyer.public_key}`,
    })
      .then((response) => {
        response.data.notification.map((notification, index) => {
          axios({
            method: "GET",
            url: `/api/getproperty/${notification.property_id}`,
          })
            .then((response) => {
              console.log(response.data);
              allNotifications.push({
                buyer_id: notification.buyer_id,
                property_id: notification.property_id,
                price: response.data.price,
                name: response.data.name,
                images: response.data.images[0].filename,
              });
              setnotifications(allNotifications);
            })
            .catch((err) => {
              console.log(err);
              alert("something wrong in getting notifications");
            });
        });
        console.log(allNotifications);
      })
      .catch((err) => {
        console.log(err);
        alert("something wrong in getting notifications");
      });
  };

  const deleteNotification = (property_id) => {
    axios({
      method: "DELETE",
      url: `/api/deletenotification/${property_id}`,
    })
      .then((response) => {
        console.log(response);
        alert(response.data.message);
      })
      .catch((err) => {
        console.log(err);
        alert("something wrong while deleting notification");
      });
  };

  const changeOwner = (property_id, buyer_id) => {
    axios({
      method: "PUT",
      url: `/api/changePropertyOwner/${property_id}`,
      data: {
        owner_public_key: buyer_id,
      },
    }).then((response) => {
      console.log(response);
      alert("Property transfered successfully");
    });
  }
//0x22Ec5e37deE96A659C3BCCacE2ce81B1c452A268
  const transferProperty = (property_id, buyer_id, price) => {
    transfer(property_id, buyer_id, price)
      .then((response) => {
        console.log(response)
        if(!response){
          changeOwner(property_id, buyer_id);
          deleteNotification(property_id);
          location.reload()
        }

        
      })
      
      .catch((error) => {
        console.log(error);
        alert("Error Occured, couldn't transfer property");
      });
  };

  const reject =(property_id)=> {
    deleteNotification(property_id);
    location.reload();
  }

  useEffect(() => {
    buyer = window.localStorage.getItem("user");
    buyer = JSON.parse(buyer);
    getNotifications();
  }, []);

  return (
    <div style={{ marginTop: "7rem", width: "100%", height: "60vh" }}>
      <Container sx={{ marginTop: "2rem", width: "100% " }}>
        {notifications.map((notification) => (
          <Card sx={{ display: "flex", height: "7rem", width: "100%" }}>
            <CardMedia
              component="img"
              sx={{ width: "10rem", marginRight: "1rem", padding: "0.5rem" }}
              image={`http://localhost:8000/resources/Images/property/${notification.images}`}
              alt="property"
            />
            <CardContent
              sx={{
                display: "flex",
                flex: "1 0 auto",
                flexDirection: "column",
              }}
            >
              <h5>{notification.name.substring(0,40)}...</h5>
              <div className="p-h6" style={{ margin: "1rem 0" }}>
                {notification.property_id}
              </div>
              <Flex1>
                <div className="p-h5" style={{ margin: "1.5rem" }}>
                  {notification.price} ETH
                </div>
                <Button onClick={() => reject(notification.property_id)} sx={{ margin: "1rem", color: "red" }}>Reject</Button>
                <Button
                  onClick={() =>
                    transferProperty(
                      notification.property_id,
                      notification.buyer_id,
                      web3.utils.toWei(notification.price.toString(), "ether")
                    )
                  }
                  variant="contained"
                  sx={{ margin: "1rem" }}
                >
                  Make Payment
                </Button>
              </Flex1>
            </CardContent>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default Notifications;
