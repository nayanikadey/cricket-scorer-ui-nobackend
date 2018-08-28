import CricketUtility from './cricketUtility';

describe('cricketUtility', () => {
  it('Expects Whole Number when over is complete', () => {
    const overs = CricketUtility.getOversFromTotalBallsPlayed(6);
    expect(overs).toEqual(1);
  });
  it('Expects Over in decimal format when over is still in progress', () => {
    const overs = CricketUtility.getOversFromTotalBallsPlayed(4);
    expect(overs).toEqual('0.4');
  });

  it('Expects the Team 1 as Team Name for the Team 1 ', () => {
    const team = {
      name: 'Team 1',
    };

    const teamName = CricketUtility.getTeamNameForTheTeam(team);
    expect(teamName).toEqual('Team 1');
  });

  it('Expects the Team 2 as Team Name for the Team 2 ', () => {
    const team = {
      name: 'Team 2',
    };

    const teamName = CricketUtility.getTeamNameForTheTeam(team);
    expect(teamName).toEqual('Team 2');
  });


  it('Expects The 120/4 in 0.4/5 for the Team 1', () => {
    const team = {
      score: 120,
      wickets: 4,
      oversPlayed: '0.4',
      numberOfOvers: 5,
    };
    const numberOfOvers = 5;
    const scoreCard = CricketUtility.getPlayingTeamScore(team, numberOfOvers);
    expect('120/4 in 0.4/5').toEqual(scoreCard);
  });


  it('Expects The Played Team Score to be showed on scorer Page', () => {
    const team = {
      name: 'Team 2',
      score: 150,
      wickets: 7,
      oversPlayed: '0',
      numberOfOvers: 5,

    };
    const numberOfOvers = 5;
    const scoreCard = CricketUtility.getPlayedTeamScoreForScorerPage(team, numberOfOvers);
    expect('Team 2 scored 150/7 in 0/5').toEqual(scoreCard);
  });

  it('Expects the number of balls in an over', () => {
    const numberOfOvers = 5;
    const balls = CricketUtility.getBallsFromOvers(numberOfOvers);
    expect(30).toEqual(balls);
  });
});
