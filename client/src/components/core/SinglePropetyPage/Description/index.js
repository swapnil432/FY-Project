import React from "react";
import { styled, Typography } from "@mui/material";

const DescriptionContainer = styled("div")({
  marginTop: 85,
  borderRadius: 20,
  borderStyle: "solid",
  borderWidth: 1,
  borderColor: "#B2BEB5",
  paddingTop: 50,
  paddingLeft: 80,
  paddingRight: 80,
  paddingBottom: 50,
});

const Description = () => {
  return (
    <DescriptionContainer>
      <Typography variant="h3" sx={{ marginBottom: 2 }}>
        Description
      </Typography>
      <Typography variant="body1">
        Non dolor do eiusmod consectetur cillum labore quis dolor fugiat tempor.
        Occaecat do sit aliqua excepteur ipsum consequat sit irure commodo nulla
        amet in ad. Sunt nisi incididunt consequat commodo amet est consequat.
        Ullamco anim id aliqua dolore. Culpa reprehenderit incididunt ea commodo
        officia elit et culpa dolore ea. Lorem Lorem culpa sit aliquip. Magna
        ullamco deserunt qui occaecat laborum esse. Laboris enim sint cupidatat
        exercitation non do ullamco labore irure. Cillum est eu amet velit non
        dolore proident reprehenderit nostrud est exercitation. Laboris do aute
        deserunt ex aliquip deserunt elit nisi consequat elit mollit nulla non.
        Qui nulla minim ullamco qui commodo sint aute labore. Minim occaecat ea
        sint velit irure fugiat ullamco. Velit nostrud veniam sit anim voluptate
        minim cillum fugiat ea in est tempor sint. Magna velit est ex duis culpa
        officia. Culpa consequat commodo non dolore occaecat veniam ex Lorem
        Lorem enim labore qui. Elit voluptate cupidatat nostrud consequat elit
        occaecat commodo dolore et laboris officia nostrud ullamco fugiat.
        Incididunt eu aliqua in nisi duis magna elit est. Culpa consequat
        commodo non dolore occaecat Non dolor do eiusmod consectetur cillum
        labore quis dolor fugiat tempor. Occaecat do sit aliqua excepteur ipsum
        consequat sit irure commodo nulla amet in ad. Sunt nisi incididunt
        consequat commodo amet est consequat. Ullamco anim id aliqua dolore.
        Culpa reprehenderit incididunt ea commodo officia elit et culpa dolore
        ea. Lorem Lorem culpa sit aliquip. Magna ullamco deserunt qui occaecat
        laborum esse. Laboris enim sint cupidatat exercitation non do ullamco
        labore irure. Cillum est eu amet velit non dolore proident reprehenderit
        nostrud est exercitation. Laboris do aute deserunt ex aliquip deserunt
        elit nisi consequat elit mollit nulla non. Qui nulla minim ullamco qui
        commodo sint aute labore. Minim occaecat ea sint velit irure fugiat
        ullamco. Velit nostrud veniam sit anim voluptate minim cillum fugiat ea
        in est tempor sint. Magna velit est ex duis culpa officia. Culpa
        consequat commodo non dolore occaecat veniam ex Lorem Lorem enim labore
        qui. Elit voluptate cupidatat nostrud consequat elit occaecat commodo
        dolore et laboris officia nostrud ullamco fugiat. Incididunt eu aliqua
        in nisi duis magna elit est. Culpa consequat cveniam ex Lorem Lorem enim
        labore qui. Elit voluptate cupidatat nostrud consequat elit occaecat
        commodo dolore et laboris officia nostrud ullamco fugiat. Incididunt eu
        aliqua in nisi duis magna elit est.
      </Typography>
    </DescriptionContainer>
  );
};

export default Description;
