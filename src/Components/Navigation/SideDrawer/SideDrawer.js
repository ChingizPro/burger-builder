import React from 'react';

import Logo from '../../../Components/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';

const SideDrawer = props => {
    return (
        <div className={classes.SideDrawer}>
            <Logo className={classes.abc} height='10%' />
            <nav className={classes.nav}>
                <NavigationItems />
            </nav>
        </div>
    );
}

export default SideDrawer;