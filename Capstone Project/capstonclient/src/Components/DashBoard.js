import { useState } from "react";
import { useNavigate, useLocation} from "react-router-dom";

const DashBoard = ({currentUser}) => {
  // const location = useLocation()
  // const userName = location.state.lastName
  // const currentTime = new Date().getHours();
  // if (currentTime >= 5 && currentTime < 12) {
  //   <p>"Good Morning"</p>
  // } else if (hour >= 12 && currentTime < 18) {
  //   return "Good Afternoon";
  // } else {
  //   return "Good Evening";
  // } 
  return (<>
  <h1>DashBoard page</h1> 
  <p>{currentUser.firstName} {currentUser.lastName}</p>
</>

  
)};

export default DashBoard;
