import React, { PropTypes } from 'react'
import './assets/Counter.css';
import { Button } from '../../../../common/Button/Button'

export const Counter = (props) => (
    <div style={{ margin: '0 auto' }} >
        <h2>Counter: {props.counter}</h2>
        <Button types="button" classes="default" label="Increment" eventClick={props.increment} />
        {' '}
        <Button types="button" classes="primary" label="Double (Async)" eventClick={props.doubleAsync} />
    </div>
)

Counter.propTypes = {
    counter: PropTypes.number.isRequired,
    doubleAsync: PropTypes.func.isRequired,
    increment: PropTypes.func.isRequired
}

export default Counter
