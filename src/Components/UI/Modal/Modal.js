import React from 'react';

import classes from './Modal.module.css';

const Modal = (props) => (
    <div className={classes.Modal} style={{ transform: props.showModal ? 'translateY(0vh)' : 'translateY(-100vh)' }}>
        {props.children}
    </div>
);

export default Modal;