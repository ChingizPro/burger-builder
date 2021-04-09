import React from 'react';

import logoSource from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css';

const Logo = props => (
    <div className={classes.Logo}>
        <img src={logoSource} />
    </div>
);

export default Logo;