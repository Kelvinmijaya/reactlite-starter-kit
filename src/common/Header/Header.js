import React from 'react'
import './assets/Header.css'
import Logo from './assets/logo.svg'

export const Header = (props) => (
<div className="app-header">
    <img src={Logo} className="app-logo" alt="logo" />
    <h2>Welcome to React</h2>
</div>
)

Header.propTypes = {

}


export default Header
