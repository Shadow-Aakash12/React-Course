import React, { useState } from 'react'

function UseState() {

    const[count,setCount] = useState(0);
    


  return (
    <div>
        <h1>UseState in React js</h1>

        <p>This is Counter Example</p>
        <p>You clicked {count} times</p>

        <button onClick={() => setCount(count + 1)}>
            click to add
        </button>

        <button onClick={() => setCount(count - 1)}>
            click to sub
        </button>



    </div>
  )
}

export default UseState