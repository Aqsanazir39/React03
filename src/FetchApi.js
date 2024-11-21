import React, { useEffect, useState } from 'react';

function FetchApi() {
  // Initialize post as an empty array
  const [post, setPost] = useState([]);

  useEffect(() => {
   
    fetch("http://jsonplaceholder.typicode.com/posts")
     .then((response)=>
      response.json()).then((result)=>{
      setPost(result)
     })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); 

  return (
    <div>
      <h1>Fetch Api</h1>
      <ul>
        {post.map((pst) => (
          <li key={pst.id}>
            <h2>{pst.title}</h2>
            <p>{pst.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchApi;