import React, { useState, useEffect } from 'react';
import withAuth from './WithAuth';
import ComplaintsView from './ViewComplaints';

const WardenDetailsView = ({ token }) => {
  const [wardenDetails, setWardenDetails] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/api/v1/warden/me/', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setWardenDetails(data.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [token]);

  if (!wardenDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Warden Details</h2>
      <p>Name: {wardenDetails.name}</p>
      <p>Block: {wardenDetails.block}</p>
      <h3>Complaints</h3>
      <ul>
        {wardenDetails.complaint.map((complaint) => (
          <li key={complaint.id}>
            <p>Type: {complaint.complaintType}</p>
            <p>Date: {complaint.complaintDate}</p>
            <p>Description: {complaint.complaintDescription}</p>
            <p>Severity: {complaint.complaintSeverity}</p>
            <p>Resolved: {complaint.isResolved ? 'Yes' : 'No'}</p>
          </li>
        ))}
      </ul>
      <h3>Leaves</h3>
      <ul>
        {wardenDetails.leave.map((leave) => (
          <li key={leave.id}>
            <p>Type: {leave.leaveType}</p>
            <p>Date: {leave.leaveDate}</p>
            <p>Time: {leave.leaveTime}</p>
            <p>Duration: {leave.LeaveDuration}</p>
            <p>Approved: {leave.isApproved ? 'Yes' : 'No'}</p>
            <p>Rejected: {leave.isRejected ? 'Yes' : 'No'}</p>
          </li>
        ))}
      </ul>
      <ComplaintsView />
    </div>
  );
};

export default withAuth(WardenDetailsView);