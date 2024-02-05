import React, { useState } from 'react'
import './stylesheet/ConditionalRendering.css'

export default function ConditionalRendering() {

  const[name,setName] = useState('Alice');

  function handleNameChange() {

    const names = [
      "Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Ivy", "Jack",
      "Katherine", "Liam", "Mia", "Noah", "Olivia", "Penelope", "Quinn", "Ryan", "Sophia", "Thomas","Uma", "Victor", "Willow", "Xander", "Yara", "Zachary", "Amelia", "Benjamin", "Cora", "Daniel","Ella", "Felix", "Gabriella", "Harrison", "Isabella", "James", "Kylie", "Lucas", "Madison", "Nathan","Oscar", "Peyton", "Quentin", "Rachel", "Samuel", "Taylor", "Ulysses", "Violet", "Wesley", "Ximena","Yasmine", "Zane", "Abigail", "Blake", "Catherine", "Dylan", "Eva", "Freddie", "Grace", "Harper","Isaac", "Jasmine", "Kai", "Lily", "Mason", "Nora", "Owen", "Piper", "Quincy", "Rebecca", "Stella","Theodore", "Ursula", "Vincent", "Willa", "Xavier", "Yvette", "Zara", "Aaron", "Bella", "Christopher", "Daisy"
  ]

  
  const int = Math.floor(Math.random()*79);
  
  setName(names[int])
  console.log(name)
  
  }

  const[textInput, setTextInput] = useState('');

  function handleChange(e){
    setTextInput(e.target.value);

  }

  const[result,setResult] = useState('Status')

  function handleCondCheck(textInputs,names){
    if(textInputs === names){
      setResult("Matched")
    } 
    else if(textInput === ""){
      setResult("Enter Input")
    }
    else {
      setResult("UnMatched")
    }
  }


  return (
    <div>
        <h1>ConditionalRendering</h1>
        <button onClick={handleNameChange}>Generate Name</button>
        <br/><br/>

        <div className='cond-box'>
        <h2>{name}</h2>

        <input type='text' onChange={handleChange}/><br/>

        <button onClick={() => handleCondCheck(textInput,name)}>Check</button>

        <h3>{result}</h3>

        </div>


    </div>
  )
}
