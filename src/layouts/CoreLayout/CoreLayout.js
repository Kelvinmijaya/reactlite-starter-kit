import React from 'react'
import './assets/normalize.css'
import './assets/CoreLayout.css'
import { Header } from '../../common/Header/Header'

export const CoreLayout = ({ children }) => (
    <div className="app">
        <Header />
        {children}
    </div>
)

CoreLayout.propTypes = {
    children : React.PropTypes.element.isRequired
}

export default CoreLayout
