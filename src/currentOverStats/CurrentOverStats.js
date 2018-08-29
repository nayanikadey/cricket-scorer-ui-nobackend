import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import CricketUtility from '../Utility/cricketUtility';


const CurrentOverStats = props => (
  <Container>
    <br />
    <Row>
      <Col md={{ size: 3, offset: 3 }}>
        <Row>
          <Col md="5" xs="4">
            This Over
          </Col>
          <Col sm="1" xs="2" />
          <Col style={{ textAlign: 'left' }}>
            {props.runsPerOver.join(' ')}
          </Col>
        </Row>
      </Col>
    </Row>
    <Row>
      <Col md={{ size: 3, offset: 3 }} sm="12">
        Bowler: {props.bowlerName}
      </Col>
    </Row>
  </Container>
);

CurrentOverStats.propTypes = {
  bowlerName: PropTypes.string.isRequired,
  runsPerOver: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number])).isRequired,
};


const mapStateAsPropsForCurrentOverStats = (state) => {
  const previousTeamName = state.gameInformation.previousTeam;
  const playerListFromPreviousTeam = state.gameInformation[previousTeamName].players;
  const bowlerName = playerListFromPreviousTeam[state.inningsInformation.bowler].name;
  const isOverChanged = CricketUtility.isOverChanged(state.inningsInformation.balls);
  return ({
    bowlerName,
    runsPerOver:  isOverChanged ? [] : state.currentOverStats.runsPerOver,
  });
};

export default connect(mapStateAsPropsForCurrentOverStats)(CurrentOverStats);
