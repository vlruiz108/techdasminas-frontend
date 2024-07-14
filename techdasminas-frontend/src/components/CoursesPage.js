import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const querySnapshot = await getDocs(collection(db, 'courses'));
      const coursesList = querySnapshot.docs.map(doc => doc.data());
      setCourses(coursesList);
    };
    fetchCourses();
  }, []);

  return (
    <div className="courses-page">
      <h1>Recursos Educacionais</h1>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>
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
