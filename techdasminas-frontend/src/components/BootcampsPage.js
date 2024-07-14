import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const BootcampsPage = () => {
  const [bootcamps, setBootcamps] = useState([]);

  useEffect(() => {
    const fetchBootcamps = async () => {
      const snapshot = await getDocs(collection(db, 'bootcamps'));
      const bootcampsList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setBootcamps(bootcampsList);
    };
    fetchBootcamps();
  }, []);

  return (
    <div className="bootcamps-page">
      <h1>Bootcamps</h1>
      <div className="list-group">
        {bootcamps.map(bootcamp => (
          <a
            key={bootcamp.id}
            href={bootcamp.link}
            className="list-group-item list-group-item-action"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h5 className="mb-1">{bootcamp.title}</h5>
            <p className="mb-1">{bootcamp.description}</p>
            <small>{bootcamp.category}</small>
          </a>
        ))}
      </div>
    </div>
  );
};

export default BootcampsPage;
