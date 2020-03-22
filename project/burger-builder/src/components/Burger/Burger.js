import React from 'react'

import styles from './Burger.module.css'
import BurgerIngredinents from './BurgerIngredient/BurgerIngredient'

const Burger = (props) => {
    return(
        <div className={styles.Burger}>
            <BurgerIngredinents type="bread-top"/>
            <BurgerIngredinents type="cheese"/>
            <BurgerIngredinents type="meat"/>
            <BurgerIngredinents type="bread-bottom"/>
        </div>
    )
}

export default Burger