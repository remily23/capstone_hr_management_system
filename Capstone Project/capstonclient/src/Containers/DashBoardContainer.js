import { useEffect, useState } from "react";
import CreateAccountForm from "../Components/CreateAccountForm";
import LoginForm from "../Components/LoginForm";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Navigation from "../Components/Navigation";
import DashBoard from "../Components/DashBoard";

const DashBoardContainer = () => {
  const [listOfEmployees, setListOfEmployees] = useState([]);
  const [currentUser, setCurrentUser] = useState({})
  const fetchEmployee = async () => {
    const response = await fetch("http://localhost:8080/employees");
    const data = await response.json();
    setListOfEmployees(data);
  };
  const postEmployee = async (newEmployee) => {
    const response = await fetch("http://localhost:8080/employees", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEmployee),
    });
    const addEmployee = await response.json();
    setListOfEmployees([...listOfEmployees, addEmployee]);
  };
  useEffect(() => {
    fetchEmployee();
  }, []);

  const appRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/login" />,
    },

    {
      path: "/login",
      element: <LoginForm listOfEmployees={listOfEmployees} setCurrentUser={setCurrentUser} />,
    },

    {
      path: "/",
      element: <Navigation />,
      children: [
        {
          path: "/dashboard",
          element: <DashBoard currentUser = {currentUser} />,
        },

        {
          path: "/newaccount",
          element: (
            <CreateAccountForm
              listOfEmployees={listOfEmployees[0]}
              postEmployee={postEmployee}
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
