import Wrapper from '../../hoc/Wrapper/Wrapper'
import classes from './Layout.module.css';

const Layout = (props) => {
    return (
        <Wrapper>
            [Nav]
            [Toolbar]
            
            <main className={classes.content}>
                {props.children}
            </main>
        </Wrapper>
    )
}

export default Layout;