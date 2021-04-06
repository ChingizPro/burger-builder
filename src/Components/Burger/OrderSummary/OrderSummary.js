import React from 'react';

import Wrapper from '../../../hoc/Wrapper/Wrapper';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
    const summary = Object.keys(props.ingredients).map(igKey => <li key={igKey}><span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}</li>);

    return (
        <Wrapper>
            <h3>Here is your order</h3>
            <p>It contains the following ingredients:</p>
            <ul>{summary}</ul>
            <p>Continue to checkout ?!</p>
            <Button clicked={props.cancelled}>Cancel</Button>
            <Button clicked={props.confirmed}>Continue</Button>
        </Wrapper>
    );
}

export default OrderSummary;