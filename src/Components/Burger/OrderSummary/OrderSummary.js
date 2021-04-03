import React from 'react';

import Wrapper from '../../../hoc/Wrapper/Wrapper';

const OrderSummary = (props) => {
    const summary = Object.keys(props.ingredients).map(igKey => <li key={igKey}><span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}</li>);

    return (
        <Wrapper>
            <h3>Here is your order</h3>
            <p>It contains the following ingredients:</p>
            <ul>{summary}</ul>
            <p>Continue to checkout ?!</p>
        </Wrapper>
    );
}

export default OrderSummary;