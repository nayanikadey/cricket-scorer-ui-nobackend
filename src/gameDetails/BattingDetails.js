import React from 'react';
import { connect } from 'react-redux';
import { Table, Container, Row, Col } from 'reactstrap';


const createRowForBattingDetails = player => (
  <tr>
    <td>{player.name}</td>
    <td>{player.battingStats.runs}</td>
    <td>{player.battingStats.balls}</td>
    <td>{player.battingStats.fours}</td>
    <td>{player.battingStats.sixes}</td>
  </tr>
);

const getPlayerDetails = props => Object.keys(props.players)
  .filter(playerKey =>
    props.players[playerKey].battingStats.hasPlayed
        || props.batsmans.includes(playerKey))
  .map(playerKey => createRowForBattingDetails(props.players[playerKey]));


const ScoreBattingDetails = props => (
  <Container>
    <Row>
      <Col md={{ size: 6, offset: 3 }}>
        <Table>
          <thead>
            <tr>
              <th>Batsman</th>
              <th>Runs</th>
              <th>Balls</th>
              <th>Fours</th>
              <th>Sixed</th>
              <th>StrikeRate</th>
            </tr>
          </thead>
          <tbody>
            {getPlayerDetails(props)}
          </tbody>
        </Table>
      </Col>
    </Row>
  </Container>
);


const battingDetailsAsProps = state => ({
  players: state.gameInformation[state.gameInformation.currentTeam].players,
  batsmans: [state.inningsInformation.striker, state.inningsInformation.nonStriker],
});

export default connect(battingDetailsAsProps)(ScoreBattingDetails);
