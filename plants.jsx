import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Plants() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    // Fetch plants data from the Spring Boot API
    axios.get('http://localhost:8080/api/plants')
      .then(response => {
        setPlants(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the plants!", error);
      });
  }, []);

  return (
    <div className="plants">
      <h1>Plants List</h1>
      <ul>
        {plants.map((plant, index) => (
          <li key={index}>
            {plant.name} - {plant.species}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Plants;
