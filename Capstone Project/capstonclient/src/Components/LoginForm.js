import { useState } from "react";
const LoginForm = ({ listOfEmployees }) => {
  const [stateLogin, setStateLogin] = useState({
    email: "",
    password: ""
  });
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const foundEmployee = listOfEmployees.find(
      (employee) => employee.email === stateLogin.email && employee.password === stateLogin.password
    );
    if (foundEmployee) {
      alert("Login successful");
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
    <form onSubmit={handleFormSubmit}>
      <h2>Login</h2>
      <label>Email: </label>
      <input
        name="email"
        type="email"
        onChange={handleChange}
        value={stateLogin.email}
      />
      <label>Password: </label>
      <input
        name="password"
        type="password"
        onChange={handleChange}
        value={stateLogin.password}
      />
      <input type="submit" value="Sign in" />
    </form>
  );
};
export default LoginForm;