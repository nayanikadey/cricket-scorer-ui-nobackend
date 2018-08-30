import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';


const CurrentOverStats = props => (
  <div>
    <br />
    <Row>
      <Col md={{ size: 4 }}>
        This Over
      </Col>
      <Col style={{ textAlign: 'left' }}>
        {props.runsPerOver.join(' ')}
      </Col>
    </Row>
    <Row>
      <Col>
        Bowler: {props.bowlerName}
      </Col>
    </Row>
  </div>
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
  return ({
    bowlerName,
    runsPerOver: state.currentOverStats.runsPerOver,
  });
};

export default connect(mapStateAsPropsForCurrentOverStats)(CurrentOverStats);
