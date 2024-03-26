import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function List(props) {
  return (
 <>
  {!props.animals ? (
    <div>Loading</div>
  ) : props.animals.length > 0 ? (
    <ul>
      {props.animals.map((animal) => {
        return <li key={animal}>{animal}</li>;
      })}
    </ul>
  ) : (
    <div>there are no animals on the list!</div>
  )}
 </>
  )
}

function App() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <div>
      <h1>Animals: </h1>
      <List animals={animals} />
    </div>
  );
}
export default App
