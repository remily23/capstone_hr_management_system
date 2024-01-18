import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as React from 'react';
import Table from './Table';
import { Typography } from "@mui/material";

const DashBoard = ({ currentUser }) => {
  // const location = useLocation()
  // const userName = location.state.lastName
  const [greet, setGreet] = useState("");
  const getCurrentTime = () => new Date().getHours();
  const greetingTime = (hour) => {
    if (hour >= 5 && hour < 12) {
      return "Good Morning";
    } else if (hour >= 12 && hour < 18) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  };
  useEffect(() => {
    const hour = getCurrentTime();
    const greeting = greetingTime(hour);
    setGreet(greeting);
  }, []);
  return (
    <>
      
      <Typography component="h1" variant="h5">{`${greet}, ${currentUser.firstName} ${currentUser.lastName}!`}</Typography>
      <Table />
    </>
  );
};
export default DashBoard;