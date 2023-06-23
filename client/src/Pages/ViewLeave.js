import React, { useEffect, useState } from 'react';
import withAuth from './WithAuth';

const LeaveDetailsView = ({ token }) => {
  const [leaveDetails, setLeaveDetails] = useState(null);

  useEffect(() => {
    const fetchLeaveDetails = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/v1/student/leave/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        });
        
        if (response.ok) {
          const data = await response.json();
          console.log(data); // Check the data received in the console
          if (data.message === 'Success') {
            setLeaveDetails(data.data);
          } else {
            console.error('Error:', data.message);
          }
        } else {
          console.error('Error:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchLeaveDetails();
  }, [token]);

  return (
    <div>
      <h2>Leave Details</h2>
      {leaveDetails ? (
        leaveDetails.map((leave) => (
          <div key={leave.id}>
          <p>Leave id : {leave.id}</p>
            <p>Leave Type: {leave.leaveType}</p>
            <p>Leave Date: {leave.leaveDate}</p>
            <p>Leave Time: {leave.leaveTime}</p>
            <p>Leave Duration: {leave.LeaveDuration}</p>
            <p>Is Approved: {leave.isApproved ? 'Yes' : 'No'}</p>
            <p>Is Rejected: {leave.isRejected ? 'Yes' : 'No'}</p>
          </div>
        ))
      ) : (
        <p>Loading leave details...</p>
      )}
    </div>
  );
};

export default withAuth(LeaveDetailsView);
