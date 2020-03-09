import React from 'react'

const styled = {
    backgroundColor: "blue",
    textColor: "yellow"
}

const UserOutput = props => {
    return(
        <div style={styled}>
            <p>User Input {props.username}</p>
        </div>
    )
}

export default UserOutput