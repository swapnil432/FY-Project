import { styled, Container, Typography } from "@mui/material";
import ImageGallery from "./ImageGallery";
import Description from "./Description";
import Overview from "./Overview";
import PriceCard from "./PriceCard";
import PropertyHeader from "./PropertyHeader";
import { useEffect, useState } from "react";
import axios from "axios";
import ChainofTitle from "../ChainOfTitle";


const CardsContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});

const DetailOffer = ({ propertyID }) => {
  const [propertyData, setpropertyData] = useState(null);

  const getproperty = () => {
    axios({
      method: "GET",
      url: `/api/getproperty/${propertyID}`,
    })
      .then((response) => {
        // console.log("khohohoho", response.data);
        setpropertyData(response.data);
      })
      .catch((err) => {
        console.log(err);
        alert("something went wrong when fetching the property");
      });
  };

 

  useEffect(() => {
    getproperty();
  }, []);

  return (
    <>
      {propertyData ? (
        <Container sx={{ marginTop: "8rem" }}>
          <PropertyHeader name={propertyData.name} />
          <ImageGallery propertyID={propertyID} />
          <CardsContainer>
            <Overview
              area={propertyData.area}
              bathroom={propertyData.bathroom}
              bedroom={propertyData.bedroom}
              state={propertyData.state}
            />
            <PriceCard
              propertyID={propertyID}
              price={propertyData.price}
              owner={propertyData.owner_public_key}
            />
          </CardsContainer>
          <Description /*description={propertyData.description}?*/ />
          <ChainofTitle propertyID={propertyID} />
        </Container>
      ) : (
        <Container sx={{ marginTop: "6 rem" }}>loading...</Container>
      )}
    </>
  );
};

export default DetailOffer;
