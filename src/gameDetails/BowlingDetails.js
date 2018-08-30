import { connect } from 'react-redux';
import { StatsDetails } from './StatsTable';
import CricketUtility from '../Utility/cricketUtility';

const createRowForBowlingDetails = player => [{ value: player.name, className: 'right-borders' },
  { value: CricketUtility.getOversFromTotalBallsPlayed(player.bowlingStats.overs), className: 'right-borders' },
  { value: player.bowlingStats.maiden, className: 'right-borders' },
  { value: player.bowlingStats.runs, className: 'right-borders' },
  { value: player.bowlingStats.wickets, className: 'right-borders' }];

const getBowlingDetailsDatatoRender = props => Object.keys(props.players)
  .filter(playerKey =>
    props.players[playerKey].bowlingStats.hasBowled)
  .map(playerKey => createRowForBowlingDetails(props.players[playerKey]));


const bowlingDetailsAsProps = state => ({
  players: state.gameInformation[state.gameInformation.previousTeam].players,
  StatsHeader: ['Bowler', 'Overs', 'Maiden', 'Runs', 'Wickets'],
  tableHeader: 'Bowling Table',
  getDatatoRender: props => getBowlingDetailsDatatoRender(props),
});

export default connect(bowlingDetailsAsProps)(StatsDetails);
