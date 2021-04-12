import React from 'react';

import classes from './NavigationItem.module.css';
import PropTypes from 'prop-types';

const NavigationItem = props => (
    <li className={classes.NavigationItem}>
        <a className={props.active ? classes.active : null} href={props.href}>{props.children}</a>
    </li>
);

NavigationItem.propTypes = {
    active: PropTypes.bool
}

export default NavigationItem;