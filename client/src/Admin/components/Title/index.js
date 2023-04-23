import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

function Title(props) {
  return (
    <Container sx={{marginLeft:"5rem", marginTop: "6rem", marginBottom: "2rem" }}>
      <h4>{props.children}</h4>
    </Container>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};

export default Title;
