import React, { useEffect } from 'react';
import withAuth from './WithAuth';
import ApplyLeaveView from './ApplyViewLeave';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './HomePage';

const Dashboard = ({ token }) => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log(token);
    if (token) {
      navigate('/');
    }
  }, [token, navigate]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/applyviewleave" element={<ApplyLeaveView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default withAuth(Dashboard);
