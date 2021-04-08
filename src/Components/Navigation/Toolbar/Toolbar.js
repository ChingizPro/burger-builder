import React from 'react';

import classes from './Toolbar.module.css';

const Toolbar = props => (
    <div className={classes.Toolbar}>
        <div>Menu icon</div>
        <div>Logo</div>
        <nav>
            nav links
        </nav>
    </div>
);

export default Toolbar;