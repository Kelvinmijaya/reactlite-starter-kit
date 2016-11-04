import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { increment, doubleAsync } from '../redux/home'
import Counter from '../components/Counter/Counter'
import '../assets/HomeView.css'

export class HomeView extends React.Component {
    render () {
        return (
<<<<<<< HEAD
            <div className="container text-center" >
                <div className="row">
                    <div className="col-xs-12">
                        <p className="app-intro">To get started, edit <code>src/module/home/views/HomeView.js</code> and save to reload.</p>
                        <Counter counter={this.props.home} doubleAsync={this.props.doubleAsync} increment={this.props.increment} />
                    </div>
                </div>
=======
            <div>
                <p className="app-intro">To get started, edit <code>src/module/home/view/HomeView.js</code> and save to reload.</p>
                <Counter counter={this.props.home} doubleAsync={this.props.doubleAsync} increment={this.props.increment} />
>>>>>>> Kelvinmijaya/master
            </div>
        )
    }
}

HomeView.propTypes = {
    home: PropTypes.number.isRequired,
    doubleAsync: PropTypes.func.isRequired,
    increment: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    home: state.home
})

export default connect(mapStateToProps, {
    increment: () => increment(1),
    doubleAsync
})(HomeView)
