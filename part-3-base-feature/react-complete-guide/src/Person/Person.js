import React from 'react'

const Person = (props) => {
    return <div>
        <p>Hello I'm {props.name} and I'm {props.age} year old</p>
        <p>{props.children}</p>
    </div>
}

export default Person