import { useState } from "react";
import { useNavigate, createBrowserRouter } from "react-router-dom";

const CreateAccountForm = ({ currentUser, postEmployee }) => {
    const [stateEmployee, setStateEmployee] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        dateOfBirth: "",
        address: "",
        phoneNumber: "",
        proRata: "",
        salary: ""
    });
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (
            stateEmployee.firstName === "" ||
            stateEmployee.lastName === "" ||
            stateEmployee.email === "" ||
            stateEmployee.password === "" ||
            stateEmployee.dateOfBirth === "" ||
            stateEmployee.address === "" ||
            stateEmployee.phoneNumber === "" ||
            stateEmployee.proRata === "" ||
            stateEmployee.salary === ""
        ) {
            alert("Please fill in the sign up form")
            return
        }
        postEmployee(stateEmployee)
        setStateEmployee({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            dateOfBirth: "",
            address: "",
            phoneNumber: "",
            proRata: "",
            salary: ""
        })
    }
    const handleChange = (e) => {
        let fieldName = e.target.name;
        let copiedEmployee = { ...stateEmployee };
        copiedEmployee[fieldName] = e.target.value;
        setStateEmployee(copiedEmployee);
    }
    return (
        <>
            <h2>Create Account Page</h2>
            <div>
                <form onSubmit={handleFormSubmit}>
                        <p>Access Level
                            <select id="dropdown">
                                <option>Admin</option>
                                <option>Employee</option>
                            </select>
                            <label>First Name: </label><input type="text" onChange={handleChange} name="firstName" placeholder="Enter your first name" value={stateEmployee.firstName} />
                            <label>Last Name: </label><input type="text" onChange={handleChange} name="lastName" placeholder="Enter your last name" value={stateEmployee.lastName} />
                            <label>Email Address: </label><input type="email" onChange={handleChange} name="email" placeholder="Enter your email address" value={stateEmployee.email} />
                            <label>Password: </label><input type="password" onChange={handleChange} name="password" placeholder="Enter your password" value={stateEmployee.password} />
                            <label>Date of Birth: </label><input type="date" onChange={handleChange} name="dateOfBirth" placeholder="Enter your date of birth" value={stateEmployee.dateOfBirth} />
                            <label>Address: </label><input type="text" onChange={handleChange} name="address" placeholder="Enter your address" value={stateEmployee.address} />
                            <label>Phone Number: </label><input type="tel" onChange={handleChange} name="phoneNumber" placeholder="Enter your phone number" value={stateEmployee.phoneNumber} />
                            <label>Pro Rata: </label><input type="text" onChange={handleChange} name="proRota" placeholder="Enter your pro rota" value={stateEmployee.proRota} />
                            <label>Salary: </label><input type="text" onChange={handleChange} name="salary" placeholder="Enter your salary" value={stateEmployee.salary} />
                            <input type="submit" value="Create" />
                        </p>
                </form>
            </div>
        </>
    );
}
export default CreateAccountForm;