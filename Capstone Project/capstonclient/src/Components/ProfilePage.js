import { useNavigate, Outlet } from 'react-router-dom';
import { Alert, Stack } from "@mui/material";
import AlertTitle from '@mui/material/AlertTitle';

const ProfilePage = ({currentUser}) => {
    const navigate = useNavigate();

    const toUpdateEmployeeForm = () => {
        navigate('/profile/updateDetails', {state: {currentUser}})
    }
    return ( 
    <>
        <h3>Profile Page</h3>
        <p>First name: {currentUser.firstName}</p>
        <p>Last name: {currentUser.lastName}</p>
        <p>Email: {currentUser.email}</p>
        <p>Date of birth: {currentUser.dateOfBirth}</p>
        <p>Address: {currentUser.address}</p>
        <p>Phone number: {currentUser.phoneNumber}</p>
        <p>Pro rota: {currentUser.proRota}</p>
        <p>Salary: {currentUser.salary}</p>
        <button onClick={toUpdateEmployeeForm}>Edit</button>
        <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          Account deleted
        </Alert>
      </Stack>
        </>
     );
     
}
 
export default ProfilePage;