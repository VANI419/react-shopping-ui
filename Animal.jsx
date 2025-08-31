import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Animal() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/animals')
      .then(response => {
        setAnimals(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the animals!", error);
      });
  }, []);

  return (
    <div className="Animal">
      <h1>Animals List</h1>
      <ul>
        {animals.map((animal, index) => (
          <li key={index}>
            {animal.name} - {animal.species}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Animal;
