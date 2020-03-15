import React from 'react'

const ValidationComponent = (props) => {
    return(
        <div>
            <p>{props.errorMsg}</p>
        </div>
    )
}

export default ValidationComponent