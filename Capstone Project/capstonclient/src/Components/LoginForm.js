import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import LockIcon from '@mui/icons-material/Lock';

const LoginForm = ({ listOfEmployees, setCurrentUser }) => {
  const navigate = useNavigate();
  const [stateLogin, setStateLogin] = useState({
    email: "",
    password: "",
  });
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const foundEmployee = listOfEmployees.find(
      (employee) =>
        employee.email === stateLogin.email &&
        employee.password === stateLogin.password
    );
    if (foundEmployee) {
      alert("Login successful");
      setCurrentUser(foundEmployee);
      navigate("/dashboard");
    } else {
      alert("Email or password is not correct");
      setStateLogin({ email: "", password: "" });
    }
  };
  const handleChange = (event) => {
    let fieldName = event.target.name;
    let copiedEmployee = { ...stateLogin };
    copiedEmployee[fieldName] = event.target.value;
    setStateLogin(copiedEmployee);
  };
  return (
    <section className="login">
      <form onSubmit={handleFormSubmit} id="login-form">
        <Avatar> <LockIcon/></Avatar>
        <h2>Login</h2>
        <label htmlFor="email">Email: </label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={handleChange}
          value={stateLogin.email}
        />
        <label htmlFor="password">Password: </label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={handleChange}
          value={stateLogin.password}
        />
        <input type="submit" value="Sign in" id="signin-button" />
      </form>
    </section>

  );
};
export default LoginForm;
