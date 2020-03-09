import React from 'react'
import './UserInput.css'

const UserInput = (props) => {
    return(
        <div className="UserInput">
            <input type="text" placeholder="Masukan Text" onChange={props.ontextchange} value={props.username}/>
        </div>
    )
}

export default UserInput