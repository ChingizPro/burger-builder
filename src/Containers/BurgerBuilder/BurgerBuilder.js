import React, { Component } from 'react';

import Wrapper from '../../hoc/Wrapper/Wrapper';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {
    // ! another approach
    // constructor(props){
    //     super(props);

    //     this.state = {};
    // }

    state = {
        ingredients: {
            salad: 0,
            meat: 0,
            cheese: 0,
            bacon: 0
        }
    }

    render() {
        return (
            <Wrapper>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls />
            </Wrapper>
        );
    }
}

export default BurgerBuilder;