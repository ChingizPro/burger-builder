import Wrapper from '../../hoc/Wrapper/Wrapper'
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';

const Layout = (props) => {
    return (
        <Wrapper>
            <Toolbar />
            <main className={classes.content}>
                {props.children}
            </main>
        </Wrapper>
    )
}

export default Layout;