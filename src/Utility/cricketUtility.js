// Util Method to convert balls Played to over

const CricketUtility = {
  getOversFromTotalBallsPlayed: (numberOfBallsPlayed) => {
    const ballsOfOver = numberOfBallsPlayed % 6;
    const overNumber = Math.floor(numberOfBallsPlayed / 6);
    return ballsOfOver !== 0 ? `${overNumber}.${ballsOfOver}` : overNumber;
  },

  getTeamNameForTheTeam: team => (team.name),

  getPlayingTeamScore: (team, numberOfOvers) => `${team.score}/${team.wickets} in ${team.oversPlayed}/${numberOfOvers}`,

  getPlayedTeamScoreForScorerPage: (team, numberOfOvers) => `${CricketUtility.getTeamNameForTheTeam(team)} scored ${CricketUtility.getPlayingTeamScore(team, numberOfOvers)}`,

  getBallsFromOvers: overs => overs * 6,

  getStrikeRateForPlayer: player => ((player.battingStats.balls) > 0 ?
    (player.battingStats.runs * 100) / (player.battingStats.balls) : 0).toFixed(2),

  // method to change when extras will be implemented
  isOverChanged: numberOfBallsPlayed => (numberOfBallsPlayed % 6 === 0),

  getBowlingTeam: gameInformation => (
    Object.keys(gameInformation)
      .filter(element => element !== 'numberOfOvers'
          && element !== 'currentTeam'
          && element !== 'previousTeam'
          && element !== gameInformation.currentTeam)
  ),

  isLegalDelivery: (extra) => {
    switch (extra) {
      case 'W':
        return false;
      case 'N':
        return false;
      default:
        return true;
    }
  },

  getRunsAfterAddingExtra: (runs, isLegalBall) => runs + parseInt(isLegalBall ? 0 : 1, 10),
};
export default CricketUtility;

