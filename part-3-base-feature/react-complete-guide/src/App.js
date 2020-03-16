import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: '1', name: "Anggit Prayogo", age: 22 },
      { id: '2', name: "Firman Utina", age: 23 },
      { id: '3', name: "Shampo Sunsilk", age: 24 },
    ],
    showPersonContent: false
  }

  changeNameHadler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => { return p.id === id })

    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({
      persons: persons
    })
  }

  togglePersonContent = () => {
    const doesShow = this.state.showPersonContent
    this.setState({
      showPersonContent: !doesShow
    })
  }

  deletePersonHandler = (indexPerson) => {
    const person = [...this.state.persons]
    console.log(person)
    person.splice(indexPerson, 1)
    this.setState({
      persons: person
    })
  }

  render() {
    let classes = []
    if (this.state.persons.length <= 2) {
      classes.push('red')
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold')
    }

    let persons = null
    if (this.state.showPersonContent) {
      persons = (
        <div>
          {this.state.persons.map((person, index) =>
            <Person
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              key={person.id}
              // changed={(event) => this.switchNameHandler(event, person.id)}
              changed={(event) => this.changeNameHadler(event, person.id)}
            />
          )
          }
        </div>
      )
      // style.backgroundColor = "red"
      // style[':hover'] = {
      //   backgroundColor: 'lightgreen',
      //   textColor: 'white'
      // }
    }

    return (
      <div className="App">
        <p className={classes.join(' ')}>Hello World</p>
        <button className='button' alt={this.state.showPersonContent} onClick={this.togglePersonContent}>Show Person Content</button>
        {persons}
      </div>
    );
  }
}

export default App;


//Functional Way
// import React, { useState } from 'react';
// import './App.css';
// import Person from './Person/Person';

// const App = props => {

//   const [personState, setPersonState] = useState({
//     persons : [
//       {name : "Anggit Prayogo", age: 22},
//       {name : "Firman Utina", age: 23},
//       {name : "Shampo Sunsilk", age: 24},
//     ]
//   })

//   const [otherState, setOtherState] = useState({
//     otherState : "Other State"
//   })

//   const switchNameHandler = () => {
//     console.log("i was clicked")
//     setPersonState(
//       {
//         persons : [
//           {name : "Shampo Sunsilk", age: 24},
//           {name : "Firman Utina", age: 23},
//           {name : "Anggit Prayogo", age: 22},
//         ]
//       }
//     )
//   }

//   return (
//     <div className="App">
//       <p>Hello World</p>
//       <button onClick={switchNameHandler}>Switch name click</button>
//       <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
//       <Person name={personState.persons[1].name} age={personState.persons[1].age}>I Single By the way</Person>
//       <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
//       <Person name={otherState.otherState} age={personState.persons[2].age}/>
//     </div>
//   );
// }

// export default App;
