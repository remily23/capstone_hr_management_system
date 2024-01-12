import { useEffect, useState } from "react";
import CreateAccountForm from "../Components/CreateAccountForm";

const DashBoardContainer = () => {

 const[currentUser, setCurrentUser] = useState("");
 const [stateEmail, setStateEmail] = useState("")

 const fetchEmployee = async() => {
    const response =  await fetch ("http://localhost:8080/employees")
    const data = await response.json()
    setCurrentUser(data)

 }


 useEffect (()=> {

   fetchEmployee();
 }, [])

    return ( 

        <>
        <h2>Welcome Page</h2>
        <CreateAccountForm currentUser= {currentUser}/>
        </>
     );
}
 
export default DashBoardContainer;