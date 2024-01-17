import React from "react";
import { Link, Outlet } from "react-router-dom";
import SideBar from "./SideBar";
const Navigation = () => {
  return (
    <>
      <nav>
        <SideBar />
        <Outlet />
      </nav>
    </>
  );
};
export default Navigation;

// import React, { useState } from "react";
// import Drawer from "@mui/material/Drawer";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
// import { Link } from "react-router-dom";
// import MenuIcon from "@mui/icons-material/Menu";
// import { Avatar, Button, CssBaseline, Typography } from "@mui/material";
// import HomeIcon from "@mui/icons-material/Home";
// import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
// import LogoutIcon from "@mui/icons-material/Logout";
// import PersonAddIcon from "@mui/icons-material/PersonAdd";

// const SideBar = () => {
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const toggleDrawer = (open) => () => {
//     setDrawerOpen(open);
//   };
//   const menuItems = [
//     { text: "Dashboard", link: "/dashboard", icon: <HomeIcon /> },
//     { text: "Profile", link: "/profile", icon: <PersonOutlineIcon /> },
//     { text: "Create Account", link: "/newaccount", icon: <PersonAddIcon /> },
//     { text: "Sign-out", link: "/login", icon: <LogoutIcon /> },
//   ];
//   return (
//     <div style={{ position: "fixed", left: 10, top: 20 }}>
//       <Button
//         onClick={toggleDrawer(true)}
//         startIcon={<MenuIcon />}
//         variant="contained"
//         color="primary"
//       >
//         Menu
//       </Button>


//       <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
//         <List>
//           {menuItems.map((item, index) => (
//             <ListItem key={index} button onClick={toggleDrawer(false)}>
//               <ListItemButton>
//                 <Avatar sx={{ bgcolor: "secondary.main", mr: 2 }}>
// //                     {item.icon}
// //              </Avatar>

//                 <Link
//                   to={item.link}
//                   style={{ textDecoration: "none", color: "inherit" }}
//                 >

//                   <ListItemText primary={item.text} />
//                 </Link>
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//     </div>
//   );
// };
// export default SideBar;






