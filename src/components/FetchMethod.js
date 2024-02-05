import React from 'react';
import { useState, useEffect } from 'react';

const FetchMethod = () => {

    const[api,setAPI] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            setAPI(data);
        });
    },[]);

  return (
    <div>
        <h1>Using FetchMethod in React Js</h1>
        <h4>Fetching Username from API</h4>
        {api &&
            api.map((a) => (
                <p key={a.id}>{a.username}</p>
            ))
        }
    </div>
  )
}

export default FetchMethod