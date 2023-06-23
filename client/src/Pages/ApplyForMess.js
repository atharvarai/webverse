import React, { useState, useEffect } from 'react';
import withAuth from './WithAuth';

const MessDetailsView = ({ token }) => {
  const [messDetails, setMessDetails] = useState(null);
  const [toBeChangedTo, setToBeChangedTo] = useState('');

  useEffect(() => {
    // Fetch mess details initially
    fetchMessDetails();
  }, []);

  const fetchMessDetails = () => {
    fetch('http://localhost:8000/api/v1/student/mess-details/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data && data.data) {
          setMessDetails(data.data);
        } else {
          setMessDetails(null);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const handleToBeChangedToChange = (e) => {
    setToBeChangedTo(e.target.value);
  };

  const handleUpdateMessDetails = (e) => {
    e.preventDefault();

    if (!messDetails) {
      console.error('No mess details available.');
      return;
    }

    const updatedMessDetails = {
      ...messDetails,
      toBeChangedTo
    };

    fetch(`http://localhost:8000/api/v1/student/mess-details/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(updatedMessDetails)
    })
      .then(response => response.json())
      .then(data => {
        setMessDetails(data.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <h2>Mess Details</h2>
      {messDetails !== null ? (
        <div>
          <p>Current Mess: {messDetails}</p> {/* Display current mess */}
          <form onSubmit={handleUpdateMessDetails}>
            <div>
              <label htmlFor="toBeChangedTo">To Be Changed To:</label>
              <input
                type="text"
                id="toBeChangedTo"
                value={toBeChangedTo}
                onChange={handleToBeChangedToChange}
              />
            </div>
            <button type="submit">Update</button>
          </form>
        </div>
      ) : (
        <p>No mess details available.</p>
      )}
    </div>
  );
};

export default withAuth(MessDetailsView);
