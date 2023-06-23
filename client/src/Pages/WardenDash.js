import React from 'react';
import { useNavigate } from 'react-router-dom';

function WardenDashboard() {
  const navigate = useNavigate();

  const handleViewCourses = () => {
    navigate('/warden-courses');
  };

  return (
    <div>
      <h2>Warden Dashboard</h2>
      <button onClick={handleViewCourses}>View Courses</button>
    </div>
  );
}

export default WardenDashboard;
