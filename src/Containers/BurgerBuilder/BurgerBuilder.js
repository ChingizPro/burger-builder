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
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 1
        }
    }

    addIngredientHandler = (type) => {
        let oldCount = this.state.ingredients[type];
        const newCount = ++oldCount;
        let clonedIngredients = { ...this.state.ingredients };
        clonedIngredients[type] = newCount;
        this.setState({ ingredients: clonedIngredients });
    }

    render() {
        return (
            <Wrapper>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls added={this.addIngredientHandler} />
            </Wrapper>
        );
    }
}

export default BurgerBuilder;