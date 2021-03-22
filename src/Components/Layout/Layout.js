import Wrapper from '../../hoc/Wrapper/Wrapper'

const Layout = (props) => {
    return (
        <Wrapper>
            [Nav]
            [Toolbar]
            [Backdrop]
            {props.children}
        </Wrapper>
    )
}

export default Layout;