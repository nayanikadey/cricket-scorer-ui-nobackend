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
                        <th className={props.striker === props.batsmans[0] ? 'color-green right-borders thin-padding' : 'right-borders thin-padding'}>{props.players[props.batsmans[0]].name}</th>
                        <th className={props.striker === props.batsmans[1] ? 'color-green thin-padding' : 'thin-padding'}>{props.players[props.batsmans[1]] !== undefined ? props.players[props.batsmans[1]].name : 'Batsman Coming...'}</th>
                    </tr>
                </Table>
            </Col>
        </Row>
    </div>

const mapStateAsProps = (state) => {
    return ({
        batsmans: state.inningsInformation.batsmans,
        striker: state.inningsInformation.striker,
        players: state.gameInformation[state.gameInformation.currentTeam].players,
    })
};

export default connect(mapStateAsProps)(BatsmanDisplay);