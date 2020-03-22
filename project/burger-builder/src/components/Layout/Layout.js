import React from 'react'
import Aux from '../../hoc/Aux'

const Layout = (props) => (
    <Aux>
        <div>Toolbar, drawaer, builder</div>
        <main>{props.children}</main>
    </Aux>
)

export default Layout