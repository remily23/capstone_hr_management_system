import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const UpdateEmployeeForm = ({ updateEmployee }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const employee = location.state.currentUser;

  const [employeeDetails, setEmployeeDetails] = useState(employee);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateEmployee(employee.employeeId, employeeDetails);
    navigate('../profile');
  };

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setEmployeeDetails((prevDetails) => ({
      ...prevDetails,
      [fieldName]: fieldValue,
    }));
  };

  return (
    <section className="update-form-container">
      <h1>Update your details</h1>
      <form onSubmit={handleFormSubmit} className="form-container">
        <section className="form-row">
          <label>First Name: </label>
          <input
            type="text"
            name="firstName"
            onChange={handleChange}
            placeholder="Enter your first name"
            value={employeeDetails.firstName}
          />
        </section>
        <section className="form-row">
          <label>Last Name: </label>
          <input
            type="text"
            name="lastName"
            onChange={handleChange}
            placeholder="Enter your last name"
            value={employeeDetails.lastName}
          />
        </section>
        <section className="form-row">
          <label>Email Address: </label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="Enter your email address"
            value={employeeDetails.email}
          />
        </section>
        <section className="form-row">
          <label>Date of Birth: </label>
          <input
            type="date"
            name="dateOfBirth"
            onChange={handleChange}
            placeholder="Enter your date of birth"
            value={employeeDetails.dateOfBirth}
          />
        </section>
        <section className="form-row">
          <label>Address: </label>
          <input
            type="text"
            name="address"
            onChange={handleChange}
            placeholder="Enter your address"
            value={employeeDetails.address}
          />
        </section>
        <section className="form-row">
          <label>Phone Number: </label>
          <input
            type="tel"
            name="phoneNumber"
            onChange={handleChange}
            placeholder="Enter your phone number"
            value={employeeDetails.phoneNumber}
          />
        </section>
        <section className="form-row">
          <label>Pro Rota: </label>
          <input
            type="text"
            name="proRota"
            onChange={handleChange}
            placeholder="Enter your pro rota"
            value={employeeDetails.proRota}
          />
        </section>
        <section className="form-row">
          <label>Salary: </label>
          <input
            type="text"
            name="salary"
            onChange={handleChange}
            placeholder="Enter your salary"
            value={employeeDetails.salary}
          />
        </section>
      </form>
      <section className="save-button">
        <input type="submit" value="Save" />
        </section>
   
    </section>
    

    
  );
};

export default UpdateEmployeeForm;
