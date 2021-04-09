import React from 'react';

import classes from './NavigationItem.module.css';

const NavigationItem = props => (
    <li className={classes.NavigationItem}>
        <a className={props.active ? classes.active : null} href={props.href}>{props.children}</a>
    </li>
);

export default NavigationItem;