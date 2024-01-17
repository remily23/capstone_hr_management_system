import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const UpdateEmployeeForm = ({ updateEmployee }) => {

    const navigate = useNavigate();
    const location = useLocation();
    const employee = location.state.currentUser;

    const [employeeDetails, setEmployeeDetails] = useState(employee);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        updateEmployee(employee.employeeId, employeeDetails);
        navigate("../profile");
    }

    const handleChange = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        setEmployeeDetails((prevDetails) => ({
            ...prevDetails,
            [fieldName]: fieldValue
        }));

        console.log(employeeDetails);
    }

    return (
        <section className="update-form-container">
            <h1>Update Form</h1>
            <form onSubmit={handleFormSubmit}>
                <label>First Name: </label>
                <input type="text" name="firstName" onChange={handleChange} placeholder="Enter your first name" value={employeeDetails.firstName} />
                <label>Last Name: </label><input type="text" onChange={handleChange} name="lastName" placeholder="Enter your last name" value={employeeDetails.lastName} />
                <label>Email Address: </label><input type="email" onChange={handleChange} name="email" placeholder="Enter your email address" value={employeeDetails.email} />
                <label>Date of Birth: </label><input type="date" onChange={handleChange} name="dateOfBirth" placeholder="Enter your date of birth" value={employeeDetails.dateOfBirth} />
                <label>Address: </label><input type="text" onChange={handleChange} name="address" placeholder="Enter your address" value={employeeDetails.address} />
                <label>Phone Number: </label><input type="tel" onChange={handleChange} name="phoneNumber" placeholder="Enter your phone number" value={employeeDetails.phoneNumber} />
                <label>Pro Rota: </label><input type="text" onChange={handleChange} name="proRota" placeholder="Enter your pro rota" value={employeeDetails.proRota} />
                <label>Salary: </label><input type="text" onChange={handleChange} name="salary" placeholder="Enter your salary" value={employeeDetails.salary} />
                <input type="submit" value="Save" />
            </form>
        </section>
    );
}

export default UpdateEmployeeForm;