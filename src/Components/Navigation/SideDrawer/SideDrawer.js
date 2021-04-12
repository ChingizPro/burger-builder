import React from 'react';

import Logo from '../../../Components/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Wrapper from '../../../hoc/Wrapper/Wrapper';
import PropTypes from 'prop-types';

const SideDrawer = props => {
    let attachedClasses = [classes.SideDrawer, classes.Close];

    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <Wrapper>
            <Backdrop visible={props.open} click={props.backdropClick} />
            <div className={attachedClasses.join(' ')}>
                <Logo className={classes.abc} height='10%' />
                <nav className={classes.nav}>
                    <NavigationItems />
                </nav>
            </div>
        </Wrapper>
    );
}

SideDrawer.propTypes = {
    open: PropTypes.bool,
    backdropClick: PropTypes.func
}

export default SideDrawer;