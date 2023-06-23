import React, { useEffect, useState } from 'react';
import withAuth from './WithAuth';

const CoursesView = ({ token }) => {
  const [registeredCourses, setRegisteredCourses] = useState(null);

  useEffect(() => {
    const fetchRegisteredCourses = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/v1/student/course/get-all-registered', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data); // Check the data received in the console
          if (data.message === 'Success') {
            setRegisteredCourses(data.data);
          } else {
            console.error('Error:', data.message);
          }
        } else {
          console.error('Error:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchRegisteredCourses();
  }, [token]);

  return (
    <div>
      <h2>Registered Courses</h2>
      {registeredCourses ? (
        registeredCourses.map((course) => (
          <div key={course.id}>
            <p>Course ID: {course.id}</p>
            <p>Course Name: {course.courseName}</p>
            <p>Course Code: {course.courseCode}</p>
            <p>Course Type: {course.courseType}</p>
            <p>Course Credits: {course.courseCredits}</p>
            <p>Course Teacher ID: {course.courseTeacherId}</p>
          </div>
        ))
      ) : (
        <p>Loading registered courses...</p>
      )}
    </div>
  );
};

export default withAuth(CoursesView);
