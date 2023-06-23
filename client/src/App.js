import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Pages/Register';
import ApplyLeaveView from './Pages/ApplyViewLeave';
import ApplyComplaintView from './Pages/ApplyViewComplaint';
import Dashboard from './Pages/Dashboard';
import ApplyRoomView from './Pages/ApplyViewRoom';
import ApplyCoursePage from './Pages/ApplyCoursePage';
import MessDetailsView from './Pages/ApplyForMess'
import EventsView from "./Pages/EventspostPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/applyviewleave" element={<ApplyLeaveView />} />
          <Route path="/applyviewcomplaint" element={<ApplyComplaintView />} />
          <Route path="/applyviewroom" element={<ApplyRoomView />} />
          <Route path="/courses" element={<ApplyCoursePage />} />
          <Route path="/mess" element={<MessDetailsView />} />
          <Route path="/events" element={<EventsView />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
