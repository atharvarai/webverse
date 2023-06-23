import React, { useState } from 'react';
import withAuth from './WithAuth';

const ApplyComplaintView = ({ token }) => {
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventPoster, setEventPoster] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [eventVenue, setEventVenue] = useState('');
  const [eventOrganiser, setEventOrganiser] = useState('');
  const [participantCount, setParticipantCount] = useState('');
  const [hostedBy, setHostedBy] = useState('');

  const handleEventNameChange = (e) => {
    setEventName(e.target.value);
  };

  const handleEventDescriptionChange = (e) => {
    setEventDescription(e.target.value);
  };

  const handleEventPosterChange = (e) => {
    setEventPoster(e.target.value);
  };

  const handleEventDateChange = (e) => {
    setEventDate(e.target.value);
  };

  const handleEventTimeChange = (e) => {
    setEventTime(e.target.value);
  };

  const handleEventVenueChange = (e) => {
    setEventVenue(e.target.value);
  };

  const handleEventOrganiserChange = (e) => {
    setEventOrganiser(e.target.value);
  };

  const handleParticipantCountChange = (e) => {
    setParticipantCount(e.target.value);
  };

  const handleHostedByChange = (e) => {
    setHostedBy(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const event = {
      eventName,
      eventDescription,
      eventPoster,
      eventDate,
      eventTime,
      eventVenue,
      eventOrganiser,
      participantCount,
      hostedBy,
    };

    console.log(event);

    fetch('http://localhost:8000/api/v1/student/event/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(event),
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
      <h2 style={styles.heading}>Event Registration</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="eventName" style={styles.label}>
            Event Name:
          </label>
          <input
            type="text"
            id="eventName"
            value={eventName}
            onChange={handleEventNameChange}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="eventDescription" style={styles.label}>
            Event Description:
          </label>
          <input
            type="text"
            id="eventDescription"
            value={eventDescription}
            onChange={handleEventDescriptionChange}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="eventPoster" style={styles.label}>
            Event Poster:
          </label>
          <input
            type="text"
            id="eventPoster"
            value={eventPoster}
            onChange={handleEventPosterChange}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="eventDate" style={styles.label}>
            Event Date:
          </label>
          <input
            type="text"
            id="eventDate"
            value={eventDate}
            onChange={handleEventDateChange}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="eventTime" style={styles.label}>
            Event Time:
          </label>
          <input
            type="text"
            id="eventTime"
            value={eventTime}
            onChange={handleEventTimeChange}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="eventVenue" style={styles.label}>
            Event Venue:
          </label>
          <input
            type="text"
            id="eventVenue"
            value={eventVenue}
            onChange={handleEventVenueChange}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="eventOrganiser" style={styles.label}>
            Event Organiser:
          </label>
          <input
            type="text"
            id="eventOrganiser"
            value={eventOrganiser}
            onChange={handleEventOrganiserChange}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="participantCount" style={styles.label}>
            Participant Count:
          </label>
          <input
            type="text"
            id="participantCount"
            value={participantCount}
            onChange={handleParticipantCountChange}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="hostedBy" style={styles.label}>
            Hosted By:
          </label>
          <input
            type="text"
            id="hostedBy"
            value={hostedBy}
            onChange={handleHostedByChange}
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>
          Apply
        </button>
      </form>
    </div>
  );
};

export default withAuth(ApplyComplaintView);

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
    width: '100%',
    maxWidth: '400px',
  },
  formGroup: {
    marginBottom: '10px',
    width: '100%',
  },
  label: {
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '100%',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '4px',
    backgroundColor: '#4caf50',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    width: '100%',
    marginTop: '10px',
  },
};
