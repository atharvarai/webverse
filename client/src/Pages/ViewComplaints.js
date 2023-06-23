import React, { useEffect, useState } from 'react';
import withAuth from './WithAuth';

const ComplaintsView = ({ token }) => {
  const [complaints, setComplaints] = useState(null);

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/v1/student/complaint/', {
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
            setComplaints(data.data);
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

    fetchComplaints();
  }, [token]);

  return (
    <div>
      <h2>Complaints</h2>
      {complaints ? (
        complaints.map((complaint) => (
          <div key={complaint.id}>
            <p>Complaint ID: {complaint.id}</p>
            <p>Complaint Type: {complaint.complaintType}</p>
            <p>Complaint Date: {complaint.complaintDate}</p>
            <p>Complaint Description: {complaint.complaintDescription}</p>
            <p>Complaint Severity: {complaint.complaintSeverity}</p>
            <p>Is Resolved: {complaint.isResolved ? 'Yes' : 'No'}</p>
          </div>
        ))
      ) : (
        <p>Loading complaints...</p>
      )}
    </div>
  );
};

export default withAuth(ComplaintsView);
