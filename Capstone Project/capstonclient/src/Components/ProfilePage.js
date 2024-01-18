import { useNavigate, Outlet } from "react-router-dom";
import { Alert, Stack } from "@mui/material";
import AlertTitle from "@mui/material/AlertTitle";
import Avatar from "@mui/material/Avatar";
import stockimage from "../stockimage.jpeg";
const ProfilePage = ({ currentUser }) => {
  const navigate = useNavigate();
  const toUpdateEmployeeForm = () => {
    navigate("/profile/updateDetails", { state: { currentUser } });
  };
  return (
    <section className="profile-container">
      <Avatar
        className="profile-image"
        src={stockimage}
        alt="stock img"
        sx={{ width: 70, height: 70 }}
      />
      <h3>My Profile</h3>
      <p>First Name: {currentUser.firstName}</p>
      <p>Last Name: {currentUser.lastName}</p>
      <p>Email: {currentUser.email}</p>
      <p>Date of Birth: {currentUser.dateOfBirth}</p>
      <p>Address: {currentUser.address}</p>
      <p>Phone Number: {currentUser.phoneNumber}</p>
      <p>Pro Rata: {currentUser.proRata}</p>
      <p>Salary: {currentUser.salary}</p>
      <button className="edit-button" onClick={toUpdateEmployeeForm}>
        Edit
      </button>
    </section>
  );
};
export default ProfilePage;