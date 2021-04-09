import React from 'react';

import logoSource from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css';

const Logo = () => (
    <div className={classes.Logo}>
        <img src={logoSource} alt='Burger Logo' />
    </div>
);

export default Logo;