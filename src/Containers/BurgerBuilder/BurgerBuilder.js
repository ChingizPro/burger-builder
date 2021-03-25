import React, { Component } from 'react';

import Wrapper from '../../hoc/Wrapper/Wrapper';
import Burger from '../../Components/Burger/Burger';

class BurgerBuilder extends Component {
    // ! another approach
    // constructor(props){
    //     super(props);

    //     this.state = {};
    // }

    state = {
        ingredients: {
            salad: 2,
            meat: 1,
            cheese: 1,
            bacon: 2
        }
    }

    render() {
        return (
            <Wrapper>
                <Burger ingredients={this.state.ingredients} />
                <div>Build Controls</div>
            </Wrapper>
        );
    }
}

export default BurgerBuilder;