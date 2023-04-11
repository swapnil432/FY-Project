import { Container } from "@mui/material";
import React from "react";
import About from "./About";
import Hero from "./Hero";

import Popularlisting from "./PopularListing";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Popularlisting />
      <About />
    </>
  );
};

export default HomePage;
