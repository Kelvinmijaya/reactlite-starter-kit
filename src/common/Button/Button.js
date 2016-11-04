import React, { PropTypes }  from 'react'
import './assets/Button.css'

export const Button = (props) => (
    <button
        disabled={props.isRequesting}
        type={props.types}
        onClick={props.eventClick}
        className={"button "+props.classes}
    >{props.isRequesting ? 'Loading..' : props.label}</button>
)

Button.propTypes = {
    isRequesting: PropTypes.bool,
    types: PropTypes.string.isRequired,
    eventClick: PropTypes.func,
    classes: PropTypes.string,
    label: PropTypes.string.isRequired
}