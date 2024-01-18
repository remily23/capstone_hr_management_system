import React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
const LoginForm = ({ listOfEmployees, setCurrentUser }) => {
  const navigate = useNavigate();
  const [stateLogin, setStateLogin] = useState({
    email: "",
    password: "",
  });
const location = useLocation();
// const user =location.state.currentUser;
  const [error, setError] = useState(null);
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // window.location.reload();
    const foundEmployee = listOfEmployees.find(
      (employee) => employee.email === stateLogin.email
    );
    if (!foundEmployee) {
      setError("User is not found");
    } else if (foundEmployee.password !== stateLogin.password) {
      setError("User exists but the password is incorrect!");
      setStateLogin({ email: "", password: "" });
    } else {
      setCurrentUser(foundEmployee);
      navigate("/dashboard");
    }
  };
  const handleChange = (event) => {
    let fieldName = event.target.name;
    let copiedEmployee = { ...stateLogin };
    copiedEmployee[fieldName] = event.target.value;
    setStateLogin(copiedEmployee);
  };
  return (
    <Container component="main" maxWidth="xs"
    sx={{
      backgroundColor: '#F5F5F5',
    }}
    >
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "brown", }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        {error && (
          <Stack>
            <Alert severity="error">{error}</Alert>
          </Stack>
        )}
        <Box
          component="form"
          onSubmit={handleFormSubmit}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChange}
            value={stateLogin.email}  
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
            value={stateLogin.password}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, bgcolor: "#4CAF50" }}
          >
            Log In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
export default LoginForm;