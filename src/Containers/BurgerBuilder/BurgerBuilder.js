import React, { Component } from 'react';

import Wrapper from '../../hoc/Wrapper/Wrapper';
import Burger from '../../Components/Burger/Burger';

class BurgerBuilder extends Component {
    render() {
        return (
            <Wrapper>
                <Burger />
                <div>Build Controls</div>
            </Wrapper>
        );
    }
}

export default BurgerBuilder;