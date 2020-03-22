import React from 'react'
import Aux from '../../hoc/Aux'
import styles from './Layout.module.css'

const Layout = (props) => (
    <Aux>
        <div>Toolbar, drawaer, builder</div>
        <main className={styles.Content}>{props.children}</main>
    </Aux>
)

export default Layout