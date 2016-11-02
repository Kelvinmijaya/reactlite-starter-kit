import React, { PropTypes } from 'react'
import { Button } from 'react-bootstrap';

export const Counter = (props) => (
    <div style={{ margin: '0 auto' }} >
        <h2>Counter: {props.counter}</h2>
        <Button
            bsStyle="default"
            bsSize="large"
            onClick={props.increment}>
            Increment
        </Button>
        {' '}
        <Button
            bsStyle="info"
            bsSize="large"
            onClick={props.doubleAsync}>
            Double (Async)
        </Button>
    </div>
)

Counter.propTypes = {
    counter: PropTypes.number.isRequired,
    doubleAsync: PropTypes.func.isRequired,
    increment: PropTypes.func.isRequired
}


export default Counter
