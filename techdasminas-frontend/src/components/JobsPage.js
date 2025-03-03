import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs } from "firebase/firestore"; 

const JobsPage = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const snapshot = await getDocs(collection(db, 'jobs'));
      const jobsList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setJobs(jobsList);
    };
    fetchJobs();
  }, []);

  return (
    <div className="jobs-page">
      <h1>Jobs</h1>
      <ul>
        {jobs.map(job => (
          <li key={job.id}>
            <a href={job.link} target="_blank" rel="noopener noreferrer">
              {job.title}
            </a>
            <p>{job.description}</p>
            <p>{job.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobsPage;
