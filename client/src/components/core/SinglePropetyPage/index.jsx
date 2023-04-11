import { styled, Container } from "@mui/material";
import ImageGallery from "./ImageGallery";
import Description from "./Description";
import Overview from "./Overview";
import PriceCard from "./PriceCard";
import PropertyHeader from "./PropertyHeader";

// const PropertyWrapper = styled("div")({
//   width: 1450,
//   marginLeft: "auto",
//   marginRight: "auto",
//   marginTop: 80,
//   marginBottom: 80,
//   // backgroundColor: "grey"
// });

const CardsContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});

const DetailOffer = () => {
  return (
    <Container sx={{ marginTop: "8rem" }}>
      <PropertyHeader />
      <ImageGallery />
      <CardsContainer>
        <Overview />
        <PriceCard />
      </CardsContainer>
      <Description />
    </Container>
    // <PropertyWrapper>

    // </PropertyWrapper>
  );
};

export default DetailOffer;
