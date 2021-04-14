import React from 'react';

import classes from './Backdrop.module.css';
import PropTypes from 'prop-types';

const Backdrop = props => {
    return props.visible ? <div className={props.class ? [classes.Backdrop, classes.MenuClass].join(' ') : classes.Backdrop} onClick={props.click}></div> : null;
};

Backdrop.propTypes = {
    visible: PropTypes.bool,
    menuClass: PropTypes.bool
}

export default Backdrop;