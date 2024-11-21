
import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

function FetchApiFromBc() {
  const [data, setData] = useState([]); 

  useEffect(() => {
   
    axios.get('http://localhost:5000/api/data')
      .then(response => {
        setData(response.data); 
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); 

  return (
    <div>
      <h1>Hardcoded Data from API</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.name} (Age: {item.age})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchApiFromBc;
