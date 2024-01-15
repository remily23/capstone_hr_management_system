import { useEffect, useState } from "react";
import CreateAccountForm from "../Components/CreateAccountForm";
import LoginForm from "../Components/LoginForm";
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
   return (
      <>
         <h2>Welcome Page</h2>
         <CreateAccountForm listOfEmployees= {listOfEmployees[0]} postEmployee={postEmployee} />
         <LoginForm listOfEmployees= {listOfEmployees}/>
      </>
   );
}
export default DashBoardContainer;














