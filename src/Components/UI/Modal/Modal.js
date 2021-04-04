import React from 'react';

import Wrapper from '../../../hoc/Wrapper/Wrapper';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.module.css';

const Modal = (props) => (
    <Wrapper>
        <Backdrop visible={props.showModal} click={props.hideModal} />
        <div className={classes.Modal} style={{ transform: props.showModal ? 'translateY(0vh)' : 'translateY(-100vh)' }}>
            {props.children}
        </div>
    </Wrapper>
);

export default Modal;