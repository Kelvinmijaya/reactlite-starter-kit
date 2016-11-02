import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap';
import { increment, doubleAsync } from '../components/counter/redux/counter'
import Counter from '../components/counter/counter'
import '../assets/HomeView.css'

export class HomeView extends React.Component {
    props: Props;
    static propTypes = {
        counter: PropTypes.number.isRequired,
        doubleAsync: PropTypes.func.isRequired,
        increment: PropTypes.func.isRequired
    };

    render () {
        return (
            <Grid bsClass={'text-center'}>
                <Row>
                    <Col xs={12}>
                        <p className="app-intro">To get started, edit <code>src/module/home/view/HomeView.js</code> and save to reload.</p>
                        <Counter counter={this.props.counter} doubleAsync={this.props.doubleAsync} increment={this.props.increment} />
                    </Col>
                </Row>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => ({
    counter: state.counter
})

HomeView.propTypes = {
    counter: PropTypes.number,
    doubleAsync: PropTypes.func,
    increment: PropTypes.func
}

export default connect(mapStateToProps, {
    increment: () => increment(1),
    doubleAsync
})(HomeView)
