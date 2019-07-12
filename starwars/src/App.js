import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarWarsList from './components/StarWarsList';
import './App.css';
// import styled from 'styled-components';

// const Loading = styled.h3`
//   color: white;
// `;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [list, setList] = useState([]);
  // const [error, setError] = useState({});

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get('https://swapi.co/api/people/')
      .then(res => {
        console.log(res.data.results)
        setList(res.data.results)
      })
      .catch(err => {
        console.log(err)
        // setError(err)
      })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {/* { list !== [] ? 
        <StarWarsList charList={list} /> :
        <Loading>Loading ...</Loading>      
      } */}
      {/* { list === [] ? 
        <Loading>Loading ...</Loading> :
        <StarWarsList charList={list} />
      } */}
      <StarWarsList charList={list} />
      
      {/* {error ? 
        <div className="error">
          <h2>Oopsies! You have an error!</h2>
          <h3>{error}</h3> 
        </div> :
        null    
      } */}
    </div>
  );
}

export default App;
