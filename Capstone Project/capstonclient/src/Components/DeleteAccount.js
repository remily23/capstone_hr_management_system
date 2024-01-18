import React from "react";
import { EmojiEmotions } from "@mui/icons-material";
import { Button, Alert, Stack, AlertTitle } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const DeleteAccount = ({ deleteEmployee, currentUser }) => {
  const navigate = useNavigate();
  const [deleteMessage, setDeleteMessage] = useState(null);

  const handleDeleteAccount = (e) => {
    e.preventDefault();
    deleteEmployee(currentUser.id);
    navigate("../login");

  };
  return (
    <section className="delete-account-container">
      <h3>Delete Profile</h3>
      <p>First Name: {currentUser.firstName}</p>
      <p>Last Name: {currentUser.lastName}</p>
      <p>Email: {currentUser.email}</p>
      <p>Date of Birth: {currentUser.dateOfBirth}</p>
      <p>Address: {currentUser.address}</p>
      <p>Phone Number: {currentUser.phoneNumber}</p>
      <p>Pro Rata: {currentUser.proRota}</p>
      <p>Salary: {currentUser.salary}</p>
      <input type="submit" value="delete" onClick={handleDeleteAccount} />
      {deleteMessage && (
        <Stack>
          <Alert severity="success">{deleteMessage}</Alert>
        </Stack>
      )}
    </section>
  );
};
export default DeleteAccount;