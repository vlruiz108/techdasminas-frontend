import React, { useState, useEffect } from 'react';
import { firestore } from '../firebaseConfig';

const JobsPage = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const snapshot = await firestore.collection('jobs').get();
      const jobsList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setJobs(jobsList);
    };
    fetchJobs();
  }, []);

  return (
    <div className="jobs-page">
      <h1>Vagas de Trabalho</h1>
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
