import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {

  const [personState, setPersonState] = useState({
    persons : [
      {name : "Anggit Prayogo", age: 22},
      {name : "Firman Utina", age: 23},
      {name : "Shampo Sunsilk", age: 24},
    ]
  })

  const [otherState, setOtherState] = useState({
    otherState : "Other State"
  })

  const switchNameHandler = () => {
    console.log("i was clicked")
    setPersonState(
      {
        persons : [
          {name : "Shampo Sunsilk", age: 24},
          {name : "Firman Utina", age: 23},
          {name : "Anggit Prayogo", age: 22},
        ]
      }
    )
  }

  return (
    <div className="App">
      <p>Hello World</p>
      <button onClick={switchNameHandler}>Switch name click</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
      <Person name={personState.persons[1].name} age={personState.persons[1].age}>I Single By the way</Person>
      <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
      <Person name={otherState.otherState} age={personState.persons[2].age}/>
    </div>
  );
}

export default App;
