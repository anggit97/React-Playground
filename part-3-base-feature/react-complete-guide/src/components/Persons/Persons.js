import React from 'react'
import Person from './Person/Person.js'

const Persons = (props) => {
    return props.persons.map((person, index) =>
        <Person
            name={person.name}
            age={person.age}
            click={() => props.deletePersonHandler(index)}
            key={person.id}
            // changed={(event) => this.switchNameHandler(event, person.id)}
            changed={(event) => props.changeNameHadler(event, person.id)}
        />
    )
}

export default Persons