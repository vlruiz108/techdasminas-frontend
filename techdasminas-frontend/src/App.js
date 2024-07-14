import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CoursesPage from './components/CoursesPage';
import JobsPage from './components/JobsPage';
import BootcampsPage from './components/BootcampsPage';
import MentorshipPage from './components/MentorshipPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/bootcamps" element={<BootcampsPage />} />
          <Route path="/mentorships" element={<MentorshipPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
