import React, { useState, useEffect } from 'react';
import { firestore } from '../firebaseConfig';

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const snapshot = await firestore.collection('courses').get();
      const coursesList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setCourses(coursesList);
    };
    fetchCourses();
  }, []);

  return (
    <div className="courses-page">
      <h1>Recursos Educacionais</h1>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <a href={course.link} target="_blank" rel="noopener noreferrer">
              {course.title}
            </a>
            <p>{course.description}</p>
            <p>{course.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoursesPage;
