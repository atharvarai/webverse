import React, { useState } from 'react';
import withAuth from './WithAuth';
import ViewLeave from './ViewLeave';

const ApplyLeaveView = ({ token }) => {
  const [leaveType, setLeaveType] = useState('');
  const [leaveDate, setLeaveDate] = useState('');
  const [leaveTime, setLeaveTime] = useState('');
  const [leaveDuration, setLeaveDuration] = useState('');

  const handleLeaveTypeChange = (e) => {
    setLeaveType(e.target.value);
  };

  const handleLeaveDateChange = (e) => {
    setLeaveDate(e.target.value);
  };

  const handleLeaveTimeChange = (e) => {
    setLeaveTime(e.target.value);
  };

  const handleLeaveDurationChange = (e) => {
    setLeaveDuration(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const leaveApplication = {
      leaveType,
      leaveDate,
      leaveTime,
      leaveDuration
    };

    fetch('http://localhost:8000/api/v1/student/leave/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(leaveApplication)
    })
      .then(response => response.json())
      .then(data => {
        //console.log(data); 
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Apply Leave</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="leaveType" style={styles.label}>Leave Type:</label>
          <input
            type="text"
            id="leaveType"
            value={leaveType}
            onChange={handleLeaveTypeChange}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="leaveDate" style={styles.label}>Leave Date:</label>
          <input
            type="text"
            id="leaveDate"
            value={leaveDate}
            onChange={handleLeaveDateChange}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="leaveTime" style={styles.label}>Leave Time:</label>
          <input
            type="text"
            id="leaveTime"
            value={leaveTime}
            onChange={handleLeaveTimeChange}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="leaveDuration" style={styles.label}>Leave Duration:</label>
          <input
            type="text"
            id="leaveDuration"
            value={leaveDuration}
            onChange={handleLeaveDurationChange}
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>Apply</button>
      </form>
      <ViewLeave />
    </div>
  );
};

export default withAuth(ApplyLeaveView);

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '400px',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '8px',
  },
  input: {
    padding: '10px',
    fontSize: '14px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#4285F4',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};
