

const ProfilePage = ({currentUser}) => {
    return ( 
    <>
        <h3>Profile page</h3>
        <p>First name: {currentUser.firstName}</p>
        <p>Last name: {currentUser.lastName}</p>
        <p>Email: {currentUser.email}</p>
        <p>Password: ********</p>
        <p>Date of birth: {currentUser.dateOfBirth}</p>
        <p>Address: {currentUser.adress}</p>
        <p>Phone number: {currentUser.phoneNumber}</p>
        <p>Pro rota: {currentUser.proRota}</p>
        <p>Salary: {currentUser.proRota}</p>
        <button>Edit</button>

        </>
     );
     
}
 
export default ProfilePage;