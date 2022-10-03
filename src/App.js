import Login from './components/Login';
import Signup from './components/Signup';
import Employee from './components/Employee';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Mentor from './components/Mentor';
import MentorDashboard from './components/MentorDashboard'
import EnhancedTable from './components/MentordataTable'
import SimpleAccordion from './components/Coolapse'
import Task from './components/Task';
import Projectupdate from './components/Projectupdate';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Login/>}/> 
          <Route path="/signup" element={<Signup/>} />
          <Route path="/mentor" element={<Mentor/>} />
          <Route path="/employee" element={<Employee/>} />
          <Route path="/mentordashboard/:id" element={<MentorDashboard/>}/>
          <Route path="/collapse" element={<SimpleAccordion/>}/>
          <Route path="/mentortable" element={<EnhancedTable/>} />
          <Route path="/task" element={<Task/>} />
          <Route path="/projectupdate" element={<Projectupdate/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
