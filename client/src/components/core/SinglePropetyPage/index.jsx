import { styled, Container, Typography } from "@mui/material";
import ImageGallery from "./ImageGallery";
import Description from "./Description";
import Overview from "./Overview";
import PriceCard from "./PriceCard";
import PropertyHeader from "./PropertyHeader";
import { useEffect, useState } from "react";
import axios from "axios";
import ChainofTitle from "../ChainOfTitle";


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
          
            <Overview
              surveyNumber = {propertyData.surveyNumber}

              area={propertyData.area}

              bathroom={propertyData.bathroom}
              bedroom={propertyData.bedroom}
              noOfParking={propertyData.noOfParking}

              ageOfBuilding={propertyData.ageOfBuilding}
              maintenanceCharges = {propertyData.maintenanceCharges}

              city = {propertyData.city}
              state={propertyData.state}
            />
            <PriceCard
              propertyID={propertyID}
              price={propertyData.price}
              owner={propertyData.owner_public_key}
            />
    
          <Description description={propertyData.description} />
          <ChainofTitle propertyID={propertyID} />
        </Container>
      ) : (
        <Container sx={{ marginTop: "6 rem" }}>loading...</Container>
      )}
    </>
  );
};

export default DetailOffer;
