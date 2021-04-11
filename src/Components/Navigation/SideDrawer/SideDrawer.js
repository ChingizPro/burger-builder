import React from 'react';

import Logo from '../../../Components/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Wrapper from '../../../hoc/Wrapper/Wrapper';

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

export default SideDrawer;