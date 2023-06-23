import React, { useEffect } from 'react';
import withAuth from './WithAuth';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ token }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/');
    }
  }, [token, navigate]);

  const handleApplyLeaveView = () => {
    console.log(token);
    navigate('/applyviewleave');
  };

  const handleApplyComplaintView = () => {
    console.log(token);
    navigate('/applyviewcomplaint');
  };

  const handleApplyRoomView = () => {
    console.log(token);
    navigate('/applyviewroom');
  };

  const handleApplyCoursesView = () => {
    console.log(token);
    navigate('/courses');
  };

  const handleApplyMess = () => {
    console.log(token);
    navigate('/mess');
  };

  const handleEvents = () => {
    console.log(token);
    navigate('/events');
  };

  return (
    <div style={styles.container}>
      {token ? (
        <div style={styles.dashboard}>
          <h2 style={styles.heading}>Hi, how are you?</h2>
          <div style={styles.buttonsContainer}>
            <button type="button" style={styles.button} onClick={handleApplyLeaveView}>
              Apply Leave View
            </button>
            <button type="button" style={styles.button} onClick={handleApplyComplaintView}>
              Apply Complaint View
            </button>
            <button type="button" style={styles.button} onClick={handleApplyRoomView}>
              Apply Room view
            </button>
            <button type="button" style={styles.button} onClick={handleApplyCoursesView}>
              Apply Courses view
            </button>
            <button type="button" style={styles.button} onClick={handleApplyMess}>
              Apply Mess
            </button>
            <button type="button" style={styles.button} onClick={handleEvents}>
              Events
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default withAuth(Dashboard);

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
  },
  dashboard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '6px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    marginBottom: '30px',
    fontFamily: 'Arial, sans-serif',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
  },
  buttonsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '20px',
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
