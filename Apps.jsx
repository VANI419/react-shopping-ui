import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Apps() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/api/greeting')
      .then(response => {
        setMessage(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the message!", error);
      });
  }, []);

  return (
    <div className="Apps">
      <h1>{message}</h1>
    </div>
  );
}

export default Apps;
