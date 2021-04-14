import React, { Component } from 'react';

import Wrapper from '../../../hoc/Wrapper/Wrapper';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    componentDidUpdate() {
        console.log('[OrderSummary] update!');
    }

    render() {
        const summary = Object.keys(this.props.ingredients).map(igKey => <li key={igKey}><span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}</li>);

        return (
            <Wrapper>
                <h3>Here is your order</h3>
                <p>It contains the following ingredients:</p>
                <ul>{summary}</ul>
                <p><strong>Price: {this.props.price.toFixed(2)} $</strong></p>
                <p>Continue to checkout ?!</p>
                <Button clicked={this.props.cancelled} type='Danger'>Cancel</Button>
                <Button clicked={this.props.confirmed} type='Success'>Continue</Button>
            </Wrapper>
        );
    }
}

export default OrderSummary;