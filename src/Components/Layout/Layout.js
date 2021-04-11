import React, { Component } from 'react';

import Wrapper from '../../hoc/Wrapper/Wrapper'
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    openSideDrawer = () => {
        this.setState({ showSideDrawer: true });
    }

    closeSideDrawer = () => {
        this.setState({ showSideDrawer: false });
    }

    render() {
        return (
            <Wrapper>
                <SideDrawer open={this.state.showSideDrawer} backdropClick={this.closeSideDrawer} />
                <Toolbar menuClick={this.openSideDrawer} />
                <main className={classes.content}>
                    {this.props.children}
                </main>
            </Wrapper>
        )
    }
}

export default Layout;