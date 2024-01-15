import { useEffect, useState } from "react";
import CreateAccountForm from "../Components/CreateAccountForm";
import LoginForm from "../Components/LoginForm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navigation from "../Components/Navigation";
import DashBoard from "../Components/DashBoard";

const DashBoardContainer = () => {
   const [listOfEmployees, setListOfEmployees] = useState([]);
   const fetchEmployee = async () => {
      const response = await fetch("http://localhost:8080/employees")
      const data = await response.json()
      setListOfEmployees(data)
   }
   const postEmployee = async (newEmployee) => {
      const response = await fetch("http://localhost:8080/employees", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(newEmployee),
      })
      const addEmployee = await response.json()
      setListOfEmployees([...listOfEmployees, addEmployee]);
   }
   useEffect(() => {
      fetchEmployee();
   }, [])

   const appRoutes = createBrowserRouter ([
      {path:"/", 
            element: <Navigation/>,
            children: [

               {
                  path: "/home",
                  element: <DashBoard/>
               },
               {
                  path: "/newaccount",
                  element: <CreateAccountForm listOfEmployees= {listOfEmployees[0]} postEmployee={postEmployee} />
               },
               {
                  path: "/login",
                  element: <LoginForm listOfEmployees= {listOfEmployees}/>
               }
            ]
      }

      ])
   return (

      <>
        < RouterProvider router = {appRoutes} />

      </>
   );
}
export default DashBoardContainer;














