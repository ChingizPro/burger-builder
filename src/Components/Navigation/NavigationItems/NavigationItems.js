import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const NavigationItems = props => (
    <ul className={classes.NavigationItems}>
        <NavigationItem href='/' active>Burger Builder</NavigationItem>
        <NavigationItem href='/'>Checkout</NavigationItem>
    </ul>
);

export default NavigationItems;