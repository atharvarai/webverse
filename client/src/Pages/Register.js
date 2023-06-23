import React, { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [regNo, setRegNo] = useState('');
  const [block, setBlock] = useState('');
  const [password, setPassword] = useState('');
  const [roomNo, setRoomNo] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleRegNoChange = (e) => {
    setRegNo(e.target.value);
  };

  const handleBlockChange = (e) => {
    setBlock(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRoomNoChange = (e) => {
    setRoomNo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const registrationData = {
      name,
      regNo,
      block,
      password,
      roomNo
    };

    fetch('http://localhost:8000/api/v1/student/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(registrationData)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Register</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="name" style={styles.label}>Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="regNo" style={styles.label}>Registration Number:</label>
          <input
            type="text"
            id="regNo"
            value={regNo}
            onChange={handleRegNoChange}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="block" style={styles.label}>Block:</label>
          <input
            type="text"
            id="block"
            value={block}
            onChange={handleBlockChange}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="password" style={styles.label}>Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="roomNo" style={styles.label}>Room Number:</label>
          <input
            type="text"
            id="roomNo"
            value={roomNo}
            onChange={handleRoomNoChange}
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>Register</button>
      </form>
    </div>
  );
};

export default Register;

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
  button: {
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
};
