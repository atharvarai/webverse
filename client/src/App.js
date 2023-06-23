import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import { BrowserRouter,Routes ,Route} from 'react-router-dom';
import Register from './Pages/Register';
import ApplyLeaveView from './Pages/ApplyViewLeave';
import Dashboard from './Pages/Dashboard';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
       <Routes>
         <Route path="/" element={<Login/>} />
         <Route path="/register" element={<Register />} />
         <Route path="/applyviewleave" element={<ApplyLeaveView />} />
         <Route path="/Dashboard" component={<Dashboard/>} />
       </Routes>
     </BrowserRouter>
 </div>
  );
}

export default App;
