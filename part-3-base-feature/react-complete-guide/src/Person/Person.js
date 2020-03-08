import React from 'react'
import './Person.css'

const Person = (props) => {
    return <div className="Person">
        <p onClick={props.onClick}>Hello I'm {props.name} and I'm {props.age} year old</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </div>
}

export default Person