const CreateAccountForm = ({currentUser}) => {     return ( 

    <>
    <h1>CreateAccountPage</h1>
    <div>
        {currentUser && (
            <p>{currentUser.firstName}</p>
        )}
    </div>

    
    </>
 );
}
 export default CreateAccountForm ; 