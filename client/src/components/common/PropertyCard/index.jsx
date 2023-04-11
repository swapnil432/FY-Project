import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  Typography,
  styled,
  Stack,
  Box,
} from "@mui/material";
import * as React from "react";

import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PlaceIcon from "@mui/icons-material/Place";
const PropertyCard = () => {
  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardMedia
        component="img"
        height="194"
        image="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80"
        alt="Apartment"
      />
      <CardContent>
        {/* <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography> */}
        <p className="p-h6">Large 4-room apartment with a beautiful terrace</p>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButton aria-label="location">
            <PlaceIcon />
          </IconButton>
          <p sx={{ margin: 0 }}>Ponda, Goa</p>
        </Box>

        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default PropertyCard;
