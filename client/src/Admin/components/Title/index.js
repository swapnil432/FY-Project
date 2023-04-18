import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';


function Title(props) {
  return (
    <>
    <Typography marginTop="2rem"  marginLeft="6rem" component="h1"  variant="h5" fontWeight="bold" color="#212121" gutterBottom>
      {props.children}
    </Typography>
    </>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};

export default Title;   