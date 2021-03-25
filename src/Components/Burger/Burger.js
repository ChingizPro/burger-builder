import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.css';

const Burger = props => (
    <div className={classes.Burger}>
        <BurgerIngredient type='bread-top' />
        <BurgerIngredient type='salad' />
        <BurgerIngredient type='bacon' />
        <BurgerIngredient type='cheese' />
        <BurgerIngredient type='meat' />
        <BurgerIngredient type='bread-bottom' />
    </div>
);

export default Burger;