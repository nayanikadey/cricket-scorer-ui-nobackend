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
                        <th className={props.striker === props.batsmans[0] ? 'color-green right-borders thin-padding' : 'right-borders thin-padding'}>{props.batsmans[0]}</th>
                        <th className={props.striker === props.batsmans[1] ? 'color-green thin-padding' : 'thin-padding'}>{props.batsmans[1]}</th>
                    </tr>
                </Table>
            </Col>
        </Row>
    </div>

const mapStateAsProps = (state) => {
    return ({
        batsmans: state.inningsInformation.batsmans,
        striker: state.inningsInformation.striker,
    })
};

export default connect(mapStateAsProps)(BatsmanDisplay);