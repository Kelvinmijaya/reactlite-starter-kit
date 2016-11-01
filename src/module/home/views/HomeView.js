import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap';
import { increment, doubleAsync } from '../components/counter/redux/counter'
import DuckImage from '../assets/Duck.jpg'
import { Counter } from '../components/counter'
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
                    <Col xs={6} xsOffset={3}>
                        <img src={DuckImage} alt='This is a duck, because Redux.' />
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
