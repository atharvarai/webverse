import React, { useState } from 'react';

const ApplyLeaveView = () => {
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

    // Create a leave application object with the provided parameters
    const leaveApplication = {
      leaveType,
      leaveDate,
      leaveTime,
      leaveDuration
    };

    // Send the leave application data to the API endpoint
    fetch('http://localhost:8000/api/v1/student/leave/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(leaveApplication)
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the API
        console.log(data); // You can do something with the response data here
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <h2>Apply Leave</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="leaveType">Leave Type:</label>
          <input
            type="text"
            id="leaveType"
            value={leaveType}
            onChange={handleLeaveTypeChange}
          />
        </div>
        <div>
          <label htmlFor="leaveDate">Leave Date:</label>
          <input
            type="text"
            id="leaveDate"
            value={leaveDate}
            onChange={handleLeaveDateChange}
          />
        </div>
        <div>
          <label htmlFor="leaveTime">Leave Time:</label>
          <input
            type="text"
            id="leaveTime"
            value={leaveTime}
            onChange={handleLeaveTimeChange}
          />
        </div>
        <div>
          <label htmlFor="leaveDuration">Leave Duration:</label>
          <input
            type="text"
            id="leaveDuration"
            value={leaveDuration}
            onChange={handleLeaveDurationChange}
          />
        </div>
        <button type="submit">Apply</button>
      </form>
    </div>
  );
};

export default ApplyLeaveView;
