import { changePrice } from "@/SmartContractFunctions";
import {
  styled,
  Button,
  TextField,
  CardMedia,
  CardContent,
  CardActions,
  Card,
  Container,
  InputAdornment,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const Flex2 = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "0.5 rem",
});

const Myproperties = () => {
  const [price, setPrice] = useState(0);
  const [properties, setProperties] = useState([]);
  let user;

  const getUserProperty = (userID) => {
    axios({
      method: "GET",
      url: `/api/getuserproperties/${userID}`,
    })
      .then((response) => {
        setProperties(response.data);
      })
      .catch((err) => {
        console.log(err);
        alert("something wrong in getting user properties");
      });
  };

  const changePropertyLisiting = (propID) => {
    axios({
      method: "PUT",
      url: `/api/changePropertyListing/${propID}`,
    })
      .then(async (response) => {
        alert("Listing status changed successfully");
        location.reload();
      })
      .catch((err) => {
        alert("Failed to Change Property Lisiting status");
      });
  };

  const changePropertyPrice = (propID) => {
    user = window.localStorage.getItem("user");
    user = JSON.parse(user);
    axios({
      method: "PUT",
      url: `/api/changePropertyPrice/${propID}`,
      data: {
        price: price,
      },
    })
      .then(async (response) => {
        let error = await changePrice(propID, price, user.public_key);
        if (!error) {
          location.reload();
        }
      })
      .catch((err) => {
        alert("Failed to Change Property Price");
      });
  };

  useEffect(() => {
    user = window.localStorage.getItem("user");
    user = JSON.parse(user);
    getUserProperty(user.public_key);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        marginTop: "7rem",
        width: "100%",
        height: "70vh",
        borderRadius: "24px",
      }}
    >
      {console.log("/////////////////////",properties)}
      {properties.map((property) => (
        <Card
          key={property._id}
          sx={{ marginLeft: "5rem", width: 420, height: 480 }}
        >
          <CardMedia
            component="img"
            height="200"
            image={`http://localhost:8000/resources/Images/property/${property.images[0].filename}`}
            sx={{ padding: "1rem", borderRadius: "24px" }}
          />
          <CardContent sx={{ marginTop: -2 }}>
            <Flex2>
              <h5>{property.name}</h5>
              <h5>{property.price} ETH</h5>
            </Flex2>
            <div style={{ margin: "1rem 0" }}>{property.owner_public_key}</div>
            <Flex2>
              <TextField
                onChange={(e) => setPrice(e.target.value)}
                hiddenLabel
                fullWidth
                variant="outlined"
                size="small"
                sx={{ marginTop: 0.5, width: "70%" }}
                type="number"
                placeholder="ETH"
              />
              <Button
                onClick={() => changePropertyPrice(property._id)}
                variant="contained"
                sx={{ height: "2rem", marginTop: 1 }}
              >
                Save
              </Button>
            </Flex2>
          </CardContent>
          <CardActions>
            <Button
              onClick={() => changePropertyLisiting(property._id)}
              variant="outlined"
              sx={{ width: "100%", m: 1, height: "2rem", fontWeight: "bold" }}
            >
              {property.listProperty ? "UNLIST" : "LIST"}
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default Myproperties;
