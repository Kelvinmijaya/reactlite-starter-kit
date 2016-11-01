import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap';
import './CoreLayout.css'

export const CoreLayout = ({ children }) => (
    <Grid>
        <Row>
            <Col xs={12}>
                {children}
            </Col>
        </Row>
    </Grid>
)

CoreLayout.propTypes = {
    children : React.PropTypes.element.isRequired
}

export default CoreLayout
