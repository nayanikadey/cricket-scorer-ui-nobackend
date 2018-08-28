import React from 'react';
import { connect } from 'react-redux';
import { Table, Container, Row, Col } from 'reactstrap';
import cricketUtility from '../Utility/cricketUtility';


const createRowForBattingDetails = player => (
  <tr>
    <td className={`${!player.battingStats.hasPlayed ? 'bold-text' : ''} right-borders`}>
      {`${player.name}${!player.battingStats.hasPlayed ? '*' : ''}`}
    </td>
    <td className="right-borders">{player.battingStats.runs}</td>
    <td className="right-borders">{player.battingStats.balls}</td>
    <td className="right-borders">{player.battingStats.fours}</td>
    <td className="right-borders">{player.battingStats.sixes}</td>
    <td>{cricketUtility.getStrikeRateForPlayer(player)}</td>
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
        <h6>Batting Team</h6>
      </Col>
    </Row>
    <Row>
      <Col md={{ size: 6, offset: 3 }}>
        <Table striped className="side-borders" size="sm">
          <thead className="dark-table-header">
            <tr>
              <th className="right-borders">Batsman</th>
              <th className="right-borders">Runs</th>
              <th className="right-borders">Balls</th>
              <th className="right-borders">Fours</th>
              <th className="right-borders">Sixes</th>
              <th>Strike rate</th>
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
