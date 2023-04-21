import {
  AppBar,
  Button,
  IconButton,
  styled,
  Box,
  Typography,
  Drawer
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import PropDetailsPage from "../PropDetailsPage";
import PropertyVerify from "../PropertyVerify";
import AdminUsers from "@/Admin/components/AdminUsers";
import AdminDocuments from "../AdminDocuments";
import ListItems from "../ListItems";
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
  const [propertyID,setPropertyID] = useState(null);

  const toggleDrawer = (open) => (event) => {
    setLeftDrawer(open);
    open ? setNavwidth(175) : setNavwidth(0);
  };
  
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
          <ListItems setShowProperty={setShowProperty} setPageNum={setPageNum} setShowDocument={setShowDocument} setLeftDrawer={setLeftDrawer} setNavwidth={setNavwidth} />
        </Drawer>
      </Nav>
      {
      showProperty===true?
        (<PropDetailsPage propertyID={propertyID} showProperty={showProperty} setShowProperty={setShowProperty}/>):
          pageNum==1?
        (
          showdocument === true ?
          
          (<AdminDocuments setShowProperty={setShowProperty}/>):(<AdminUsers  setShowDocument={setShowDocument}/>) )
          
          :(<PropertyVerify setPropertyID={setPropertyID}  showProperty={showProperty} setShowProperty={setShowProperty}/>)
      }
    </AppBar>
  );
};

export default AdminNavbar;
