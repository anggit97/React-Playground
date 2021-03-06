import React from 'react'
import styled from 'styled-components'
// import './Person.css'   

const DivStyled = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eeeeee;
    box-shadow: 0 2px 3px #cccccc;
    padding: 16px;
    text-align: center;

    '@media (min-width: 500px)': {
        width: '450px'
    }
`

const Person = (props) => {
    return (
        <DivStyled>
            <p onClick={props.click}>Hello I'm {props.name} and I'm {props.age} year old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </DivStyled>
    )
}

export default Person