import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, Button, CssBaseline } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
const SideBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };
  const menuItems = [
    { text: "Dashboard", link: "/dashboard", icon: <HomeIcon /> },
    { text: "Profile", link: "/profile", icon: <PersonOutlineIcon /> },
    { text: "Create Account", link: "/newAccount", icon: <PersonAddIcon /> },
    {
      text: "Delete Account",
      link: "/deleteAccount",
      icon: <PersonRemoveIcon />,
    },
    { text: "Sign-out", link: "/login", icon: <LogoutIcon /> },
  ];
  return (
    <>
      <CssBaseline />
      <div style={{ position: "fixed", left: 10, top: 20 }}>
        <Button
          onClick={toggleDrawer(true)}
          startIcon={<MenuIcon />}
          variant="contained"
          style={{ backgroundColor: "#4CAF50", color: "#FFFFFF" }}
        >
          Menu
        </Button>
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          <List>
            {menuItems.map((item, index) => (
              <ListItem key={index} onClick={toggleDrawer(false)}>
                <ListItemButton>
                  <Avatar sx={{ bgcolor: "#4CAF50", mr: 2 }}>
                    {item.icon}
                  </Avatar>
                  <Link
                    to={item.link}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <ListItemText primary={item.text} />
                  </Link>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </div>
    </>
  );
};
export default SideBar;