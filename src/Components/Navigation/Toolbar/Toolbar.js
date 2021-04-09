import React from 'react';

import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const Toolbar = props => (
    <div className={classes.Toolbar}>
        <div>Menu icon</div>
        <Logo />
        <nav>
            <NavigationItems />
        </nav>
    </div>
);

export default Toolbar;