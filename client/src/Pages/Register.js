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
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label htmlFor="regNo">Registration Number:</label>
          <input
            type="text"
            id="regNo"
            value={regNo}
            onChange={handleRegNoChange}
          />
        </div>
        <div>
          <label htmlFor="block">Block:</label>
          <input
            type="text"
            id="block"
            value={block}
            onChange={handleBlockChange}
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
        <div>
          <label htmlFor="roomNo">Room Number:</label>
          <input
            type="text"
            id="roomNo"
            value={roomNo}
            onChange={handleRoomNoChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
