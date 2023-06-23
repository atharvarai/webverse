import React, { useState } from 'react';
import withAuth from './WithAuth';
import CoursesView from './ViewCourse';

const CourseRegistrationView = ({ token }) => {
  const [courseId, setCourseId] = useState('');

  const handleCourseIdChange = (e) => {
    setCourseId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const course = {
      courseId
    };

    fetch('http://localhost:8000/api/v1/student/course/add-course', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(course)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Course Registration</h2>
      <form style={styles.form} onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label htmlFor="courseId" style={styles.label}>Course ID:</label>
          <input
            type="text"
            id="courseId"
            value={courseId}
            onChange={handleCourseIdChange}
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>Register</button>
      </form>
      <CoursesView />
    </div>
  );
};

export default withAuth(CourseRegistrationView);

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f2f2f2',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
  },
  formGroup: {
    marginBottom: '10px',
  },
  label: {
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '300px',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '4px',
    backgroundColor: '#4caf50',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
  },
};
