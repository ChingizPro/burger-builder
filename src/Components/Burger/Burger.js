import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.css';

const Burger = props => {
    const transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])];
    });
    console.log(transformedIngredients);

    return (
        <div className={classes.Burger}>

        </div>
    );
}

export default Burger;