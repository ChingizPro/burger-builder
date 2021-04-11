import React from 'react';

import classes from './MenuToggler.module.css';

const MenuToggler = props => (
    <div className={classes.Toggler} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
)

export default MenuToggler;