import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'; // Import styled-components
import { path } from "../../host";

// Styled components for Bootstrap components
const StyledContainer = styled(Container)`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const StyledForm = styled(Form)`
  margin-bottom: 20px;
`;

const StyledButton = styled(Button)`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &.btn-primary {
    background-color: #007bff;
    color: #fff;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const StyledAlert = styled(Alert)`
  margin-bottom: 20px;
`;

const StyledFormGroup = styled(Form.Group)`
  margin-bottom: 20px;
`;

const StyledFormLabel = styled(Form.Label)`
  font-weight: bold;
`;

const StyledFormControl = styled(Form.Control)`
  padding: 10px;
  border-radius: 4px;
`;

function Register() {
  const navigate = useNavigate();
  const [loginName, setLoginName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [occupation, setOccupation] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!loginName || !password || !confirmPassword || !firstName || !lastName) {
      setErrorMessage("All fields must be filled");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }
    if (password.length < 6 || !/[A-Z]/.test(password)) {
      setErrorMessage("Password must be at least 6 characters and contain at least one uppercase letter");
      return;
    }

    const response = await fetch(`${path}admin/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        login_name: loginName,
        password: password,
        first_name: firstName,
        last_name: lastName,
        location: location,
        description: description,
        occupation: occupation
      }),
    });

    const data = await response.json();
    if (response.ok) {
      setSuccessMessage("User registered successfully");
      navigate("/")
      setErrorMessage("");
      setLoginName("");
      setPassword("");
      setConfirmPassword("");
      setFirstName("");
      setLastName("");
      setLocation("");
      setDescription("");
      setOccupation("");
    } else {
      setErrorMessage(data.error);
      setSuccessMessage("");
    }
  };

  return (
    <StyledContainer>
      {/* Use the class name from the imported CSS file */}
      <h3 className="register-heading">Register</h3>
      {errorMessage && <StyledAlert variant="danger">{errorMessage}</StyledAlert>}
      {successMessage && <StyledAlert variant="success">{successMessage}</StyledAlert>}
      <StyledForm onSubmit={handleSubmit}>
        <StyledFormGroup controlId="loginName">
          <StyledFormLabel>Login Name</StyledFormLabel>
          <StyledFormControl
            type="text"
            placeholder="Enter login name"
            value={loginName}
            onChange={(e) => setLoginName(e.target.value)}
            required
          />
        </StyledFormGroup>
        <StyledFormGroup controlId="password">
          <StyledFormLabel>Password</StyledFormLabel>
          <StyledFormControl
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </StyledFormGroup>
        <StyledFormGroup controlId="confirmPassword">
          <StyledFormLabel>Confirm Password</StyledFormLabel>
          <StyledFormControl
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </StyledFormGroup>
        <StyledFormGroup controlId="firstName">
          <StyledFormLabel>First Name</StyledFormLabel>
          <StyledFormControl
            type="text"
            placeholder="Enter first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </StyledFormGroup>
        <StyledFormGroup controlId="lastName">
          <StyledFormLabel>Last Name</StyledFormLabel>
          <StyledFormControl
            type="text"
            placeholder="Enter last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </StyledFormGroup>
        <StyledFormGroup controlId="location">
          <StyledFormLabel>Location</StyledFormLabel>
          <StyledFormControl
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </StyledFormGroup>
        <StyledFormGroup controlId="description">
          <StyledFormLabel>Description</StyledFormLabel>
          <StyledFormControl
            as="textarea"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </StyledFormGroup>
        <StyledFormGroup controlId="occupation">
          <StyledFormLabel>Occupation</StyledFormLabel>
          <StyledFormControl
            type="text"
            placeholder="Enter occupation"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
          />
        </StyledFormGroup>
        <StyledButton variant="primary" type="submit">
          Register
        </StyledButton>
      </StyledForm>
    </StyledContainer>
  );
}

export default Register;





// import React, { useState } from "react";
// import { Form, Button, Container, Alert } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import { path } from "../../host";

// function Register() {
//   const navigate = useNavigate();
//   const [loginName, setLoginName] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [location, setLocation] = useState("");
//   const [description, setDescription] = useState("");
//   const [occupation, setOccupation] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!loginName || !password || !confirmPassword || !firstName || !lastName) {
//       setErrorMessage("All fields must be filled");
//       return;
//     }

//     if (password !== confirmPassword) {
//       setErrorMessage("Passwords do not match");
//       return;
//     }
//     if (password.length < 6 || !/[A-Z]/.test(password)) {
//       setErrorMessage("Password must be at least 6 characters and contain at least one uppercase letter");
//       return;
//     }

//     const response = await fetch(`${path}admin/register`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         login_name: loginName,
//         password: password,
//         first_name: firstName,
//         last_name: lastName,
//         location: location,
//         description: description,
//         occupation: occupation
//       }),
//     });

//     const data = await response.json();
//     if (response.ok) {
//       setSuccessMessage("User registered successfully");
//       navigate("/")
//       setErrorMessage("");
//       setLoginName("");
//       setPassword("");
//       setConfirmPassword("");
//       setFirstName("");
//       setLastName("");
//       setLocation("");
//       setDescription("");
//       setOccupation("");
//     } else {
//       setErrorMessage(data.error);
//       setSuccessMessage("");
//     }
//   };

//   return (
//     <Container>
//       <h3>Register</h3>
//       {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
//       {successMessage && <Alert variant="success">{successMessage}</Alert>}
//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="loginName">
//           <Form.Label>Login Name</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter login name"
//             value={loginName}
//             onChange={(e) => setLoginName(e.target.value)}
//             required
//           />
//         </Form.Group>
//         <Form.Group controlId="password">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Enter password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </Form.Group>
//         <Form.Group controlId="confirmPassword">
//           <Form.Label>Confirm Password</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Confirm password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//           />
//         </Form.Group>
//         <Form.Group controlId="firstName">
//           <Form.Label>First Name</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter first name"
//             value={firstName}
//             onChange={(e) => setFirstName(e.target.value)}
//             required
//           />
//         </Form.Group>
//         <Form.Group controlId="lastName">
//           <Form.Label>Last Name</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter last name"
//             value={lastName}
//             onChange={(e) => setLastName(e.target.value)}
//           />
//         </Form.Group>
//         <Form.Group controlId="location">
//           <Form.Label>Location</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter location"
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//           />
//         </Form.Group>
//         <Form.Group controlId="description">
//           <Form.Label>Description</Form.Label>
//           <Form.Control
//             as="textarea"
//             placeholder="Enter description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//         </Form.Group>
//         <Form.Group controlId="occupation">
//           <Form.Label>Occupation</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter occupation"
//             value={occupation}
//             onChange={(e) => setOccupation(e.target.value)}
//           />
//         </Form.Group>
//         <Button variant="primary" type="submit">
//           Register
//         </Button>
//       </Form>
//     </Container>
//   );
// }

// export default Register;
