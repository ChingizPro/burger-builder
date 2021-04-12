import React from 'react';

import classes from './MenuToggler.module.css';
import PropTypes from 'prop-types';

const MenuToggler = props => (
    <div className={classes.Toggler} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
)

MenuToggler.propTypes = {
    clicked: PropTypes.func
}

export default MenuToggler;