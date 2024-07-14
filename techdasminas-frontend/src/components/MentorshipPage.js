import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs } from "firebase/firestore"; 

const MentorshipPage = () => {
  const [mentorships, setMentorships] = useState([]);

  useEffect(() => {
    const fetchMentorships = async () => {
      const snapshot = await getDocs(collection(db, 'mentorships'));
      const mentorshipsList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMentorships(mentorshipsList);
    };
    fetchMentorships();
  }, []);

  return (
    <div className="mentorship-page">
      <h1>Mentores</h1>
      <ul>
        {mentorships.map(mentorship => (
          <li key={mentorship.id}>
            <a href={mentorship.link} target="_blank" rel="noopener noreferrer">
              {mentorship.title}
            </a>
            <p>{mentorship.description}</p>
            <p>{mentorship.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MentorshipPage;
