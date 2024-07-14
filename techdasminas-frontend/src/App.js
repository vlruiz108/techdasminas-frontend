import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './components/HomePage';
import CoursesPage from './components/CoursesPage';
import JobsPage from './components/JobsPage';
import BootcampsPage from './components/BootcampsPage';
import MentorshipPage from './components/MentorshipPage';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Home</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Início</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/courses">Cursos</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/jobs">Vagas</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/bootcamps">Bootcamps</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/mentorships">Mentorias</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route path="/bootcamps" element={<BootcampsPage />} />
            <Route path="/mentorships" element={<MentorshipPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
