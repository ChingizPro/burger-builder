import React from 'react';

import classes from './Button.module.css';
import PropTypes from 'prop-types';

const Button = props => (
    <button className={[classes.Button, classes[props.type]].join(' ')} onClick={props.clicked}>{props.children}</button>
);

Button.propTypes = {
    type: PropTypes.string,
    clicked: PropTypes.func
}

export default Button;