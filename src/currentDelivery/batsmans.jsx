import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Table } from 'reactstrap';

const BatsmanDisplay = (props) =>
    <div>
        <br />
        <Row>
            <Col>
                This ball
            </Col>
        </Row>
        <Row>
            <Col md={{size: 8, offset: 2}}>
                <Table className='text-center side-borders'>
                    <tr>
                        <th className='color-green right-borders thin-padding'>{props.striker}</th>
                        <th className='thin-padding'>{props.nonStriker}</th>
                    </tr>
                </Table>
            </Col>
        </Row>
    </div>

const mapStateAsProps = (state) => {
    return ({
        striker: state.inningsInformation.striker,
        nonStriker: state.inningsInformation.nonStriker,
    })
};

export default connect(mapStateAsProps)(BatsmanDisplay);