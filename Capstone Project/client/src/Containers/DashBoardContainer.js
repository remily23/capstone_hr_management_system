import { useEffect, useState } from "react";
import CreateAccountForm from "../Components/CreateAccountForm";
import LoginForm from "../Components/LoginForm";
import ProfilePage from "../Components/ProfilePage";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Navigation from "../Components/Navigation";
import DashBoard from "../Components/DashBoard";
import UpdateEmployeeForm from "../Components/UpdateEmployeeForm";
import DeleteAccount from "../Components/DeleteAccount";

const DashBoardContainer = () => {

  const [listOfEmployees, setListOfEmployees] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [listOfPositions, setListOfPositions] = useState([]);
  
  const fetchEmployee = async () => {
    const response = await fetch("http://localhost:8080/employees");
    const data = await response.json();
    setListOfEmployees(data);
  };

  const fetchPositions = async () => {
    const response = await fetch("http://localhost:8080/positions");
    const data = await response.json();
    setListOfPositions(data);
  }

  const postEmployee = async (newEmployee) => {
    const response = await fetch("http://localhost:8080/employees", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEmployee),
    });
    const addEmployee = await response.json();
    setListOfEmployees([...listOfEmployees, addEmployee]);
  };

  const updateEmployee = async (id, employee) => {
    const response = await fetch(`http://localhost:8080/employees/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(employee),
    });
    const updateDetails = await response.json();
    setListOfEmployees([...listOfEmployees, updateDetails]);
    setCurrentUser(updateDetails);
  };

  const deleteEmployee = async (id) => {
    const response = await fetch(`http://localhost:8080/employees/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    const deleteDetails = await response.json();
    const updatedEmployees = [...listOfEmployees];
    const employeeToRemove = updatedEmployees.find(employee => employee.id===deleteDetails);
    const indexToRemove = updatedEmployees.indexOf(employeeToRemove);
    updatedEmployees.splice(indexToRemove);
    setListOfEmployees(updatedEmployees);
  };

  const mappedEmployees = listOfEmployees.map(employee => ({
    id: employee.id, 
    firstName: employee.firstName,
    lastName: employee.lastName,
    email: employee.email,
  }));

  useEffect(() => {
    fetchEmployee();
    fetchPositions();
  }, []);

  const appRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/login" />,
    },
    {
      path: "/login",
      element: (
        <LoginForm
          listOfEmployees={listOfEmployees}
          setCurrentUser={setCurrentUser}
        />
      ),
    },
    {
      path: "/",
      element: <Navigation />,
      children: [
        {
          path: "dashboard",
          element: <DashBoard currentUser={currentUser} mappedEmployees={mappedEmployees}/>,
        },
        {
          path: "newAccount",
          element: (
            <CreateAccountForm
              postEmployee={postEmployee}
              listOfPositions={listOfPositions}
            />
          ),
        },
        {
          path: "profile",
          element: <ProfilePage currentUser={currentUser} />,
        },
        {
          path: "/profile/updateDetails",
          element: <UpdateEmployeeForm updateEmployee={updateEmployee} listOfPositions={listOfPositions} />,
        },
        {
          path: "/deleteAccount",
          element: (
            <DeleteAccount
              deleteEmployee={deleteEmployee}
              currentUser={currentUser}
            />
          ),
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={appRoutes} />
    </>
  );
};

export default DashBoardContainer;