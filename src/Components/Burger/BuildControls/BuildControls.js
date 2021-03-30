import React from 'react';

import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Meat', type: 'meat' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Bacon', type: 'bacon' }
]

const BuildControls = (props) => (
    <div className={classes.BuildControls}>
        <div className={classes.Price}>
            <span>Current price: </span>
            <strong>
                {props.price}
                <span> $</span>
            </strong>
        </div>
        {controls.map(control => {
            return <BuildControl key={control.label} label={control.label} added={() => props.added(control.type)} removed={() => props.removed(control.type)} disabled={props.disabled[control.type]} />
        })}
        <button className={classes.OrderButton} disabled={!props.purchasable}>Order Now</button>
    </div>
);

export default BuildControls;