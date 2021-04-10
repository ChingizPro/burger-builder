import Wrapper from '../../hoc/Wrapper/Wrapper'
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const Layout = (props) => {
    return (
        <Wrapper>
            <SideDrawer />
            <Toolbar />
            <main className={classes.content}>
                {props.children}
            </main>
        </Wrapper>
    )
}

export default Layout;