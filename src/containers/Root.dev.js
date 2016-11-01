// import React, { PropTypes } from 'react'
// import { Provider } from 'react-redux'
// import routes from '../routes'
// import DevTools from './DevTools'
// import { Router } from 'react-router'
//
// const Root = ({ store, history }) => (
//   <Provider store={store}>
//     <div>
//       <Router history={history} routes={routes} />
//       <DevTools />
//     </div>
//   </Provider>
// )
//
// Root.propTypes = {
//   store: PropTypes.object.isRequired,
//   history: PropTypes.object.isRequired
// }
//
// export default Root


import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import DevTools from './DevTools'

export default class Root extends React.Component {
    static propTypes = {
        history: PropTypes.object.isRequired,
        routes: PropTypes.element.isRequired,
        store: PropTypes.object.isRequired
    };

    get content () {
        return (
            <Router history={this.props.history}>
                {this.props.routes}
            </Router>
        )
    }

    render () {
        return (
            <Provider store={this.props.store}>
                <div style={{ height: '100%' }}>
                    {this.content}
                    <DevTools />
                </div>
            </Provider>
        )
    }
}

