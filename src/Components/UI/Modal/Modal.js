import React, { Component } from 'react';

import Wrapper from '../../../hoc/Wrapper/Wrapper';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.module.css';

class Modal extends Component {
    componentDidUpdate() {
        console.log('[Modal] update!');
    }

    render() {
        return (
            <Wrapper>
                <Backdrop visible={this.props.showModal} click={this.props.hideModal} />
                <div className={classes.Modal} style={{ transform: this.props.showModal ? 'translateY(0vh)' : 'translateY(-100vh)' }}>
                    {this.props.children}
                </div>
            </Wrapper>
        );
    }
};

export default Modal;