import { useEffect, useState } from "react";
import CreateAccountForm from "../Components/CreateAccountForm";

const DashBoardContainer = () => {

 const[currentUser, setCurrentUser] = useState("");
 const [stateEmail, setStateEmail] = useState("");
 const [listOfEmployees, setListOfEmployees] = useState([]);

 const fetchEmployee = async() => {
    const response =  await fetch ("http://localhost:8080/employees")
    const data = await response.json()
    setCurrentUser(data)
 }

 const postEmployee = async(newEmployee) => {
   const response = await fetch ("http://localhost:8080/employees", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newEmployee),
   })
   const addEmployee = await response.json()
   setListOfEmployees([...listOfEmployees, addEmployee]);
 }



 useEffect (()=> {

   fetchEmployee();
 }, [])

    return ( 

        <>
        <h2>Welcome Page</h2>
        <CreateAccountForm currentUser= {currentUser[0]} postEmployee= {postEmployee}/>
        </>
     );
}
 
export default DashBoardContainer;