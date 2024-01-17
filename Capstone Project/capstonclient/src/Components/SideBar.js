import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
const SideBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };
  const menuItems = [
    { text: "Dashboard", link: "/dashboard" },
    { text: "Profile", link: "/profile" },
    { text: "Create Account", link: "/newaccount" },
    { text: "Sign-out", link: "/login" },
  ];
  return (
    <div style={{ position: "fixed", left: 0, top: 0 }}>
      <button onClick={toggleDrawer(true)}>Open Sidebar</button>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          {menuItems.map((item, index) => (
            <ListItem key={index} button onClick={toggleDrawer(false)}>
              <ListItemButton>
                <Link to={item.link}>
                  <ListItemText primary={item.text} />
                </Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};
export default SideBar;