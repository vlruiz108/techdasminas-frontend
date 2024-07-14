import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const BootcampsPage = () => {
  const [bootcamps, setBootcamps] = useState([]);

  useEffect(() => {
    const fetchBootcamps = async () => {
      const querySnapshot = await getDocs(collection(db, 'bootcamps'));
      const bootcampsList = querySnapshot.docs.map(doc => doc.data());
      setBootcamps(bootcampsList);
    };
    fetchBootcamps();
  }, []);

  return (
    <div className="bootcamps-page">
      <h1>Bootcamps</h1>
      <ul>
        {bootcamps.map((bootcamp, index) => (
          <li key={index}>
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
