import React from 'react'

import styles from './Burger.module.css'
import BurgerIngredinents from './BurgerIngredient/BurgerIngredient'

const Burger = (props) => {

    const transformedIngredients = Object.keys(props.ingredients)
    .map( igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredinents key={igKey+i} type={igKey}/>;
        });
    });

    console.log(transformedIngredients)

    return(
        <div className={styles.Burger}>
            <BurgerIngredinents type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredinents type="bread-bottom"/>
        </div>
    )
};

export default Burger