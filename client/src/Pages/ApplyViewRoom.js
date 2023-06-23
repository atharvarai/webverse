import React, { useEffect, useState } from 'react';
import withAuth from './WithAuth';

const RoomView = ({ token }) => {
  const [roomDetails, setRoomDetails] = useState(null);

  useEffect(() => {
    const fetchRoomDetails = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/v1/student/room-details/', {
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
            setRoomDetails(data.data);
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

    fetchRoomDetails();
  }, [token]);

  return (
    <div>
      <h2>Room Details</h2>
      {roomDetails ? (
        <div>
          <p>Room Number: {roomDetails.roomNo}</p>
          <p>Room Type: {roomDetails.roomType}</p>
          <p>Room Capacity: {roomDetails.roomCapacity}</p>
          <p>Block: {roomDetails.block}</p>
          <p>Is Full: {roomDetails.isFull ? 'Yes' : 'No'}</p>
        </div>
      ) : (
        <p>Loading room details...</p>
      )}
      
    </div>
  );
};

export default withAuth(RoomView);
