import React from 'react';

import logoSource from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css';
import PropTypes from 'prop-types';

const Logo = props => (
    <div className={classes.Logo} style={{ height: props.height }}>
        <img src={logoSource} alt='Burger Logo' />
    </div>
);

Logo.propTypes = {
    height: PropTypes.string
}

export default Logo;