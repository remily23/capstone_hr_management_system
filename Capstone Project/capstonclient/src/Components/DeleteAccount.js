import { EmojiEmotions } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useState } from "react";

const DeleteAccount = ({ deleteEmployee, currentUser }) => {
  //   const [employeeDetails, setEmployeeDetails] = useState(currentUser);

  //   console.log(employeeDetails);
  console.log(currentUser);
  const handleDeleteAccount = (e) => {
    // console.log("hello");
    e.preventDefault();
    deleteEmployee(currentUser.id);
    // setEmployeeDetails({
    //     currentUser.firstName = ""

    // })
  };

  return (
    <>
      <h3> Delete Profile</h3>
      <p>First Name: {currentUser.firstName}</p>
      <p>Last Name: {currentUser.lastName}</p>
      <p>Email: {currentUser.email}</p>
      <p>Date of Birth: {currentUser.dateOfBirth}</p>
      <p>Address: {currentUser.address}</p>
      <p>Phone Number: {currentUser.phoneNumber}</p>
      <p>Pro Rata: {currentUser.proRota}</p>
      <p>Salary: {currentUser.salary}</p>
      <input type="submit" value="delete" onSubmit={handleDeleteAccount} />
    </>
  );
};

export default DeleteAccount;
