import React, { useState, useEffect } from 'react';
import { firestore } from '../firebaseConfig';

const MentorshipPage = () => {
  const [mentorships, setMentorships] = useState([]);

  useEffect(() => {
    const fetchMentorships = async () => {
      const snapshot = await firestore.collection('mentorships').get();
      const mentorshipsList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMentorships(mentorshipsList);
    };
    fetchMentorships();
  }, []);

  return (
    <div className="mentorship-page">
      <h1>Mentorias Disponíveis</h1>
      <ul>
        {mentorships.map(mentorship => (
          <li key={mentorship.id}>
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
