import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [regNo, setRegNo] = useState('');
  const [password, setPassword] = useState('');

  const handleRegnoChange = (e) => {
    setRegNo(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginSuccess = (token) => {
    // Store the token in localStorage or sessionStorage
    localStorage.setItem('jwtToken', token);
    // Redirect to the HomePage after successful login
    navigate('/Dashboard');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const loginData = {
      regNo,
      password,
    };

    fetch('http://localhost:8000/api/v1/student/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.token) {
          // Call the handleLoginSuccess function and pass the token
          handleLoginSuccess(data.token);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="regNo">Registration Number:</label>
          <input
            type="text"
            id="regNo"
            value={regNo}
            onChange={handleRegnoChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Login</button>
        <button type="register" onClick={() => navigate('/register')}>
          Register
        </button>
        
      </form>
    </div>
  );
}

export default Login;
