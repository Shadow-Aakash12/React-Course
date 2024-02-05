import React from 'react'
import useFetch from 'react-fetch-hook';

function UseFetch() {

  const {data: posts, isLoading, error} = useFetch('https://jsonplaceholder.typicode.com/posts')  

  if(isLoading) {
    return <h2>Loading ....</h2>
  }

  if(error) {
    return <div>Error: error in Fetching data</div>;
  }
  
  
  
  return (
    <div>
        <h1>Using useFetch() custom hook from react-fetch-hook</h1>

        {
            posts &&
             posts.map((post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
             ))
        }
    </div>
  )
}

export default UseFetch