import React from 'react';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import CricketUtility from '../Utility/cricketUtility';
import { HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'

// Condition 1 : Check for previous played
// Cond 2 :      display team scores

const ScoreBoard = (props) =>
  <div>
    <Row className='large-font-size'>
      {arrow_left(props)}
      <Col>
        <b> {CricketUtility.getTeamNameForTheTeam(props.team1)}</b>
      </Col>
      <Col style={{ textAlign: "right" }}>
        <b> {CricketUtility.getPlayingTeamScore(props.team1, props.numberOfOvers)}</b>
      </Col>
      {arrow_rigth(props)}
    </Row>
    <br />
  </div>

const arrow_rigth = (props) => {
  if(props.pageName === 'scorer')
    return(<Col md={{size: 1}}>
      <div className='text-right'>
        <Link to="/gameDetails" className='link-arrow'>
          <FontAwesomeIcon icon={faArrowCircleRight} />
        </Link>
      </div>
    </Col>);
};


const arrow_left = (props) => {
  if(props.pageName === 'gameDetails')
    return(<Col md={{size: 1}}>
      <div className='text-left'>
        <Link to="/scorer" className='link-arrow'>
          <FontAwesomeIcon icon={faArrowCircleLeft} />
        </Link>
      </div>
    </Col>);
};

const ScoredCardForPlayedTeam = (props) => {
  if (props.team2.name) {
    return (
      <Row>
        <Col>
          {CricketUtility.getPlayedTeamScoreForScorerPage(props.team2, props.numberOfOvers)}
        </Col>
      </Row>
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