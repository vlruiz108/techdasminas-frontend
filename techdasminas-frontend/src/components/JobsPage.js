import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const JobsPage = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const querySnapshot = await getDocs(collection(db, 'jobs'));
      const jobsList = querySnapshot.docs.map(doc => doc.data());
      setJobs(jobsList);
    };
    fetchJobs();
  }, []);

  return (
    <div className="jobs-page">
      <h1>Vagas de Trabalho</h1>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
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
