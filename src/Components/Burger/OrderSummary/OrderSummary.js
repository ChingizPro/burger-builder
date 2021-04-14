import React from 'react';

import Wrapper from '../../../hoc/Wrapper/Wrapper';
import Button from '../../UI/Button/Button';

const OrderSummary = props => {
    const summary = Object.keys(props.ingredients).map(igKey => <li key={igKey}><span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}</li>);

    return (
        <Wrapper>
            <h3>Here is your order</h3>
            <p>It contains the following ingredients:</p>
            <ul>{summary}</ul>
            <p><strong>Price: {props.price.toFixed(2)} $</strong></p>
            <p>Continue to checkout ?!</p>
            <Button clicked={props.cancelled} type='Danger'>Cancel</Button>
            <Button clicked={props.confirmed} type='Success'>Continue</Button>
        </Wrapper>
    );
}

export default OrderSummary;