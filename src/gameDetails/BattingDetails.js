import { connect } from 'react-redux';
import cricketUtility from '../Utility/cricketUtility';
import { StatsDetails } from './StatsTable';


const createRowForBattingDetails = player => [{ value: player.name, className: !player.battingStats.hasPlayed ? 'bold-text right-borders addAstrek' : 'right-borders' },
  { value: player.battingStats.runs, className: 'right-borders' },
  { value: player.battingStats.balls, className: 'right-borders' },
  { value: player.battingStats.fours, className: 'right-borders' },
  { value: player.battingStats.sixes, className: 'right-borders' },
  { value: cricketUtility.getStrikeRateForPlayer(player), className: 'right-borders' }];

const getBattingDetailsDatatoRender = props => Object.keys(props.players)
  .filter(playerKey =>
    props.players[playerKey].battingStats.hasPlayed
  || props.batsmans.includes(playerKey))
  .map(playerKey => createRowForBattingDetails(props.players[playerKey]));


const battingDetailsAsProps = state => ({
  players: state.gameInformation[state.gameInformation.currentTeam].players,
  batsmans: [state.inningsInformation.striker, state.inningsInformation.nonStriker],
  StatsHeader: ['Batsman', 'Runs', 'Balls', 'Fours', 'Sixes', 'Strike rate'],
  tableHeader: 'Batting Table',
  getDatatoRender: props => getBattingDetailsDatatoRender(props),
});

export default connect(battingDetailsAsProps)(StatsDetails);
