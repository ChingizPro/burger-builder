import React, { Component } from 'react';

import Wrapper from '../Wrapper/Wrapper'
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';
import SideDrawer from '../../Components/Navigation/SideDrawer/SideDrawer';
import Footer from '../../Components/UI/Footer/Footer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    openSideDrawer = () => {
        this.setState({ showSideDrawer: true });
    }

    closeSideDrawer = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    }

    render() {
        return (
            <Wrapper>
                <SideDrawer open={this.state.showSideDrawer} backdropClick={this.closeSideDrawer} />
                <Toolbar menuClick={this.openSideDrawer} />
                <main className={classes.content}>
                    {this.props.children}
                </main>
                <Footer />
            </Wrapper>
        )
    }
}

export default Layout;