import React from 'react'
import {
  IconButton,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { ChevronLeft } from "@mui/icons-material";
import { useState } from "react";

const ListItems = ({setPageNum, setShowProperty, setShowDocument}) => {
    const [leftDrawer, setLeftDrawer] = useState(false);
    const [navwidth, setNavwidth] = useState(0);
    const toggleDrawer = (open) => (event) => {
        setLeftDrawer(open);
        open ? setNavwidth(175) : setNavwidth(0);
    };
  return (
    <div>
      <Box sx={{ width: 250 }}>
    <List>
      <IconButton onClick={toggleDrawer(false)}>
        <ListItem>
          <ListItemIcon sx={{ marginLeft: 20 }}>
            <ChevronLeft/>
          </ListItemIcon>
        </ListItem>
      </IconButton>
      <ListItemButton onClick={()=>{setPageNum(1) ;setShowProperty(false); setShowDocument(false)}}>
        <ListItemIcon>
          <GroupIcon />
        </ListItemIcon>
        <ListItemText primary="Users" />
      </ListItemButton>
      <ListItemButton onClick={()=>{setPageNum(2) ;setShowProperty(false);setShowDocument(false)}}>
        <ListItemIcon>
          <ApartmentIcon />
        </ListItemIcon>
        <ListItemText primary="Property" />
      </ListItemButton>
    </List>
  </Box>
    </div>
  )
}

export default ListItems;