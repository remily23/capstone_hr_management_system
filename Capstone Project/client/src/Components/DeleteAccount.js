import React from "react";
import { useNavigate } from "react-router-dom";

const DeleteAccount = ({ deleteEmployee, currentUser }) => {

  const navigate = useNavigate();

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
      <p>Department: {currentUser.position.department}</p>
      <p>Role: {currentUser.position.title}</p>
      <p>Access Level: {currentUser.position.accessLevel}</p>

      <section className="delete-button-container">
        <input className="delete-button" type="submit" value="Delete" onClick={handleDeleteAccount} />
      </section>

    </section>
  );
};

export default DeleteAccount;
