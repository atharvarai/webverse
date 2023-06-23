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
    localStorage.setItem('jwtToken', token);
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
          handleLoginSuccess(data.token);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="regNo" style={styles.label}>
            Registration Number
          </label>
          <input
            type="text"
            id="regNo"
            value={regNo}
            onChange={handleRegnoChange}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="password" style={styles.label}>
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            style={styles.input}
          />
        </div>
        <div style={styles.buttonContainer}>
          <button type="submit" style={styles.loginButton}>
            Login
          </button>
          <button
            type="button"
            style={styles.registerButton}
            onClick={() => navigate('/register')}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
  },
  heading: {
    marginBottom: '30px',
    fontFamily: 'Arial, sans-serif',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '300px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '6px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  formGroup: {
    marginBottom: '15px',
    width: '100%',
  },
  label: {
    marginBottom: '5px',
    fontFamily: 'Arial, sans-serif',
    fontSize: '14px',
    color: '#555',
  },
  input: {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontFamily: 'Arial, sans-serif',
    fontSize: '14px',
    color: '#333',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
    width: '100%',
  },
  loginButton: {
    padding: '10px 20px',
    borderRadius: '4px',
    border: 'none',
    fontFamily: 'Arial, sans-serif',
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#007bff',
    cursor: 'pointer',
  },
  registerButton: {
    padding: '10px 20px',
    borderRadius: '4px',
    border: 'none',
    fontFamily: 'Arial, sans-serif',
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#333',
    backgroundColor: '#e9ecef',
    cursor: 'pointer',
  },
};
