import { useState } from "react";
import { Alert, Stack } from "@mui/material";

const CreateAccountForm = ({ postEmployee, listOfPositions }) => {

    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const [stateEmployee, setStateEmployee] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        dateOfBirth: "",
        address: "",
        phoneNumber: "",
        proRata: "",
        salary: "",
        id: null
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
            stateEmployee.salary === "" ||
            stateEmployee.id === null
        ) {
            setErrorMessage("Information entered is not correct")
            setSuccessMessage(null);
        } else {
            postEmployee(stateEmployee)
            setSuccessMessage("Account created successfully")
            setErrorMessage(null);
        }

        setStateEmployee({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            dateOfBirth: "",
            address: "",
            phoneNumber: "",
            proRata: "",
            salary: "",
            id: null
        })
    };

    const handleChange = (e) => {
        let fieldName = e.target.name;
        let copiedEmployee = { ...stateEmployee };
        copiedEmployee[fieldName] = e.target.value;
        setStateEmployee(copiedEmployee);
    };

    const positionOptions = listOfPositions.map(position => (
        <option key={position.positionId} value={position.positionId}>
          {position.department} - {position.title}
        </option>
    ));

    return (
        <>
            <section className="create-account">
                <h2>Create Account</h2>
                <form onSubmit={handleFormSubmit}>

                    <section>
                        <label htmlFor="position">Position:</label>
                            <select id="position" name="id" value={stateEmployee.id} onChange={handleChange}>
                              <option>Select Position</option>
                                {positionOptions}
                        </select>
                    </section>

                    <section className="create-account-form-container">

                        <section>
                            <label>First Name: </label>
                            <input
                                type="text"
                                onChange={handleChange}
                                name="firstName"
                                placeholder="Enter your first name"
                                value={stateEmployee.firstName} />
                        </section>

                        <section>
                            <label>Last Name: </label>
                            <input
                                type="text"
                                onChange={handleChange}
                                name="lastName"
                                placeholder="Enter your last name"
                                value={stateEmployee.lastName} />
                        </section>

                        <section>
                            <label>Email Address: </label>
                            <input
                                type="email"
                                onChange={handleChange}
                                name="email"
                                placeholder="Enter your email address"
                                value={stateEmployee.email} />
                        </section>

                        <section>
                            <label>Password: </label>
                            <input
                                type="password"
                                onChange={handleChange}
                                name="password"
                                placeholder="Enter your password"
                                value={stateEmployee.password} />
                        </section>

                        <section>
                            <label>Date of Birth: </label>
                            <input
                                type="date"
                                onChange={handleChange}
                                name="dateOfBirth"
                                placeholder="Enter your date of birth"
                                value={stateEmployee.dateOfBirth} />
                        </section>

                        <section>
                            <label>Address: </label>
                            <input
                                type="text"
                                onChange={handleChange}
                                name="address"
                                placeholder="Enter your address"
                                value={stateEmployee.address} />
                        </section>

                        <section>
                            <label>Phone Number: </label>
                            <input
                                type="tel"
                                onChange={handleChange}
                                name="phoneNumber"
                                placeholder="Enter your phone number"
                                value={stateEmployee.phoneNumber} />
                        </section>

                        <section>
                            <label>Pro Rata: </label>
                            <input
                                type="number"
                                onChange={handleChange}
                                name="proRata"
                                placeholder="Enter your pro rata"
                                value={stateEmployee.proRata} />
                        </section>

                        <section>
                            <label>Salary: </label>
                            <input
                                type="number"
                                onChange={handleChange}
                                name="salary"
                                placeholder="Enter your salary"
                                value={stateEmployee.salary} />
                        </section>

                        <section className="create-account-container">
                            <input
                                className="create-account-button"
                                type="submit"
                                value="Create Account" />
                        </section>

                    </section>

                    {successMessage && (
                        <Stack>
                            <Alert severity="success">
                                {successMessage}
                            </Alert>
                        </Stack>
                    )}
                    {errorMessage && (
                        <Stack>
                            <Alert severity="info">
                                {errorMessage}
                            </Alert>
                        </Stack>
                    )}

                </form>
            </section>
        </>
    );
};

export default CreateAccountForm;