import React, { Component } from 'react';

import Wrapper from '../../hoc/Wrapper/Wrapper';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.4,
    meat: 1.2,
    cheese: 0.5,
    bacon: 0.8
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            meat: 0,
            cheese: 0,
            bacon: 0
        },
        totalPrice: 1
    }

    addIngredientHandler = (type) => {
        let oldCount = this.state.ingredients[type];
        const newCount = ++oldCount;
        let clonedIngredients = { ...this.state.ingredients };
        clonedIngredients[type] = newCount;

        let currentPrice = this.state.totalPrice;
        let priceAddition = INGREDIENT_PRICES[type];
        let newPrice = currentPrice + priceAddition;

        this.setState({ ingredients: clonedIngredients, totalPrice: newPrice });
    }

    removeIngredientHandler = (type) => {
        let oldCount = this.state.ingredients[type];
        let newCount = --oldCount;
        let clonedIngredients = { ...this.state.ingredients };
        clonedIngredients[type] = newCount;

        let currentPrice = this.state.totalPrice;
        let priceDeduction = INGREDIENT_PRICES[type];
        let newPrice = currentPrice - priceDeduction;

        this.setState({ ingredients: clonedIngredients, totalPrice: newPrice });
    }

    render() {
        const disabledInfo = { ...this.state.ingredients };
        for (let i in disabledInfo) {
            disabledInfo[i] = disabledInfo[i] <= 0;
        }

        return (
            <Wrapper>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls added={this.addIngredientHandler} removed={this.removeIngredientHandler} price={this.state.totalPrice.toFixed(2)} disabled={disabledInfo} />
            </Wrapper>
        );
    }
}

export default BurgerBuilder;