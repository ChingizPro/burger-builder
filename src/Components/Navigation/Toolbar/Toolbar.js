import React from 'react';

import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import MenuToggler from '../SideDrawer/MenuToggler/MenuToggler';
import PropTypes from 'prop-types';

const Toolbar = props => (
    <div className={classes.Toolbar}>
        <MenuToggler clicked={props.menuClick} />
        <Logo height='77%' />
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </div>
);

Toolbar.propTypes = {
    menuClick: PropTypes.func
}

export default Toolbar;