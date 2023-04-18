import {
  AppBar,
  Button,
  IconButton,
  styled,
  Box,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import GroupIcon from "@mui/icons-material/Group";
import ApartmentIcon from "@mui/icons-material/Apartment";
import Image from "next/image";
import { ChevronLeft } from "@mui/icons-material";
import PropDetailsPage from "../PropDetailsPage";
import PropertyVerify from "../PropertyVerify";
import AdminUsers from "@/Admin/components/AdminUsers";
import Link from "next/link";
import AdminDocuments from "../AdminDocuments";
const Nav = styled(Box)({
  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  display: "flex",
  background: "#fff",
  justifyContent: "space-between",
  padding: "10px 50px",
});
const NavItem = styled(Button)({
  fontSize: "15px",
  marginRight: "2px",
  textTransform: "capitalize",
  color: "inherit",
});

const AdminNavbar = () => {
  const [leftDrawer, setLeftDrawer] = useState(false);
  const [navwidth, setNavwidth] = useState(0);
  const [pageNum, setPageNum] = useState(true);
  const [showProperty,setShowProperty] = useState(false);
  const [showdocument,setShowDocument] = useState(false);

  const toggleDrawer = (open) => (event) => {
    setLeftDrawer(open);
    open ? setNavwidth(175) : setNavwidth(0);
  };
  const list = () => (
    <Box sx={{ width: 250 }}>
      <List>
        <IconButton onClick={toggleDrawer(false)}>
          <ListItem>
            <ListItemIcon sx={{ marginLeft: 20 }}>
              <ChevronLeft />
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
  );
  return (
    <AppBar position="static" color="transparent">
      <Nav>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: navwidth,
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <div
            style={{
              width: "3rem",
              height: "3rem",
              position: "relative",
            }}
          >
            <Image
              src={"/Master/logo.png"}
              alt="Logo"
              fill
              objectFit="contain"
              onClick={()=>{setShowProperty(false); setShowDocument(false)}}
            />
          </div>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, ml: "1rem" }}
          >
            Dashboard
          </Typography>
        </div>
        <Button variant="contained">Logout</Button>

        <Drawer anchor="left" open={leftDrawer} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </Nav>
      {
      showProperty===true?
        (<PropDetailsPage showProperty={showProperty} setShowProperty={setShowProperty}/>):
          pageNum==1?
        (
          showdocument === true ?
          
          (<AdminDocuments setShowProperty={setShowProperty}/>):(<AdminUsers  setShowDocument={setShowDocument}/>) )
          
          :(<PropertyVerify showProperty={showProperty} setShowProperty={setShowProperty}/>)
      }
    </AppBar>
  );
};

export default AdminNavbar;
