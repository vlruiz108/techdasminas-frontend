import React, { useState, useEffect } from 'react';
import { firestore } from '../firebaseConfig';

const BootcampsPage = () => {
  const [bootcamps, setBootcamps] = useState([]);

  useEffect(() => {
    const fetchBootcamps = async () => {
      const snapshot = await firestore.collection('bootcamps').get();
      const bootcampsList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setBootcamps(bootcampsList);
    };
    fetchBootcamps();
  }, []);

  return (
    <div className="bootcamps-page">
      <h1>Bootcamps</h1>
      <ul>
        {bootcamps.map(bootcamp => (
          <li key={bootcamp.id}>
            <a href={bootcamp.link} target="_blank" rel="noopener noreferrer">
              {bootcamp.title}
            </a>
            <p>{bootcamp.description}</p>
            <p>{bootcamp.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BootcampsPage;
