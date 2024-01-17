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
        <section className="first-name">
          <label>First Name: </label>
          <input
            type="text"
            name="firstName"
            onChange={handleChange}
            placeholder="Enter your first name"
            value={employeeDetails.firstName}
          />
        </section>
        <section className="last-name">
          <label>Last Name: </label>
          <input
            type="text"
            name="lastName"
            onChange={handleChange}
            placeholder="Enter your last name"
            value={employeeDetails.lastName}
          />
        </section>
        <section className="email">
          <label>Email Address: </label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="Enter your email address"
            value={employeeDetails.email}
          />
        </section>
        <section className="dob">
          <label>Date of Birth: </label>
          <input
            type="date"
            name="dateOfBirth"
            onChange={handleChange}
            placeholder="Enter your date of birth"
            value={employeeDetails.dateOfBirth}
          />
        </section>
        <section className="address">
          <label>Address: </label>
          <input
            type="text"
            name="address"
            onChange={handleChange}
            placeholder="Enter your address"
            value={employeeDetails.address}
          />
        </section>
        <section className="phone-number">
          <label>Phone Number: </label>
          <input
            type="tel"
            name="phoneNumber"
            onChange={handleChange}
            placeholder="Enter your phone number"
            value={employeeDetails.phoneNumber}
          />
        </section>
        <section className="pro-rota">
          <label>Pro Rota: </label>
          <input
            type="text"
            name="proRota"
            onChange={handleChange}
            placeholder="Enter your pro rota"
            value={employeeDetails.proRota}
          />
        </section>
        <section className="salary">
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
      <section className='save-button-container'>
        <input type="submit" value="Save" className="save-button" onClick={handleFormSubmit}/>
        </section>
    </section>
  );
};

export default UpdateEmployeeForm;
