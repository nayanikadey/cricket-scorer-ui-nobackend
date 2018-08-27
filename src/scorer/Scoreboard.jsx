import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import {CricketUtility} from '../Utility/cricketUtility';

// Condition 1 : Check for previous played
// Cond 2 :      display team scores

const ScoreBoard = (props) =>
  <Container>
    <br />
    <Row>
      <Col md={{ size: 6, offset: 3 }}>
        <Row>
          <Col md="5" xs="4">
            <b>{props.team1.name}</b>
          </Col>
          <Col sm="1" xs="2" />
          <Col style={{ textAlign: "right" }}>
            <b> {`${props.team1.score}/${props.team1.wickets} in ${props.team1.oversPlayed}/${props.numberOfOvers}`}</b>
          </Col>
        </Row>
      </Col>
    </Row>
    <br />
    <Row>
      <Col md={{ size: 6, offset: 3 }} sm="12">
        <Row>
          <Col>
            {`${props.team2.name} scored`}
          </Col>
          <Col style={{ textAlign: "right" }}>
            <b>{`${props.team2.score}/${props.team2.wickets} in ${props.team2.oversPlayed}/${props.numberOfOvers}`}</b>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>;

const mapStateAsProps = (state) => {
  debugger
  return (
    {
      team1: {
        name: state.gameInformation.team1.name,
        score: state.gameInformation.team1.score,
        wickets: state.gameInformation.team1.wickets,
        oversPlayed: CricketUtility.getOversFromTotalBallsPlayed(state.gameInformation.team1.ballsPlayed)
      },
      team2: {
        name: state.gameInformation.team2.name,
        score: state.gameInformation.team2.score,
        wickets: state.gameInformation.team2.wickets,
        oversPlayed: CricketUtility.getOversFromTotalBallsPlayed(state.gameInformation.team2.ballsPlayed)
      },
      numberOfOvers: state.gameInformation.numberOfOvers,
    }
  )
};



export default connect(mapStateAsProps)(ScoreBoard);