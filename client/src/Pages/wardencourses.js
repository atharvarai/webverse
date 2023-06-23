import React, { useEffect, useState } from 'react';

function WardenCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/v1/student/course/get-all')
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'Success') {
          setCourses(data.data);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <h2>Course List</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <strong>Course Code:</strong> {course.courseCode},{' '}
            <strong>Course Name:</strong> {course.courseName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WardenCourses;
