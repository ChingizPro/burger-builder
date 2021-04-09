import React from 'react';

import Logo from '../../Logo/Logo';
import classes from './Toolbar.module.css';

const Toolbar = props => (
    <div className={classes.Toolbar}>
        <div>Menu icon</div>
        <Logo />
        <nav>
            nav links
        </nav>
    </div>
);

export default Toolbar;