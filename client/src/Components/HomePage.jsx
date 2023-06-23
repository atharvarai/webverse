import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogin = (category) => {
    navigate(`/${category.toLowerCase()}-login`);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
      }}
    >
      <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#fff', borderRadius: '6px' }}>
        <h1>Welcome to VIT University</h1>
        <h2>Hostel Management System</h2>
        <button style={styles.button} onClick={() => handleLogin('Student')}>
          Student Login
        </button>
        <button style={styles.button} onClick={() => handleLogin('Warden')}>
          Warden Login
        </button>
        <button style={styles.button} onClick={() => handleLogin('Faculty')}>
          Faculty Login
        </button>
      </div>
    </div>
  );
};

const styles = {
  button: {
    padding: '10px 20px',
    borderRadius: '4px',
    border: 'none',
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#007bff',
    cursor: 'pointer',
    margin: '10px',
  },
};

export default HomePage;
