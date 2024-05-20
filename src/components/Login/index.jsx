
import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'; // Import styled-components
import { path } from '../../host';
import './styles.css'
// Define a styled form component
const StyledForm = styled(Form)`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;

  // Custom styles for form labels
  label {
    font-weight: bold;
    color: #333;
  }

  // Custom styles for form controls
  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-sizing: border-box;
  }

  // Custom styles for submit button
  button[type="submit"] {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button[type="submit"]:hover {
    background-color: #0056b3;
  }
`;

// Style the default Button component from React Bootstrap
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

  &.btn-secondary {
    background-color: #6c757d;
    color: #fff;

    &:hover {
      background-color: #5a6268;
    }
  }
`;

function Login({ setAuth }) {
  const [loginName, setLoginName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${path}admin/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ login_name: loginName, password }),
    });

    const data = await response.json();
    if (response.ok) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user)); 
      setAuth({ loggedIn: true, user: data.user });
      navigate(`/users/${data.user._id}`);
    }
  };

  const handleRegisterRedirect = () => {
    navigate('/register'); 
  };

  return (
    <Container>
      <h3 className="login-heading">Login</h3>
      {/* Replace Form with StyledForm */}
      <StyledForm onSubmit={handleSubmit}>
        <Form.Group controlId="loginName">
          <Form.Label>Login Name</Form.Label>
          <Form.Control type="text" placeholder="Enter login name" value={loginName} onChange={e => setLoginName(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.target.value)} />
        </Form.Group>
        {/* Use StyledButton instead */}
        <StyledButton type="submit">Login</StyledButton>
      </StyledForm>
      <div className="mt-3">
        {/* Use StyledButton for register button */}
        <StyledForm >
        <StyledButton variant="secondary" onClick={handleRegisterRedirect}>
          Register
        </StyledButton>
        </StyledForm>
        
      </div>
    </Container>
  );
}

export default Login;






// import React, { useState } from 'react';
// import { Form, Button, Container } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import { path } from '../../host';
// function Login({ setAuth }) {
//   const [loginName, setLoginName] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate(); 
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch(`${path}admin/login`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ login_name: loginName, password }),
//     });

//     const data = await response.json();
//     if (response.ok) {
//       localStorage.setItem('token', data.token);
//       localStorage.setItem('user', JSON.stringify(data.user)); 
//       setAuth({ loggedIn: true, user: data.user });
//       navigate(`/users/${data.user._id}`);
//     }
//   };

//   const handleRegisterRedirect = () => {
//     navigate('/register'); 
//   };

//   return (
//     <Container>
//       <h3>Login</h3>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="loginName">
//           <Form.Label>Login Name</Form.Label>
//           <Form.Control type="text" placeholder="Enter login name" value={loginName} onChange={e => setLoginName(e.target.value)} />
//         </Form.Group>
//         <Form.Group controlId="password">
//           <Form.Label>Password</Form.Label>
//           <Form.Control type="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.target.value)} />
//         </Form.Group>
//         <Button variant="primary" type="submit">Login</Button>
//       </Form>
//       <div className="mt-3">
//         <Button variant="secondary" onClick={handleRegisterRedirect}>
//           Register
//         </Button>
//       </div>
//     </Container>
//   );
// }

// export default Login;