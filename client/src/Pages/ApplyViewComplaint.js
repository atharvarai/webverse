import React, { useState } from 'react';
import withAuth from './WithAuth';
import ComplaintsView from './ViewComplaints';

const ApplyComplaintView = ({ token }) => {
  const [complaintType, setComplaintType] = useState('');
  const [complaintDate, setComplaintDate] = useState('');
  const [complaintDescription, setComplaintDescription] = useState('');
  const [complaintSeverity, setComplaintSeverity] = useState('');

  const handleComplaintTypeChange = (e) => {
    setComplaintType(e.target.value);
  };

  const handleComplaintDateChange = (e) => {
    setComplaintDate(e.target.value);
  };

  const handleComplaintDescriptionChange = (e) => {
    setComplaintDescription(e.target.value);
  };

  const handleComplaintSeverityChange = (e) => {
    setComplaintSeverity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const complaint = {
      complaintType,
      complaintDate,
      complaintDescription,
      complaintSeverity
    };

    fetch('http://localhost:8000/api/v1/student/complaint/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(complaint)
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
      <h2 style={styles.heading}>Apply Complaint</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="complaintType" style={styles.label}>Complaint Type:</label>
          <input
            type="text"
            id="complaintType"
            value={complaintType}
            onChange={handleComplaintTypeChange}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="complaintDate" style={styles.label}>Complaint Date:</label>
          <input
            type="text"
            id="complaintDate"
            value={complaintDate}
            onChange={handleComplaintDateChange}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="complaintDescription" style={styles.label}>Complaint Description:</label>
          <input
            type="text"
            id="complaintDescription"
            value={complaintDescription}
            onChange={handleComplaintDescriptionChange}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="complaintSeverity" style={styles.label}>Complaint Severity:</label>
          <input
            type="text"
            id="complaintSeverity"
            value={complaintSeverity}
            onChange={handleComplaintSeverityChange}
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>Apply</button>
      </form>
      <ComplaintsView />
    </div>
  );
};

export default withAuth(ApplyComplaintView);

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
    width: '100%',
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
