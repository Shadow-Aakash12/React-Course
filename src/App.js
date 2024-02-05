// Import the useState hook
import React from 'react';
import LocalStorage from './components/LocalStorage';
import SessionStorage from './components/SessionStorage';
import UseState from './components/UseState';
import ConditionalRendering from './components/ConditionalRendering';
import './App.css';
import FetchMethod from './components/FetchMethod';
import UseSWR from './components/UseSWR';
import ReactQuery from './components/ReactQuery';
import Axios from './components/Axios';
import UseFetch from './components/UseFetch';

// Create a function component
const App = () => {
 

  // Render the component
  return (
    <div className='App'>
      <UseState/>

      <ConditionalRendering/>

      <LocalStorage/>

      <SessionStorage/>

      <UseSWR/>

      <FetchMethod/>

      <ReactQuery/>

      <Axios/>

      <UseFetch/>

      
    </div>
  );
};

// Export the component
export default App;
