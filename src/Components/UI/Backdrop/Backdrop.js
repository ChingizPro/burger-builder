import React from 'react';

import classes from './Backdrop.module.css';
import PropTypes from 'prop-types';

const Backdrop = (props) => {
    return props.visible ? <div className={classes.Backdrop} onClick={props.click}></div> : null;
};

Backdrop.propTypes = {
    visible: PropTypes.bool
}

export default Backdrop;