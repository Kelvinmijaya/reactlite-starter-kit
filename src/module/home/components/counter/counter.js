import React, { PropTypes } from 'react'
import './assets/Counter.css';

export const Counter = (props) => (
    <div style={{ margin: '0 auto' }} >
        <h2>Counter: {props.counter}</h2>
        <button className="button default" onClick={props.increment} >Increment</button>
        {' '}
        <button className="button primary" onClick={props.doubleAsync} >Double (Async)</button>
    </div>
)

Counter.propTypes = {
    counter: PropTypes.number.isRequired,
    doubleAsync: PropTypes.func.isRequired,
    increment: PropTypes.func.isRequired
}

export default Counter
