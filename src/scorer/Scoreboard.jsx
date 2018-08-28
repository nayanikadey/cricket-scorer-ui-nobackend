import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import CricketUtility from '../Utility/cricketUtility';

// Condition 1 : Check for previous played
// Cond 2 :      display team scores

const ScoreBoard = (props) =>
<Container>
<br />
<Row className='large-font-size'>
  <Col md={{ size: 6, offset: 3 }}>
    <Row>
      <Col md="5" xs="4">
        <b> {CricketUtility.getTeamNameForTheTeam(props.team1)}</b>
      </Col>
      <Col md={{ size: 4 }} style={{ textAlign: "right" }}>
        <b> {CricketUtility.getPlayingTeamScore(props.team1, props.numberOfOvers)}</b>
      </Col>
    </Row>
  </Col>
</Row>
</Container>;


const ScoredCardForPlayedTeam = (props) => {
  if (props.team2.name) {
    return (
      <Container>
        <Row>
          <Col md={{ size: 6, offset: 3 }} sm="12">
            <Row>
              <Col>
                {CricketUtility.getPlayedTeamScoreForScorerPage(props.team2, props.numberOfOvers)}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateAsProps = (state) => {
  const currentTeam = state.gameInformation.currentTeam;
  const previousTeam = state.gameInformation.previousTeam;

  return (
    {
      team1: {
        name: currentTeam,
        score: state.inningsInformation.totalScore,
        wickets: state.inningsInformation.wickets,
        oversPlayed: CricketUtility.getOversFromTotalBallsPlayed(state.inningsInformation.balls)
      },
      team2: {
        name: previousTeam,
        score: state.gameInformation[previousTeam].score,
        wickets: state.gameInformation[previousTeam].wickets,
        oversPlayed: CricketUtility.getOversFromTotalBallsPlayed(state.gameInformation[previousTeam].ballsPlayed)
      },
      numberOfOvers: state.gameInformation.numberOfOvers,
    }
  )
};

export const ConnectedScoreBoard = connect(mapStateAsProps)(ScoreBoard);
export const ConnectedScoredCardForPlayedTeam = connect(mapStateAsProps)(ScoredCardForPlayedTeam);