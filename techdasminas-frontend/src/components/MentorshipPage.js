import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const MentorshipPage = () => {
  const [mentorships, setMentorships] = useState([]);

  useEffect(() => {
    const fetchMentorships = async () => {
      const querySnapshot = await getDocs(collection(db, 'mentorships'));
      const mentorshipsList = querySnapshot.docs.map(doc => doc.data());
      setMentorships(mentorshipsList);
    };
    fetchMentorships();
  }, []);

  return (
    <div className="mentorship-page">
      <h1>Mentorias Disponíveis</h1>
      <ul>
        {mentorships.map((mentorship, index) => (
          <li key={index}>
            <p>Mentora: {mentorship.mentor}</p>
            <p>Status: {mentorship.status}</p>
            <a href={mentorship.link} target="_blank" rel="noopener noreferrer">Detalhes da Mentoria</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MentorshipPage;
