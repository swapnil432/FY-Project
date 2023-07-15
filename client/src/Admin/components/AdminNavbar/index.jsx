import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useEffect, useState } from "react";
import Image from 'next/image';
import MetaMaskAdmin from '@/components/core/MetaMaskAdmin';
import ListItems from '../ListItems';
import AdminDocuments from '../AdminDocuments';
import PropertyVerify from '../PropertyVerify';
import AdminUsers from '../AdminUsers';
import { loadData } from "../../../SmartContractFunctions";
import AdminPropertyDetails from '../AdminPropertyDetails';
const drawerWidth = 240;
const navwidth = 0;
  
const Nav = styled(Box)({
  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  display: "flex",
  background: "#fff",
  justifyContent: "space-between",
  padding: "10px 50px",
});
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar, // necessary for content to be below app bar
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function AdminNavbar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [leftDrawer, setLeftDrawer] = React.useState(false);
    const [navwidth, setNavwidth] = React.useState(0);
    const [pageNum, setPageNum] = React.useState(true);
    const [showProperty,setShowProperty] = React.useState(false);
    const [showdocument,setShowDocument] = React.useState(false);
    const [propertyID,setPropertyID] = React.useState(null);
    const [gov, setGov] = React.useState(null);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    const fetchData = async () => {
      let { account, error } = await loadData();
      if (error) {
        alert("Error occured: ", error);
      } else {
        setGov(account);
      }
    };
  
    fetchData();
    }, []);
  return (
    <Box>      
      <AppBar position="fixed" open={open}>
        <Nav>
        
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: navwidth,
            }}
          >
          <IconButton
            color="#000000"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            size="large"
            sx={{
              marginRight: 5,
              marginLeft: -5,
              ...(open && { display: 'none' }),
            }}
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
              color="#000000"
              sx={{ flexGrow: 1, ml: "1rem" }}
            >
              Admin Dashboard
            </Typography>
            </div>
            <MetaMaskAdmin >Login</MetaMaskAdmin>
          
        </Nav>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <ListItems setShowProperty={setShowProperty} setPageNum={setPageNum} setShowDocument={setShowDocument} setLeftDrawer={setLeftDrawer} setNavwidth={setNavwidth} />
      </Drawer>
     
      {
        showProperty===true?
          (<AdminPropertyDetails propertyID={propertyID} showProperty={showProperty} setShowProperty={setShowProperty}/>):
            pageNum==1?
          (
            showdocument === true ?
            
            (<AdminDocuments setShowProperty={setShowProperty}/>):(<AdminUsers  setShowDocument={setShowDocument}/>) )
            
            :(<PropertyVerify setPropertyID={setPropertyID}  showProperty={showProperty} setShowProperty={setShowProperty}/>)
        }
    </Box>
  );
}